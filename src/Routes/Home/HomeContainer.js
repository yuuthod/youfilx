import React from "react";
import HomePresenter from "./HomePresenter";

// 컨테이너 컴포넌트

export default class extends React.Component{
  state = {
    nowPlaying: null,
    upcoming: null,
    topRated: null,
    error: null,
    loading: true
  }

  // HomePresenter로 가는 모든 스테이트 값을 렌더링
  // Presenter(보여주는)것 없이 렌더링만
  render() {
    const { nowPlaying, upcoming, topRated, error, loading } = this.state;
    return (
      <HomePresenter 
        nowPlaying={nowPlaying} 
        upcomig={upcoming}
        topRated={topRated}
        error={error}
        loading={loading}
      />
    );
  }
}