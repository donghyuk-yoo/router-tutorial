import React from "react";

const data = {
  deeperstill: {
    name: "딥",
    description: "리액트를 좋아하는 개발자",
  },
  gildong: {
    name: "홍길동",
    description: "고전 소설 주인공",
  },
};
// URL파라미터, 라우트로 사용되는 컴포넌트에서 받아 오는 match라는 객체 안의 params 값을 참조
// match 객체안에는 현재 컴포넌트가 어떤 경로 규칙에 의해 보이는지에 대한 정보가 들어 있다.
function Profile({ match }) {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자</div>;
  }

  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
}

export default Profile;
