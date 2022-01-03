function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var Container = function Container(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return React__default.createElement("div", {
    className: "container " + className
  }, children);
};

var Button = function Button(_ref) {
  var label = _ref.label,
      onClick = _ref.onClick,
      _ref$shape = _ref.shape,
      shape = _ref$shape === void 0 ? 'square' : _ref$shape;

  var buttonShape = function buttonShape() {
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

  return React__default.createElement("button", {
    className: "px-4 py-2 text-background bg-primary hover-animate hover:bg-secondary " + buttonShape(),
    onClick: onClick
  }, label);
};

var Card = function Card(_ref) {
  var children = _ref.children,
      title = _ref.title,
      description = _ref.description,
      className = _ref.className,
      footer = _ref.footer,
      extra = _ref.extra;
  return React__default.createElement("div", {
    className: "card shadow-md hover:shadow-lg hover-animate rounded-md " + className
  }, React__default.createElement("div", {
    className: 'card-header border-b border-gray-300'
  }, React__default.createElement("div", {
    className: 'px-5 py-2 m-2'
  }, React__default.createElement("div", {
    className: 'flex justify-between'
  }, React__default.createElement("h3", {
    className: 'text-xl font-semibold'
  }, title), extra))), description || children && React__default.createElement("div", {
    className: 'card-content'
  }, React__default.createElement("div", {
    className: 'px-5 py-2 m-2'
  }, description ? description : children)), footer && React__default.createElement("div", {
    className: 'card-footer border-t border-gray-300'
  }, React__default.createElement("div", {
    className: 'px-5 py-2 m-2'
  }, footer)));
};

var Modal = function Modal(_ref) {
  var visible = _ref.visible,
      onClose = _ref.onClose,
      title = _ref.title,
      description = _ref.description,
      footer = _ref.footer;
  return React__default.createElement(React.Fragment, null, visible && React__default.createElement("div", {
    className: "modal z-10 bg-gray-100 fixed top-0 w-full h-full",
    onClick: function onClick() {
      return onClose();
    }
  }, React__default.createElement(Card, {
    className: 'bg-white',
    title: title,
    extra: React__default.createElement(React.Fragment, null, React__default.createElement(Button, {
      shape: 'circle',
      label: 'X',
      onClick: function onClick() {
        return onClose();
      }
    })),
    description: description,
    footer: footer
  })));
};

exports.Button = Button;
exports.Card = Card;
exports.Container = Container;
exports.Modal = Modal;
//# sourceMappingURL=index.js.map
