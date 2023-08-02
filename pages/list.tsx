"use client"
import React, { useState, useEffect } from 'react';
import Header from "./header"
import "../../style/list.css"
// 글 목록을 표현하기 위한 타입 정의
type Post = {
  id: number;
  title: string;
  content: string;
};

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  // 서버에서 데이터를 가져와 상태를 업데이트하는 예제 함수
  const fetchData = async() => {

    // 예시 데이터. 실제로는 API 호출로 대체해야 합니다.
    const postData: Post[] = [
      { id: 1, title: '첫 번째 글', content: '첫 번째 글의 내용입니다.' },
      { id: 2, title: '두 번째 글', content: '두 번째 글의 내용입니다.' },
      { id: 3, title: '세 번째 글', content: '세 번째 글의 내용입니다.' },
    ];

    setPosts(postData);
  };

  // 데이터를 가져오는 함수를 실행하며 컴포넌트를 업데이트 합니다.
  useEffect(() => {
    fetchData();
  }, []);

  return <>
    <Header/>
    <div className="postListContainer">
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  </>
};

export default PostList;
