import { FC, ReactNode } from 'react';
import { IBase } from '../../IBase';
export interface ICard extends IBase {
    title: string;
    description?: string;
    body?: ReactNode;
    footer?: ReactNode;
    extra?: ReactNode;
}
export declare const Card: FC<ICard>;
