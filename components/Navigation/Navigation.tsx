'use client';

import { usePathname } from 'next/navigation';
import s from './Navigation.module.scss';
import Link from 'next/link';

const Navigation: React.FC = () => {
  const pathname = usePathname();

  return (
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
  );
};

export default Navigation;
