// pages/create-post.tsx
"use client"
import { useState } from "react";
import Link from "next/link";
import "../../style/createpost.css";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("글 제목:", title);
    console.log("글 내용:", content);
    // 이벤트 핸들러를 사용하여 글 제목과 내용을 서버에 전송하거나 저장하도록 구현하세요.
  };

  return (
    <>
      <div className="container">
        <h1>블로그 글 작성</h1>
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
