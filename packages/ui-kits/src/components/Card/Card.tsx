/*
 * Copyright (c) 2022 Dipesh Shrestha aka JustaDreamer
 * Github: https://github.com/JustaNormalDreamer
 *
 */

import React, { FC, ReactNode } from 'react';
import { IBase } from '../../IBase';

export interface ICard extends IBase {
  title: string;
  description?: string;
  body?: ReactNode;
  footer?: ReactNode;
  extra?: ReactNode;
}

export const Card: FC<ICard> = ({
  children,
  title,
  description,
  className,
  footer,
  extra
}) => {
  return (
    <div
      className={`card shadow-md hover:shadow-lg hover-animate rounded-md ${className}`}
    >
      <div className='card-header border-b border-gray-300'>
        <div className='px-5 py-2 m-2'>
          <div className='flex justify-between'>
            <h3 className='text-xl font-semibold'>{title}</h3>
            {extra}
          </div>
        </div>
      </div>
      {description ||
        (children && (
          <div className='card-content'>
            <div className='px-5 py-2 m-2'>
              {description ? description : children}
            </div>
          </div>
        ))}

      {footer && (
        <div className='card-footer border-t border-gray-300'>
          <div className='px-5 py-2 m-2'>{footer}</div>
        </div>
      )}
    </div>
  );
};
