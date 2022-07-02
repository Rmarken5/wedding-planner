import { render } from '@testing-library/react';

import PagesNotFound from './pages-not-found';

describe('PagesNotFound', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PagesNotFound />);
    expect(baseElement).toBeTruthy();
  });
});
