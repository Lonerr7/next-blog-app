import { PostInterface } from '@/types/appTypes';
import s from './Post.module.scss';
import Link from 'next/link';

interface Props {
  post: PostInterface;
}

const Post: React.FC<Props> = ({ post }) => {
  return (
    <li className={s.post}>
      <Link className={s.post__link} href={`blog/${post.id}`}>
        {`${post.title[0].toUpperCase()}${post.title.slice(1)}`}
      </Link>
    </li>
  );
};

export default Post;
