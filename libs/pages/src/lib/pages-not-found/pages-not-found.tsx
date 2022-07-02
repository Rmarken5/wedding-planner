import styles from './pages-not-found.module.scss';

/* eslint-disable-next-line */
export interface PagesNotFoundProps {}

export function PagesNotFound(props: PagesNotFoundProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PagesNotFound!</h1>
    </div>
  );
}

export default PagesNotFound;
