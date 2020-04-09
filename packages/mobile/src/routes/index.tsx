import React from 'react';
import { NavigationContainerRef } from '@react-navigation/core';

export const navigationRef: React.RefObject<NavigationContainerRef> = React.createRef<NavigationContainerRef>();

export const navigate = (name: string, params?: object) => {
  navigationRef.current?.navigate(name, params);
};