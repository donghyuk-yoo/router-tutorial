import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
      <hr />
      {/* switch 일치하는 단 하나의 라우트만을 렌더링 시켜준다. */}
      <Switch>
        <Route path="/" component={Home} exact={true} />
        {/* 다른 path에 같은 컴포넌트 보여주기 */}
        <Route path={["/about", "/info"]} component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        {/* path를 따로 정의하지 않으면 모든 상황에 렌더링됨 */}
        <Route
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재 안함:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
