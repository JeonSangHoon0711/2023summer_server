"use client"
import Link from "next/link";
import React, { useState } from "react";
import styles from "./style/header.module.css";

const header: React.FC = () => {
  const [showCategory, setShowCategory] = useState(false);

  const toggleCategory = () => setShowCategory(!showCategory);

  return (
    <>
      <button className={styles.writeBtn}>
        <Link href="/pages/writeblog">글쓰기</Link>
      </button>

      <button className={styles.login}>
        <Link href="./login">로그인</Link>
      </button>

      <div className={styles.blogContainer}>
        <a id="blog" href="/">
          블로그
        </a>
      </div>

      <hr />

      <div className={styles.menubuttonContainer}>
        <button className={styles.categorybtn} onClick={toggleCategory}>
          ≡
        </button>
        <button className={styles.menubtn}>
          <Link href="/">Home</Link>
        </button>
        <button className={styles.menubtn}>
          <Link href="/pages/list">List</Link>
        </button>
        <button className={styles.menubtn}>
          <Link href="./about">About</Link>
        </button>
      </div>

      {showCategory && (
        <div className={styles.categoryContainer}>
          <ul>
            <li>카테고리1</li>
            <li>카테고리2</li>
            <li>카테고리3</li>
          </ul>
        </div>
      )}

      <hr />
    </>
  );
};

export default header;
