import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

interface WrappedSignInUiSignInFormProps extends SignInUiSignInFormProps {
  navigation: NavigateFunction;
}

interface SignInUiSignInFormProps {
  loginClick: (email: string, password: string) => Promise<void>;
  signInLink: string;
}

class WrappedSignInUiSignInForm extends React.Component<WrappedSignInUiSignInFormProps> {
  private email = '';
  private password = '';

  constructor(props: WrappedSignInUiSignInFormProps) {
    super(props);
  }

  private async handleLoginClick() {
    await this.props.loginClick(this.email, this.password);
    this.props.navigation(this.props.signInLink);
  }

  override render() {
    return (
      <div className="flex flex-col items-center w-3/4 mx-auto">
        <section className="block mb-4">
          <label>
            <input
              placeholder={'Username'}
              type="text"
              name="username"
              className="w-60"
              onChange={(event) => {
                this.email = event.target.value;
              }}
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
              onChange={(event) => {
                this.password = event.target.value;
              }}
            />
          </label>
        </section>
        <section className="flex flex-row w-60 justify-around mt-8">
          <button
            className="btn-primary"
            onClick={async () => await this.handleLoginClick()}
          >
            Sign In
          </button>
          <button className="btn-accent">Register</button>
        </section>
      </div>
    );
  }
}

export function SignInUiSignInForm(props: SignInUiSignInFormProps) {
  const navigation = useNavigate();

  return <WrappedSignInUiSignInForm {...props} navigation={navigation} />;
}
