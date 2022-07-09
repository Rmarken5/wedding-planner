import styles from './not-found-page-not-found.module.scss';

/* eslint-disable-next-line */
export interface NotFoundPageNotFoundProps {}

export function NotFoundPageNotFound(props: NotFoundPageNotFoundProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to NotFoundPageNotFound!</h1>
    </div>
  );
}

export default NotFoundPageNotFound;
