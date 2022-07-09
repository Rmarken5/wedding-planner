import { SignInUiSignInForm } from '@marken-shop-react/sign-in/ui/sign-in-form';
import React from 'react';

export interface HomeFeatureLoginProps {
  loginClick: () => void;
}

export class SignInFeatureSignIn extends React.Component<HomeFeatureLoginProps> {
  constructor(props: HomeFeatureLoginProps) {
    super(props);
  }

  override render() {
    return (
      <div className={'container'}>
        <h1 className="h1 text-center">Welcome to The Wedding Planner</h1>
        <SignInUiSignInForm onClick={this.props.loginClick} />
      </div>
    );
  }
}
