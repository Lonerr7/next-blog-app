'use client';

import Link from 'next/link';
import s from './Header.module.scss';
import Container from '../common/Container/Container';
import Navigation from '../Navigation/Navigation';

const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <Container>
        <Navigation />
      </Container>
    </header>
  );
};

export default Header;
