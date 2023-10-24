'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

interface Props {
  customClassName?: string;
}

const GoogleButton: React.FC<Props> = ({ customClassName }) => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/profile';

  return (
    <button
      onClick={() => {
        signIn('google', { callbackUrl });
      }}
      className={customClassName ? customClassName : ''}
    >
      Sign In with Google
    </button>
  );
};

export default GoogleButton;
