import Link from 'next/link';
import s from './Header.module.scss';
import Container from '../common/Container/Container';

const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <Container>
        <nav className={s.nav}>
          <ul className={`${s.nav__list} ${s.list}`}>
            <li className={s.list__item}>
              <Link className={s.list__link} href="/">
                Home
              </Link>
            </li>
            <li className={s.list__item}>
              <Link className={s.list__link} href="/blog">
                Blog
              </Link>
            </li>
            <li className={s.list__item}>
              <Link className={s.list__link} href="/about">
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
