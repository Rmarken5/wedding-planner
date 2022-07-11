import { render } from '@testing-library/react';

import { SignInFeatureSignIn } from './sign-in-feature-sign-in';

describe('SignInFeatureSignIn', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SignInFeatureSignIn />);
    expect(baseElement).toBeTruthy();
  });
});
