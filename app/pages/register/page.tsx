// SignupPage.tsx
"use client";
import React, { useState } from "react";
import "../../style/register.css";
import { useRouter } from 'next/navigation';

const SignupPage: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>(""); // 비밀번호 확인 상태 추가

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 비밀번호 확인과 일치하는지 확인
    if (password !== passwordConfirmation) {
      alert("비밀번호가 일치하지 않습니다. 다시 확인해주세요.");
      return;
    }
    // 회원가입 로직을 여기서 처리하면 됩니다.
    router.push('/');
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="signup-page-container">
      <h1>회원가입 페이지</h1>
      <form onSubmit={handleSubmit} className={"signup-form"}>
        <div className="form-row">
          <label htmlFor="name">이름 : </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br></br>
        <div className="form-row">
          <label htmlFor="email">이메일 : </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br></br>
        <div className="form-row">
          <label htmlFor="password">비밀번호 : </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br></br>
        <div className="form-row">
          <label htmlFor="passwordConfirmation">비밀번호 확인 : </label>
          <input
            type="password"
            id="passwordConfirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </div>
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default SignupPage;