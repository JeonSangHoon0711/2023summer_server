// SelfIntroduction.tsx
import React from 'react';
import Link from "next/link";
import Header from "./header"
const SelfIntroduction: React.FC = () => {
  const name = '홍길동';
  const age = 25;
  const job = '프로그래머';
  const interests = ['코딩', '독서', '운동', '여행'];

  return <>

  <Header/>
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