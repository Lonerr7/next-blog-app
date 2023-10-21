import s from './Footer.module.scss';
import Container from '../common/Container/Container';

const Footer: React.FC = () => {
  return (
    <footer className={s.footer}>
      <Container>Created by &copy;nic3guy</Container>
    </footer>
  );
};

export default Footer;
