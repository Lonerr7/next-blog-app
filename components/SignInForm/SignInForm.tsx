'use client';

import { useRouter } from 'next/navigation';
import s from './SignInForm.module.scss';
import { FormEvent } from 'react';
import { signIn } from 'next-auth/react';

const SignInForm: React.FC = () => {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const response = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });

    if (response && !response.error) {
      router.push('/profile');
    } else {
      console.log(response);
    }
  };

  return (
    <form className={s.signIn} onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email
        <input type="email" name="email" id="email" required />
      </label>

      <label htmlFor="password">
        Password
        <input type="password" name="password" id="password" required />
      </label>

      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignInForm;
