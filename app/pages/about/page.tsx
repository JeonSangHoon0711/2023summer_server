// SelfIntroduction.tsx
import React from 'react';
import Link from "next/link";
import "../../style/about.css"

const SelfIntroduction: React.FC = () => {
  const name = '홍길동';
  const age = 25;
  const job = '프로그래머';
  const interests = ['코딩', '독서', '운동', '여행'];

  return <>
        <button className = "login">로그인</button>

<div className="blogContainer">
    <a id="blog" href="/">블로그</a>
</div> 

<hr></hr>

    <div className="menubuttonContainer">
      <button className="categorybtn">≡</button>
      <button className="menubtn"><Link href="/">Home</Link></button>
      <button className="menubtn"><Link href="/pages/about">About</Link></button>
    </div>
<hr></hr>

    <div className="grid-container">
      <h1 className="title">자기소개</h1>
      <div className="name">이름: {name}</div>
      <div className="age">나이: {age} 세</div>
      <div className="job">직업: {job}</div>
      <div className="interests">
        <p>관심사:</p>
        <ul>
          {interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </div>
    </div>
  </>
};

export default SelfIntroduction;