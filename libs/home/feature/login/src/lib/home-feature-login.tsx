import styles from './home-feature-login.module.scss';
import {HomeUiLoginForm} from "@marken-shop-react/home/ui/login-form";

/* eslint-disable-next-line */
export interface HomeFeatureLoginProps {}

export function HomeFeatureLogin(props: HomeFeatureLoginProps) {
  return (
    <div className={styles['container']}>
    <HomeUiLoginForm />
    </div>
  );
}

export default HomeFeatureLogin;
