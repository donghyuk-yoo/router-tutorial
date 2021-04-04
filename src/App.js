import React from "react";
import { Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";

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
      </ul>
      <Route path="/" component={Home} exact={true} />
      {/* 다른 path에 같은 컴포넌트 보여주기 */}
      <Route path={["/about", "/info"]} component={About} />
    </div>
  );
}

export default App;
