import { PostInterface } from '@/types/appTypes';
import Post from '../Post/Post';

interface Props {
  posts: Array<PostInterface>;
}

const Posts: React.FC<Props> = ({ posts }) => {
  const postElements = posts.map((post) => <Post key={post.id} post={post} />);

  return <ul>{postElements}</ul>;
};

export default Posts;
