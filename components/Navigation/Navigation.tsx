'use client';

import { usePathname } from 'next/navigation';
import s from './Navigation.module.scss';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

const Navigation: React.FC = () => {
  const pathname = usePathname();
  const session = useSession();

  console.log(session);

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
        {session.data ? (
          <>
            <li className={s.list__item}>
              <Link
                className={
                  pathname === '/profile'
                    ? `${s.list__link} ${s.list__link_active}`
                    : `${s.list__link}`
                }
                href="/profile"
              >
                Profile
              </Link>
            </li>
            <li className={s.list__item}>
              <Link
                className={s.list__link}
                href="#"
                onClick={() => {
                  signOut({ callbackUrl: '/' });
                }}
              >
                Sign Out
              </Link>
            </li>
          </>
        ) : (
          <li className={s.list__item}>
            <Link
              className={
                pathname === '/api/auth/signin'
                  ? `${s.list__link} ${s.list__link_active}`
                  : `${s.list__link}`
              }
              href="/api/auth/signin"
            >
              Sign In
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
