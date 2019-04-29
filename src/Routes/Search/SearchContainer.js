import React from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi, tvApi } from "api";

export default class extends React.Component{
  state = {
    // 검색 결과
    movieResult: null,
    tvResult: null,
    // 검색 내용
    searchTerm: "code",
    // 검색 하면 true
    loading: false,
    // error 있으면 값넣고, 없으면 null 유지
    error: null
  }

  // #1
  // componentDidMount일때 handleSubmit을 호출
  componentDidMount() {
    this.handleSubmit();
  }

  // #2
  // 호출했을때 searchTerm의 기본값은 "code"
  // 폼에 입력한 데이터를 Submit
  handleSubmit = () => {
    const { searchTerm } = this.state;
    if(searchTerm !== ""){
      this.searchByTerm(searchTerm);
    }
  }

  // #3
  // searchByTerm이 호출되고, mocieResult와 tvResult를 찾는다.
  // 검색 결과
  //searchByTerm = term => {
  //아래와 동일
  searchByTerm = async() => {
    const { searchTerm } = this.state;
    try {
      const {
        data: { result: movieResult }
      } = await moviesApi.search(searchTerm);
      const {
        data: { result: tvResult }
      } = await tvApi.search(searchTerm);
      this.setState({
        movieResult,
        tvResult
      })
    } catch {
      this.setState({ error: "Can't find results "})
    } finally {
      this.setState({ loading: false })
    }
  }

  render() {
    const { 
      movieResult, 
      tvResult, 
      searchTerm, 
      loading, 
      error }  
      = this.state;
    
    return (
      <SearchPresenter 
        movieResult={movieResult}
        tvResult={tvResult}
        searchTerm={searchTerm}
        loading={loading}
        error={error}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}