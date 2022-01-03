/*
 * Copyright (c) 2022 Dipesh Shrestha aka JustaDreamer
 * Github: https://github.com/JustaNormalDreamer
 *
 */

import React, { FC, Fragment } from 'react';
import { Card, ICard } from '../Card/Card';
import { Button } from '../Button/Button';

interface IModal extends ICard {
  visible: boolean;
  onClose: () => void;
}

export const Modal: FC<IModal> = ({
  visible,
  onClose,
  title,
  description,
  footer
}) => {
  return (
    <Fragment>
      {visible && (
        <div
          className={`modal z-10 bg-gray-100 fixed top-0 w-full h-full`}
          onClick={() => onClose()}
        >
          <Card
            className={'bg-white'}
            title={title}
            extra={
              <Fragment>
                <Button
                  shape={'circle'}
                  label={'X'}
                  onClick={() => onClose()}
                />
              </Fragment>
            }
            description={description}
            footer={footer}
          />
        </div>
      )}
    </Fragment>
  );
};
