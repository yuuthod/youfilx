import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "api";

// 컨테이너 컴포넌트

export default class extends React.Component{
  
  // isMovie를 constructor 함수 안에 만든 이유 
  // 전역으로 사용하기 위해서인듯 하다.

  // constructor 함수 안에는 무조건 super()가 있어야 하며,
  // 이는 this를 초기화 하기 위함이다. ( 생성자 함수 초기화 )
  // super(props)를 사용하는 이유는 constructor 함수 안에서
  // this.props 를 사용하기 위함이고, 다른곳에서 사용하려면
  // 굳이 뭔가를 넣어줄 필요가 없다. ( 리액트가 자동으로 세팅해주기 때문 )
  constructor(props) {
    super(props);
    const { location: { pathname } } = props;

    // id값을 가져와서 하나의 결과값만 보여준다.
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/")
    }
  }

  async componentDidMount() {
    const {
      match: { params: { id } },
      history: { push }
    } = this.props;
    const { isMovie } = this.state;

     

    // parseInt : string >> number
    // id 가 number가 아니면 home 으로 return
    const parseId = parseInt(id);
    if(isNaN(parseId)){
      return push("/");
    }

    let result = null;
    try {
      // const a = "dd" === (a = "dd")
      if(isMovie){
        ({data: result} = await moviesApi.movieDetail(parseId));
      } else {
        ({data: result} = await tvApi.tvDetail(parseId));
      }
    } catch {
      this.setState({ error: "can't find anything "});
    } finally {  
      // result가 tv던 movie던 값을 받아서 state에 기록함
      this.setState( {loading : false, result });
    }
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