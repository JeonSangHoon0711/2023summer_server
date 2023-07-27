"use client";
import Link from "next/link";
import React, { useState } from "react";
import "../../style/blogcontent.css";

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
          <Link href="/pages/about">About</Link>
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


      <div className="outerContainer">
        <div>testtest</div>
        <div className="container">
        222222222222222233333333333<br></br>222222222222222233333333333<br></br>222222222222222233333333333<br></br>222222222222222233333333333<br></br>222222222222222233333333333<br></br>222222222222222233333333333<br></br>222222222222222233333333333<br></br>
          <div className="item">1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111<br></br>11111111<br></br>11111111<br></br>11111111<br></br>11111111<br></br>11111111<br></br>
          11111111<br></br>11111111<br></br>11111111<br></br>11111111<br></br>11111111<br></br>11111111<br></br>11111111<br></br>11111111<br></br>11111111<br></br>11111111<br></br>
          11111111<br></br>11111111<br></br>11111111<br></br>11111111<br></br>11111111<br></br>11111111<br></br>11111111<br></br>11111111<br></br>
          11111111<br></br>11111111<br></br>11111111<br></br>11111111<br></br>11111111<br></br>11111111<br></br>11111111<br></br>11111111<br></br>11111111<br></br>11111111<br></br>11111111<br></br>11111111<br></br>
          11111111<br></br>11111111<br></br>11111111<br></br>11111111<br></br>11111111<br></br>11111111<br></br>11111111<br></br>11111111<br></br>11111111<br></br>
          11111111<br></br>11111111<br></br>11111111<br></br>11111111<br></br>11111111<br></br>
          </div>
          33333333<br></br>33333333<br></br>33333333<br></br>33333333<br></br>33333333<br></br>33333333<br></br>
        </div>
        
      </div>

    </>
  );
}
