import { SignInFeatureSignIn } from '@marken-shop-react/sign-in/feature/sign-in';
import React from 'react';

export interface HomePageHomeProps {
  loginClick?: () => void;
  signInLink: string;
}

export class SignInPageSignIn extends React.Component<HomePageHomeProps> {
  constructor(props: HomePageHomeProps) {
    super(props);
  }

  override render() {
    return (
      <div className={'container pt-28'}>
        <SignInFeatureSignIn
          loginClick={this.props.loginClick}
          signInLink={this.props.signInLink}
        />
      </div>
    );
  }
}
