import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import { NotFoundPageNotFound } from '@marken-shop-react/not-found/page/not-found';
import React from 'react';
import { ThemePageTheme } from '@marken-shop-react/theme/page/theme';
import { ProtectedRouteSharedProps } from '@marken-shop-react/protected-route/shared';
import { initializeApp } from 'firebase/app';
import { environment } from '../environments/environment';
import { getAuth, signInWithEmailAndPassword, User } from 'firebase/auth';
import { SignInPageSignIn } from '@marken-shop-react/sign-in/page/sign-in';

interface AppState {
  user?: User;
  signInError?: string | null;
}

const ProtectedRouteShared = ({
  isAuthenticated,
  redirectPath = '/',
  children,
}: ProtectedRouteSharedProps) => {
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
};

export class App extends React.Component<any, AppState> {
  constructor(props: any) {
    const { firebaseConfig } = environment;
    console.log(environment);
    super(props);
    this.state = {};
    const userString = localStorage.getItem('user');
    if (userString) {
      this.state = {
        ...this.state,
        user: JSON.parse(userString),
      };
    }

    const app = initializeApp(firebaseConfig);
  }

  private async loginClick(email: string, password: string): Promise<void> {
    const auth = getAuth();
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      this.setState({
        ...this.state,
        user: response.user,
        signInError: null,
      });
      localStorage.setItem('user', JSON.stringify(response.user));
    } catch (error: any) {
      console.log('error: ', error);
      this.setState({
        ...this.state,
        user: undefined,
        signInError: error.message as string,
      });
    }

    console.log(this.state);
  }

  private async logout(): Promise<void> {
    this.setState({
      ...this.state,
      user: undefined,
    });
    localStorage.removeItem('user');
  }

  override render() {
    console.log(this.state);
    let home;
    if (!this.state?.user) {
      home = (
        <Route
          path="/"
          element={
            <SignInPageSignIn
              loginClick={this.loginClick.bind(this)}
              signInLink={'/theme'}
              signInError={this.state.signInError}
            />
          }
        />
      );
    } else {
      home = (
        <Route
          element={
            <ProtectedRouteShared isAuthenticated={!!this.state?.user} />
          }
        >
          <Route path="/" element={<ThemePageTheme />} />
        </Route>
      );
    }
    return (
      <div className={'h-screen bg-cyan-100'}>
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRouteShared isAuthenticated={!!this.state?.user} />
              }
            >
              <Route path="/theme" element={<ThemePageTheme />} />
            </Route>
            {home}
            <Route path="*" element={<NotFoundPageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
