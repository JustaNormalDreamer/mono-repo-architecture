/*
 * Copyright (c) 2022 Dipesh Shrestha aka JustaDreamer
 * Github: https://github.com/JustaNormalDreamer
 *
 */

import React from 'react';

type ButtonShape = 'square' | 'rounded' | 'circle';

interface IButton {
  label: string;
  onClick: () => void;
  shape?: ButtonShape;
}

export const Button: React.FC<IButton> = ({
  label,
  onClick,
  shape = 'square'
}) => {
  const buttonShape = () => {
    switch (shape) {
      case 'rounded':
        return 'rounded-md';
      case 'circle':
        return 'rounded-full';
      case 'square':
      default:
        return '';
    }
  };

  return (
    <button
      className={`px-4 py-2 text-background bg-primary hover-animate hover:bg-secondary ${buttonShape()}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
