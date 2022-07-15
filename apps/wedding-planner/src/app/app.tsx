import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import { SignInPageSignIn } from '@marken-shop-react/sign-in/page/sign-in';
import { NotFoundPageNotFound } from '@marken-shop-react/not-found/page/not-found';
import React from 'react';
import { ThemePageTheme } from '@marken-shop-react/theme/page/theme';
import { ProtectedRouteSharedProps } from '@marken-shop-react/protected-route/shared';
import { initializeApp } from 'firebase/app';
import { environment } from '../environments/environment';
import { getAuth, signInWithEmailAndPassword, User } from 'firebase/auth';

interface AppState {
  user?: User;
  signInError?: string | null;
}

const ProtectedRouteShared = ({
  isAuthenticated,
  redirectPath = '/sign-in',
  children,
}: ProtectedRouteSharedProps) => {
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export class App extends React.Component<any, AppState> {
  constructor(props: any) {
    console.log(environment);
    super(props);
    this.state = {};
    const { firebaseConfig } = environment;

    const app = initializeApp(firebaseConfig);
  }

  private async loginClick(email: string, password: string) {
    const auth = getAuth();
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      response.user;
      this.setState({
        ...this.state,
        user: response.user,
        signInError: null,
      });
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

  override render() {
    console.log(this.state);
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
            <Route
              path="/sign-in"
              element={
                <SignInPageSignIn
                  loginClick={this.loginClick.bind(this)}
                  signInLink={'/theme'}
                  signInError={this.state.signInError}
                />
              }
            />
            <Route path="*" element={<NotFoundPageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
