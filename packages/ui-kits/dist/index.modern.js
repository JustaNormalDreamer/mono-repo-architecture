import React, { Fragment } from 'react';

const Container = ({
  className,
  children
}) => {
  return React.createElement("div", {
    className: `container ${className}`
  }, children);
};

const Button = ({
  label,
  onClick,
  shape: _shape = 'square'
}) => {
  const buttonShape = () => {
    switch (_shape) {
      case 'rounded':
        return 'rounded-md';

      case 'circle':
        return 'rounded-full';

      case 'square':
      default:
        return '';
    }
  };

  return React.createElement("button", {
    className: `px-4 py-2 text-background bg-primary hover-animate hover:bg-secondary ${buttonShape()}`,
    onClick: onClick
  }, label);
};

const Card = ({
  children,
  title,
  description,
  className,
  footer,
  extra
}) => {
  return React.createElement("div", {
    className: `card shadow-md hover:shadow-lg hover-animate rounded-md ${className}`
  }, React.createElement("div", {
    className: 'card-header border-b border-gray-300'
  }, React.createElement("div", {
    className: 'px-5 py-2 m-2'
  }, React.createElement("div", {
    className: 'flex justify-between'
  }, React.createElement("h3", {
    className: 'text-xl font-semibold'
  }, title), extra))), description || children && React.createElement("div", {
    className: 'card-content'
  }, React.createElement("div", {
    className: 'px-5 py-2 m-2'
  }, description ? description : children)), footer && React.createElement("div", {
    className: 'card-footer border-t border-gray-300'
  }, React.createElement("div", {
    className: 'px-5 py-2 m-2'
  }, footer)));
};

const Modal = ({
  visible,
  onClose,
  title,
  description,
  footer
}) => {
  return React.createElement(Fragment, null, visible && React.createElement("div", {
    className: `modal z-10 bg-gray-100 fixed top-0 w-full h-full`,
    onClick: () => onClose()
  }, React.createElement(Card, {
    className: 'bg-white',
    title: title,
    extra: React.createElement(Fragment, null, React.createElement(Button, {
      shape: 'circle',
      label: 'X',
      onClick: () => onClose()
    })),
    description: description,
    footer: footer
  })));
};

export { Button, Card, Container, Modal };
//# sourceMappingURL=index.modern.js.map
