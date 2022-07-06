/* eslint-disable-next-line */
import {HomeFeatureLogin} from '@marken-shop-react/home/feature/login';

export interface HomePageHomeProps {}

export function HomePageHome(props: HomePageHomeProps) {
  return (
    <div className={'container pt-28'}>
      <HomeFeatureLogin />
    </div>
  );
}

export default HomePageHome;
