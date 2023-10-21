'use client';

import { FormEvent, useState } from 'react';
import s from './PostSearch.module.scss';
import { getPostsBySearch } from '@/services/getPosts';
import { PostInterface } from '@/types/appTypes';

interface Props {
  onSearch: (posts: Array<PostInterface>) => void;
}

const PostSearch: React.FC<Props> = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const selectHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const postsBySearch = await getPostsBySearch(search);
    onSearch(postsBySearch);
  };

  return (
    <form className={s.search} onSubmit={handleSubmit}>
      <input
        className={s.search__input}
        type="search"
        placeholder="Search for a post..."
        value={search}
        onChange={selectHandler}
      />
      <button className={s.search__submitBtn} type="submit">
        Search
      </button>
    </form>
  );
};

export default PostSearch;
