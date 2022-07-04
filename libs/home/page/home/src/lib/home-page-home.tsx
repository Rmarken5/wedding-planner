import styles from './home-page-home.module.scss';
import {HomeFeatureLogin} from "@marken-shop-react/home/feature/login";

/* eslint-disable-next-line */
export interface HomePageHomeProps {}

export function HomePageHome(props: HomePageHomeProps) {
  return (
    <div className={"container"}>
      <HomeFeatureLogin />
    </div>
  );
}

export default HomePageHome;
