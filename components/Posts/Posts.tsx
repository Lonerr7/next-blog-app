'use client';

import Post from '../Post/Post';
import { usePosts } from '@/store/store';
import { useEffect } from 'react';
import { shallow } from 'zustand/shallow';

const Posts: React.FC = () => {
  const [posts, loading, getAllPosts] = usePosts(
    (state) => [state.posts, state.loading, state.getAllPosts],
    shallow
  );

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <ul>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Posts;
