import React from "react";
import { withRouter } from "react-router-dom";

function WithRouterSample({ location, match, history }) {
  return (
    <div>
      <h4>location</h4>
      {/* JSON>stringify의 2,3 번째 파라미터 null, 2로 설정: JSON에 들여쓰기가 적용된 상태로 문자열 만들어짐  */}
      <textarea value={JSON.stringify(location, null, 2)} rows={7} readOnly={true} />
      <h4>match</h4>
      <textarea value={JSON.stringify(match, null, 2)} rows={7} readOnly={true} />
      <button onClick={() => history.push("/")}>홈으로</button>
    </div>
  );
}

export default withRouter(WithRouterSample);
