import styles from './pages-home.module.scss';

/* eslint-disable-next-line */
export interface PagesHomeProps {}

export function PagesHome(props: PagesHomeProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PagesHome!</h1>
    </div>
  );
}

export default PagesHome;
