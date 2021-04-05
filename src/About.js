import React from "react";
import qs from "qs";

function About({ location }) {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, // 이 설정을 통해 문자열 맨 앞의 ? 생략
  });
  const showDetail = query.detail === "true";

  return (
    <div>
      <h1>소개</h1>
      <p>라우터 기초</p>
      {showDetail && <p>detail 값을 true로 설정</p>}
    </div>
  );
}

export default About;
