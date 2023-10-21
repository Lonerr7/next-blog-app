import { PostInterface } from '@/types/appTypes';

export const getAllPosts = async (): Promise<Array<PostInterface>> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!response.ok) {
    throw new Error('Unable to fetch posts. Try again later...');
  }

  return response.json();
};

export const getPostsBySearch = async (search: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?q=${search}`
  );

  if (!response.ok) throw new Error('Unable to fetch posts.');

  return response.json();
};
