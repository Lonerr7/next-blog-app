'use client';

import { FormEvent, useState } from 'react';
import s from './PostSearch.module.scss';
import { usePosts } from '@/store/store';

const PostSearch: React.FC = () => {
  const [search, setSearch] = useState('');
  const getPostsBySearch = usePosts((state) => state.getPostsBySearch);

  const selectHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await getPostsBySearch(search);
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
