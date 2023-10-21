import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About | Next App'
}

interface Props {
  children: React.ReactNode;
}

const AboutLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <h1>About us</h1>
      <ul>
        <li>
          <Link href="/about/contacts">Contacts</Link>
        </li>
        <li>
          <Link href="/about/team">Team</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default AboutLayout;
