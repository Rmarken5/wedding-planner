import { render } from '@testing-library/react';

import NotFoundPageNotFound from './not-found-page-not-found';

describe('NotFoundPageNotFound', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NotFoundPageNotFound />);
    expect(baseElement).toBeTruthy();
  });
});
