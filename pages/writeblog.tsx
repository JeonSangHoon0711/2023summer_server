// pages/create-post.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import "../../style/createpost.css";
import Header from "./header";
import React from 'react';

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [customCategory, setCustomCategory] = useState("");
  const [showCustomCategoryInput, setShowCustomCategoryInput] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("글 제목:", title);
    console.log("글 내용:", content);
    console.log("카테고리:", category || customCategory);
    // 이벤트 핸들러를 사용하여 글 제목과 내용, 카테고리를 서버에 전송하거나 저장하도록 구현하세요.
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "add") {
      setShowCustomCategoryInput(true);
    } else {
      setCategory(e.target.value);
      setShowCustomCategoryInput(false);
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="inputWrapper">
            <label htmlFor="title">제목</label>
            <input
              type="text"
              id="title"
              className="input"
              placeholder="글 제목을 입력하세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="inputWrapper">
            <label htmlFor="category">카테고리</label>
            <select
              id="category"
              className="input"
              value={category}
              onChange={handleCategoryChange}
            >
              <option value="">카테고리를 선택하세요</option>
              <option value="technology">기술</option>
              <option value="lifestyle">라이프스타일</option>
              <option value="health">건강</option>
              <option value="travel">여행</option>
              <option value="sports">스포츠</option>
              <option value="add">카테고리 추가</option>
            </select>
          </div>

          {showCustomCategoryInput && (
            <div className="inputWrapper">
              <label htmlFor="customCategory">새 카테고리</label>
              <input
                type="text"
                id="customCategory"
                className="input"
                placeholder="새 카테고리를 입력하세요"
                value={customCategory}
                onChange={(e) => setCustomCategory(e.target.value)}
              />
            </div>
          )}

          <div className="inputWrapper">
            <label htmlFor="content">내용</label>
            <textarea
              id="content"
              className="textarea"
              placeholder="글 내용을 입력하세요"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          <button type="submit" className="submit">
            글 작성 완료
          </button>
        </form>
        <Link href="/">홈으로 돌아가기</Link>
      </div>
    </>
  );
};

export default CreatePost;
