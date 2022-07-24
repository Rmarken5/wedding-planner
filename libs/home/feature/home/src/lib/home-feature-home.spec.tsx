import { render } from '@testing-library/react';

import HomeFeatureHome from './home-feature-home';

describe('HomeFeatureHome', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomeFeatureHome />);
    expect(baseElement).toBeTruthy();
  });
});
