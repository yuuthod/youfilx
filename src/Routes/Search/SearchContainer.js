import React from "react";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component{
  state = {
    // 검색 결과
    movieResult: null,
    tvResult: null,
    // 검색 내용
    searchTerm: "",
    // 검색 하면 true
    loading: false,
    // error 있으면 값넣고, 없으면 null 유지
    error: null
  }
  render() {
    const { movieResult, tvResult, searchTerm, loading, error }  = this.state
    return (
      <SearchPresenter 
        movieResult={movieResult}
        tvResult={tvResult}
        searchTerm={searchTerm}
        loading={loading}
        error={error}
      />
    );
  }
}