import React from "react";
import DetailPresenter from "./DetailPresenter";

// 컨테이너 컴포넌트

export default class extends React.Component{
  // id값을 가져와서 하나의 결과값만 보여준다.
  state = {
    result: null,
    error: null,
    loading: true
  }

  render() {
    const { result, error, loading } = this.state;
    return (
      <DetailPresenter 
        result={result}
        error={error}
        loading={loading}
      />
    );
  }
}