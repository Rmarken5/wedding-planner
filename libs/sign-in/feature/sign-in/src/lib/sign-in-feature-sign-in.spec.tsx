import { render } from '@testing-library/react';

import HomeFeatureLogin from './sign-in-feature-sign-in';

describe('HomeFeatureLogin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomeFeatureLogin />);
    expect(baseElement).toBeTruthy();
  });
});
