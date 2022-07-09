import { render } from '@testing-library/react';

import HomeUiLoginForm from './home-ui-login-form';

describe('HomeUiLoginForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomeUiLoginForm />);
    expect(baseElement).toBeTruthy();
  });
});
