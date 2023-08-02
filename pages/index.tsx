"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Header from "./header";
import styles from "./style/mainpage.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.maincontainer}>
        <div className={styles.container}>
          <div className={styles.item}>
            <Link href='/pages/blogcontent'>11111111</Link>
          </div>
          <div className={styles.item}>22222222</div>
          <div className={styles.item}>33333333</div>
          <div className={styles.item}>44444444</div>
          <div className={styles.item}>55555555</div>
          <div className={styles.item}>66666666</div>
          <div className={styles.item}>77777777</div>
          <div className={styles.item}>88888888</div>
        </div>
      </div>
    </>
  );
}
