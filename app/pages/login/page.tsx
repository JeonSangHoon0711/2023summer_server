// LoginPage.tsx
"use client";
import React, { useState } from "react";
import "../../style/login.css";
import Link from "next/link";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 로그인 로직을 여기서 처리하면 됩니다.
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="login-page-container">
      <h1>로그인 페이지</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-row">
          <label htmlFor="email">이메일:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="password">비밀번호:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-row-login-reg">
          <button type="submit">로그인</button>
          <button type="button">
            <Link href="/pages/register">회원가입</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;