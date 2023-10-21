import { PostInterface } from '@/types/appTypes';
import { Metadata } from 'next';
import s from './Post.module.scss';

interface Props {
  params: {
    postId: string;
  };
}

const getPostData = async (postId: string): Promise<PostInterface> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return response.json();
};

export const generateMetadata = async ({
  params: { postId },
}: Props): Promise<Metadata> => {
  const post = await getPostData(postId);

  return {
    title: `${post.title} | Next App`,
  };
};

const Post: React.FC<Props> = async ({ params: { postId } }) => {
  const post = await getPostData(postId);

  return (
    <div className={s.post}>
      <h2 className={s.post__title}>{post.title}</h2>
      <p className={s.post__body}>{post.body}</p>
    </div>
  );
};

export default Post;
