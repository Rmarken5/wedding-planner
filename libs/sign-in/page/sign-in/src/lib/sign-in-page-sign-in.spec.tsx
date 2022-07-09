import { render } from '@testing-library/react';

import HomePageHome from './sign-in-page-sign-in';

describe('HomePageHome', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomePageHome />);
    expect(baseElement).toBeTruthy();
  });
});
