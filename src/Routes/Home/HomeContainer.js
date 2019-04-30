import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "api";

// 컨테이너 컴포넌트

export default class extends React.Component{
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true
  }

  // 2option
  // 1. 전체 API 요청을 한꺼번에 할 수 있고,
  // 2. 각각의 요청을 분리된 함수로 만들어서 따로 요청 가능
  // 그렇게 크지 않다면 componentDidmount 안에서 전부 해결
  async componentDidMount() {
    // async
    // await
    // 뭔가를 끝낼때까지 기다리는 함수
    try{
      const {
        data: {results: nowPlaying}
      } = await moviesApi.nowPlaying();
      const {
        data: {results: upcoming}
      } = await moviesApi.upcoming();
      const {
        data: {results: popular}
      } = await moviesApi.popular();
      this.setState({
        // nowPlaying : nowPlaying 
        // 동일하게 인식
        nowPlaying,
        upcoming,
        popular
      })
    } catch {
        this.setState({
          error: "Can't find movies imformation."
        })
    } finally {
        this.setState({
          loading: false
        })
    }
  }

  // HomePresenter로 가는 모든 스테이트 값을 렌더링
  // Presenter(보여주는)것 없이 렌더링만
  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    return (
      <HomePresenter 
        nowPlaying={nowPlaying} 
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}