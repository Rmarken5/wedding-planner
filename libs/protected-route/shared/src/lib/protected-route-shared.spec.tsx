import { render } from '@testing-library/react';

import ProtectedRouteShared from './protected-route-shared';

describe('ProtectedRouteShared', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProtectedRouteShared />);
    expect(baseElement).toBeTruthy();
  });
});
