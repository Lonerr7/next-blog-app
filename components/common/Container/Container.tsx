import s from './Container.module.scss';

interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default Container;
