import React from 'react';
import { Link } from 'react-router-dom';

export interface SignInUiSignInFormProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  signInLink: string;
}

export function SignInUiSignInForm(props: SignInUiSignInFormProps) {
  return (
    <div className="flex flex-col items-center w-3/4 mx-auto">
      <section className="block mb-4">
        <label>
          <input
            placeholder={'Username'}
            type="text"
            name="username"
            className="w-60"
          />
        </label>
      </section>
      <section className="block mb-4 ">
        <label>
          <input
            placeholder={'Password'}
            type="password"
            name="password"
            className="w-60"
          />
        </label>
      </section>
      <section className="flex flex-row w-60 justify-around mt-8">
        <Link to={props.signInLink}>
          <button className="btn-primary" onClick={props.onClick}>
            Sign In
          </button>
        </Link>
        <button className="btn-accent">Register</button>
      </section>
    </div>
  );
}

export default SignInUiSignInFormProps;
