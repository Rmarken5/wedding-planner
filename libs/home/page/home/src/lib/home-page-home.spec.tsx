import { render } from '@testing-library/react';

import HomePageHome from './home-page-home';

describe('HomePageHome', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomePageHome />);
    expect(baseElement).toBeTruthy();
  });
});
