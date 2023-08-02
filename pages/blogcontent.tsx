"use client";
import Link from "next/link";
import React, { useState } from "react";
import "../../style/blogcontent.css";
import Header from "./header"

export default function Home() {
  const [showCategory, setShowCategory] = useState(false);

  const toggleCategory = () => setShowCategory(!showCategory);

  return (
    <>


      <Header/>
      <div className="outerContainer">
        <div>testtest</div>

        <div className="container1">
          <div className = "header">
            222
          </div>

          <div className="item1">
          11111111<br></br>11111111<br></br>11111111<br></br>11111111<br></br>11111111<br></br>11111111<br></br>11111111<br></br>11111111<br></br>11111111<br></br>11111111<br></br>
          11111111<br></br>11111111<br></br>11111111<br></br>11111111<br></br>11111111<br></br>11111111<br></br>11111111<br></br>11111111<br></br>

          </div>
          <div className = "ender">
            333
          </div>
        </div>
        
      </div>

    </>
  );
}
