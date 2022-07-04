import { render } from '@testing-library/react';

import ThemePageTheme from './theme-page-theme';

describe('ThemePageTheme', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ThemePageTheme />);
    expect(baseElement).toBeTruthy();
  });
});
