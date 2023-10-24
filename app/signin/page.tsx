import GoogleButton from '@/components/GoogleButton/GoogleButton';
import s from './signin.module.scss';
import SignInForm from '@/components/SignInForm/SignInForm';

const SignIn: React.FC = async () => {
  return (
    <div className={s.signin}>
      <h1>Sign In</h1>
      <GoogleButton customClassName={s.signin__googleBtn} />
      <p>or</p>
      <SignInForm />
    </div>
  );
};

export default SignIn;
