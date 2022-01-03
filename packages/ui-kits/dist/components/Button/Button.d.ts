import React from 'react';
declare type ButtonShape = 'square' | 'rounded' | 'circle';
interface IButton {
    label: string;
    onClick: () => void;
    shape?: ButtonShape;
}
export declare const Button: React.FC<IButton>;
export {};
