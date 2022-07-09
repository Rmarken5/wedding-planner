import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignInPageSignIn } from '@marken-shop-react/sign-in/page/sign-in';
import { ThemePageTheme } from '@marken-shop-react/theme/page/theme';
import { NotFoundPageNotFound } from '@marken-shop-react/not-found/page/not-found';
import React from 'react';

interface AppState {
  isAuthenticated: boolean;
}

export class App extends React.Component<any, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isAuthenticated: false,
    };
  }

  private loginClick() {
    this.state = {
      ...this.state,
      isAuthenticated: true,
    };
    console.log(this.state);
  }

  override render() {
    return (
      <div className={'h-screen bg-cyan-100'}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ThemePageTheme />} />
            <Route
              path="/sign-in"
              element={
                <SignInPageSignIn loginClick={() => this.loginClick()} />
              }
            />
            <Route path="*" element={<NotFoundPageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
