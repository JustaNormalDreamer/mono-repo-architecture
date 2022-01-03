/*
 * Copyright (c) 2022 Dipesh Shrestha aka JustaDreamer
 * Github: https://github.com/JustaNormalDreamer
 *
 */

import React from 'react';
import { IBase } from '../../IBase';

interface IContainer extends IBase {}

export const Container: React.FC<IContainer> = ({ className, children }) => {
  return <div className={`container ${className}`}>{children}</div>;
};
