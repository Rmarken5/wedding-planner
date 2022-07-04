import { render } from '@testing-library/react';

import HomeFeatureLogin from './home-feature-login';

describe('HomeFeatureLogin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomeFeatureLogin />);
    expect(baseElement).toBeTruthy();
  });
});
