import { FC } from 'react';
import { ICard } from '../Card/Card';
interface IModal extends ICard {
    visible: boolean;
    onClose: () => void;
}
export declare const Modal: FC<IModal>;
export {};
