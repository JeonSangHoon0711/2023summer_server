"use client";
import Link from "next/link";
import React, { useState } from "react";
import "./style/mainpage.css";

export default function Home() {
  const [showCategory, setShowCategory] = useState(false);

  const toggleCategory = () => setShowCategory(!showCategory);

  return (
    <>
      <button className="login">
        <Link href="/pages/login">로그인</Link>
      </button>

      <div className="blogContainer">
        <a id="blog" href="/">블로그</a>
      </div>

      <hr />

      <div className="menubuttonContainer">
        <button className="categorybtn" onClick={toggleCategory}>≡</button>
        <button className="menubtn">
          <Link href="/">Home</Link>
        </button>
        <button className="menubtn">
          <Link href="/pages/blogcontent">About</Link>
        </button>
      </div>

      {showCategory && (
        <div className="categoryContainer">
          <ul>
            <li>카테고리1</li>
            <li>카테고리2</li>
            <li>카테고리3</li>
          </ul>
        </div>
      )}

      <hr />

      <div className="gridContainer">
        <div className="container">
          <div className="item">11111111</div>
          <div className="item">22222222</div>
          <div className="item">33333333</div>
          <div className="item">44444444</div>
          <div className="item">55555555</div>
          <div className="item">66666666</div>
          <div className="item">77777777</div>
          <div className="item">88888888</div>
        </div>
      </div>
    </>
  );
}
