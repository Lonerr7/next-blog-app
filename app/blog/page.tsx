import Post from '@/components/Post/Post';
import { PostInterface } from '@/types/appTypes';
import { Metadata } from 'next';

const getPostsData = async (): Promise<Array<PostInterface>> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60,
    },
  });

  return response.json();
};

export const metadata: Metadata = {
  title: 'Blog | Next App',
};

const Blog: React.FC = async () => {
  const posts = await getPostsData();

  const postElements = posts.map((post) => <Post key={post.id} post={post} />);

  return (
    <div>
      <h1>Blog</h1>
      <ul>{postElements}</ul>
    </div>
  );
};

export default Blog;
