'use client';

import Link from 'next/link';
import s from './Header.module.scss';
import Container from '../common/Container/Container';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className={s.header}>
      <Container>
        <nav className={s.nav}>
          <ul className={`${s.nav__list} ${s.list}`}>
            <li className={s.list__item}>
              <Link
                className={
                  pathname === '/'
                    ? `${s.list__link} ${s.list__link_active}`
                    : `${s.list__link}`
                }
                href="/"
              >
                Home
              </Link>
            </li>
            <li className={s.list__item}>
              <Link
                className={
                  pathname === '/blog'
                    ? `${s.list__link} ${s.list__link_active}`
                    : `${s.list__link}`
                }
                href="/blog"
              >
                Blog
              </Link>
            </li>
            <li className={s.list__item}>
              <Link
                className={
                  pathname === '/about'
                    ? `${s.list__link} ${s.list__link_active}`
                    : `${s.list__link}`
                }
                href="/about"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
