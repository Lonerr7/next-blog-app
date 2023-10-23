import PostSearch from '@/components/PostSearch/PostSearch';
import Posts from '@/components/Posts/Posts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Next App',
};

const Blog: React.FC = () => {
  return (
    <div>
      <h1>Blog</h1>
      <PostSearch />
      <Posts />
    </div>
  );
};

export default Blog;
