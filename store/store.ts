import { getAllPosts, getPostsBySearch } from '@/services/getPosts';
import { PostInterface } from '@/types/appTypes';
import { createWithEqualityFn } from 'zustand/traditional';

interface UsePosts {
  posts: Array<PostInterface>;
  loading: boolean;
  getAllPosts: () => Promise<void>;
  getPostsBySearch: (value: string) => Promise<void>;
}

export const usePosts = createWithEqualityFn<UsePosts>()((set) => ({
  posts: [],
  loading: false,
  getAllPosts: async () => {
    set({ loading: true });
    const posts = await getAllPosts();
    set({ posts, loading: false });
  },
  getPostsBySearch: async (value) => {
    set({ loading: true });
    const postsBySearch = await getPostsBySearch(value);
    set({ posts: postsBySearch, loading: false });
  },
}));
