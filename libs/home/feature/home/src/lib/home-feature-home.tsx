import styles from './home-feature-home.module.scss';
import React from 'react';

/* eslint-disable-next-line */
export interface HomeFeatureHomeProps {}

export class HomeFeatureHome extends React.Component {
  constructor(props: HomeFeatureHomeProps) {
    super(props);
  }

  override render() {
    return (
      <div className={styles['container']}>
        <h1>Welcome to HomeFeatureHome!</h1>
      </div>
    );
  }
}

export default HomeFeatureHome;
