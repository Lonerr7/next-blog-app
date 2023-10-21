'use client';

import PostSearch from '@/components/PostSearch/PostSearch';
import Posts from '@/components/Posts/Posts';
import { getAllPosts } from '@/services/getPosts';
import { PostInterface } from '@/types/appTypes';
import { useEffect, useState } from 'react';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<Array<PostInterface>>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const posts = await getAllPosts();
      setLoading(false);
      setPosts(posts);
    })();
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      <PostSearch onSearch={setPosts} />
      {loading ? <h3>Loading...</h3> : <Posts posts={posts} />}
    </div>
  );
};

export default Blog;
