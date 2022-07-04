import { render } from '@testing-library/react';

import FeaturesLogin from './features-login';

describe('FeaturesLogin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesLogin />);
    expect(baseElement).toBeTruthy();
  });
});
