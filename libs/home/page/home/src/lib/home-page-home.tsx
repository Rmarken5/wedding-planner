import {HomeFeatureHome} from '@marken-shop-react/home/feature/home';
import React from 'react';

/* eslint-disable-next-line */
export interface HomePageHomeProps {}

export class HomePageHome extends React.Component {
  constructor(props: HomePageHomeProps) {
    super(props);
  }

  override render() {
    return <HomeFeatureHome />;
  }
}

export default HomePageHome;
