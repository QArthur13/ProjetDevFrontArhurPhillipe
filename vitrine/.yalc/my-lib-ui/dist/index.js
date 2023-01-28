function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var RadioComponent = function RadioComponent(props) {
  var id1 = props.id1,
    value1 = props.value1,
    id2 = props.id2,
    value2 = props.value2,
    onChange = props.onChange;
  var handleChange = function handleChange(event) {
    console.log("Test du radio!");
    if (onChange) {
      onChange(event.target.value);
    }
  };
  return React__default.createElement("div", null, React__default.createElement("input", {
    type: "radio",
    id: id1,
    name: "choice",
    value: value1,
    onChange: handleChange
  }), React__default.createElement("label", {
    htmlFor: value1
  }, "une ", value1), React__default.createElement("input", {
    type: "radio",
    id: id2,
    name: "choice",
    value: value2,
    onChange: handleChange
  }), React__default.createElement("label", {
    htmlFor: value2
  }, "un ", value2));
};

var InputComponent = function InputComponent(props) {
  var label = props.label,
    htmlFor = props.htmlFor,
    type = props.type,
    value = props.value,
    onChange = props.onChange;
  var handleChange = function handleChange(event) {
    console.log("Test du input!");
    if (onChange) {
      onChange(event.target.value);
    }
  };
  return React__default.createElement("div", null, React__default.createElement("label", {
    htmlFor: htmlFor
  }, label, ":"), React__default.createElement("input", {
    type: type,
    id: htmlFor,
    name: htmlFor,
    value: value,
    onChange: handleChange
  }));
};

var SelectComponent = function SelectComponent(props) {
  var label = props.label,
    htmlFor = props.htmlFor,
    value = props.value,
    options = props.options,
    onChange = props.onChange;
  var handleChange = function handleChange(event) {
    console.log("Test dans le composant select!");
    if (onChange) {
      onChange(event.target.value);
    }
  };
  return React__default.createElement("div", null, React__default.createElement("label", {
    htmlFor: htmlFor
  }, label, ":"), React__default.createElement("select", {
    name: htmlFor,
    id: htmlFor,
    value: value,
    onChange: handleChange
  }, React__default.createElement("option", {
    value: ""
  }, "Choisir une nationalit\xE9"), options.map(function (value, index) {
    return React__default.createElement("option", {
      key: index,
      value: value
    }, value);
  })));
};

var CheckboxComponent = function CheckboxComponent(props) {
  var htmlFor = props.htmlFor;
  var _useState = React.useState(false),
    value = _useState[0],
    setValue = _useState[1];
  var handleChange = function handleChange(event) {
    setValue(event.target.checked);
    console.log(value);
  };
  return React__default.createElement("div", null, React__default.createElement("input", {
    type: "checkbox",
    id: htmlFor,
    name: htmlFor,
    checked: value,
    onChange: handleChange
  }), React__default.createElement("label", {
    htmlFor: htmlFor
  }, "J\u2019atteste que je poss\xE8de un permis de conduire valide."));
};

var ButtonComponent = function ButtonComponent(props) {
  var label = props.label,
    type = props.type,
    classes = props.classes,
    styles = props.styles,
    onClick = props.onClick;
  var handleTest = function handleTest() {
    console.log("Le callback va bientôt arriver!");
    console.log({
      "label": label,
      "type": type,
      "onClick": onClick
    });
    if (onClick) {
      onClick();
    }
  };
  return React__default.createElement("button", {
    className: classes,
    style: styles,
    type: type,
    onClick: handleTest
  }, label);
};

exports.ButtonComponent = ButtonComponent;
exports.CheckboxComponent = CheckboxComponent;
exports.InputComponent = InputComponent;
exports.RadioComponent = RadioComponent;
exports.SelectComponent = SelectComponent;
//# sourceMappingURL=index.js.map
