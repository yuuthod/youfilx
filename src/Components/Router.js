import React from "react";
//import { HashRouter as Router, Route } from "react-router-dom";
// URL에 /#/이 붙고 내 HASH를 사용한다.
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
// url이 보여지는 형태가 다름 -> 일반 브라우저처럼 보여짐
// HTML history API 사용
// 두가지가 큰 차이가 있지는 않음
import Header from "Components/Header";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";

export default () => (
    <Router>
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/tv"  component={TV} />
                {/* <Route path="/tv/popular" render={() => <h1>popular</h1>} /> */}
                <Route path="/search" component={Search} />
                <Redirect from="*" to="/" />
            </Switch>
        </>
    </Router>
);

// Swich : 한번에 하나의 Router만 Render하게됨
// 두개가 Render되면 오류남

// <Route path="/tv/popular" render={() => <h1>popular</h1>} />
// path가 일부라도 일치하면 로드됨
// /tv
// /tv/anything
// /tv로 시작하는 어떤 path던 tv가 같이 로드된다.
// 위의 일을 발생시키지 않으려면 TV Router에 exact을 넣어 '정확히' 일치해야지만 로드될 수 있도록 해줘야 한다.

// path > 어느 URL 에서 Router를 render 할 지 알려주고
// component > 누군가 Router에 도착했을때 어떤 컴포넌트가 보여질 건지 

// <Redirect from="*" to="/" /> 
// 일치하는 url이 없다면 여기서 모두 리다이렉트