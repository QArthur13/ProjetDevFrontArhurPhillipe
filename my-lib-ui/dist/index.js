function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var RadioComponent = function RadioComponent(props) {
  var _useState = React.useState(""),
    value = _useState[0],
    setValue = _useState[1];
  var id1 = props.id1,
    value1 = props.value1,
    id2 = props.id2,
    value2 = props.value2;
  return React__default.createElement("div", null, React__default.createElement("input", {
    type: "radio",
    id: id1,
    name: "choice",
    checked: value === value1,
    value: value1,
    onChange: function onChange(event) {
      console.log(event.target.value);
      setValue(event.target.value);
    }
  }), React__default.createElement("label", {
    htmlFor: value1
  }, "Je suis une ", value1), React__default.createElement("input", {
    type: "radio",
    id: id2,
    name: "choice",
    value: value2,
    checked: value === value2,
    onChange: function onChange(event) {
      console.log(event.target.value);
      setValue(event.target.value);
    }
  }), React__default.createElement("label", {
    htmlFor: value2
  }, "Je suis un ", value2));
};

var InputComponent = function InputComponent(props) {
  var label = props.label,
    htmlFor = props.htmlFor,
    type = props.type;
  var _useState = React.useState(""),
    value = _useState[0],
    setValue = _useState[1];
  var handleChange = function handleChange(e) {
    return setValue(e.target.value);
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
  var options = props.options;
  var _useState = React.useState(""),
    value = _useState[0],
    setValue = _useState[1];
  return React__default.createElement("div", null, React__default.createElement("label", {
    htmlFor: "country"
  }, "Nationalit\xE9:"), React__default.createElement("select", {
    name: "country",
    id: "country",
    value: value,
    onChange: function onChange(event) {
      setValue(event.target.value);
      console.log(event.target.value);
    }
  }, React__default.createElement("option", {
    value: ""
  }, "S\xE9lectionner une nationalit\xE9"), options.map(function (value, index) {
    return React__default.createElement("option", {
      key: index,
      value: value
    }, value);
  })));
};

var CheckboxComponent = function CheckboxComponent() {
  var _useState = React.useState(false),
    value = _useState[0],
    setValue = _useState[1];
  return React__default.createElement("div", null, React__default.createElement("input", {
    type: "checkbox",
    id: "agree",
    name: "agree",
    checked: value,
    onChange: function onChange(event) {
      return setValue(event.target.checked);
    }
  }), React__default.createElement("label", {
    htmlFor: "agree"
  }, "Accepter les conditions: "));
};

var ButtonComponent = function ButtonComponent(props) {
  var label = props.label,
    type = props.type,
    onClick = props.onClick;
  var handleTest = function handleTest() {
    if (onClick) {
      onClick();
    }
  };
  return React__default.createElement("button", {
    className: "my-button",
    type: type,
    onClick: handleTest
  }, label ? label : "bouton");
};

exports.ButtonComponent = ButtonComponent;
exports.CheckboxComponent = CheckboxComponent;
exports.InputComponent = InputComponent;
exports.RadioComponent = RadioComponent;
exports.SelectComponent = SelectComponent;
//# sourceMappingURL=index.js.map
