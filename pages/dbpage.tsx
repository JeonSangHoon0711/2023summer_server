import { GetStaticProps } from 'next';
import React from 'react';

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://100.120.230.131:3000/api/users');
  const users = await res.json();

  return {
    props: { users },
    revalidate: 10, // 캐싱 시간(초)
  };
};

export default function Home({ users }) {
  return (
    <div>
      {users.map((user) => (
        <p key={user.cid}>
          {user.name} - {user.cid}
        </p>
      ))}
    </div>
  );
}
