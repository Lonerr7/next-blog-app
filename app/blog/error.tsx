'use client';

interface Props {
  error: Error;
}

const BlogError: React.FC<Props> = ({ error }) => {
  return <h1>Ooops! {error.message}</h1>;
};

export default BlogError;
