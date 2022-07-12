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

interface AppState {
  isAuthenticated: boolean;
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
    super(props);
    this.state = {
      isAuthenticated: false,
    };
  }

  private loginClick() {
    this.setState({
      ...this.state,
      isAuthenticated: true,
    });
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
                <ProtectedRouteShared
                  isAuthenticated={this.state.isAuthenticated}
                />
              }
            >
              <Route path="/theme" element={<ThemePageTheme />} />
            </Route>
            <Route
              path="/sign-in"
              element={
                <SignInPageSignIn
                  loginClick={() => this.loginClick()}
                  signInLink={'/theme'}
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
