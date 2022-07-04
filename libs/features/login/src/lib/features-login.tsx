import styles from './features-login.module.scss';

/* eslint-disable-next-line */
export interface FeaturesLoginProps {}

export function FeaturesLogin(props: FeaturesLoginProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FeaturesLogin!</h1>
    </div>
  );
}

export default FeaturesLogin;
