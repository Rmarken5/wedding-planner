import {HomeUiLoginForm} from '@marken-shop-react/home/ui/login-form';

/* eslint-disable-next-line */
export interface HomeFeatureLoginProps {}

export function HomeFeatureLogin(props: HomeFeatureLoginProps) {
  return (
    <div className={'container'}>
      <h1 className="h1 text-center">Welcome to The Wedding Planner</h1>
      <HomeUiLoginForm />
    </div>
  );
}

export default HomeFeatureLogin;
