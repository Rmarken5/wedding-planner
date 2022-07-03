import { render } from '@testing-library/react';

import Theming from './theming';

describe('Theming', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Theming />);
    expect(baseElement).toBeTruthy();
  });
});
