import React from 'react';

/* eslint-disable-next-line */
export interface ProtectedRouteSharedProps {
  isAuthenticated: boolean;
  children?: any;
  redirectPath?: string;
}
