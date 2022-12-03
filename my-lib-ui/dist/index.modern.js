import React, { useState } from 'react';

var RadioComponent = function RadioComponent(props) {
  var _useState = useState(""),
    value = _useState[0],
    setValue = _useState[1];
  var id1 = props.id1,
    value1 = props.value1,
    id2 = props.id2,
    value2 = props.value2;
  return React.createElement("div", null, React.createElement("input", {
    type: "radio",
    id: id1,
    name: "choice",
    checked: value === value1,
    value: value1,
    onChange: function onChange(event) {
      console.log(event.target.value);
      setValue(event.target.value);
    }
  }), React.createElement("label", {
    htmlFor: value1
  }, "une ", value1), React.createElement("input", {
    type: "radio",
    id: id2,
    name: "choice",
    value: value2,
    checked: value === value2,
    onChange: function onChange(event) {
      console.log(event.target.value);
      setValue(event.target.value);
    }
  }), React.createElement("label", {
    htmlFor: value2
  }, "un ", value2));
};

var InputComponent = function InputComponent(props) {
  var label = props.label,
    htmlFor = props.htmlFor,
    type = props.type;
  var _useState = useState(""),
    value = _useState[0],
    setValue = _useState[1];
  var handleChange = function handleChange(e) {
    return setValue(e.target.value);
  };
  return React.createElement("div", {
    className: "test"
  }, React.createElement("label", {
    htmlFor: htmlFor
  }, label, ":"), React.createElement("input", {
    type: type,
    id: htmlFor,
    name: htmlFor,
    value: value,
    onChange: handleChange
  }));
};

var SelectComponent = function SelectComponent(props) {
  var htmlFor = props.htmlFor,
    options = props.options;
  var _useState = useState(""),
    value = _useState[0],
    setValue = _useState[1];
  return React.createElement("div", null, React.createElement("label", {
    htmlFor: htmlFor
  }, "Nationalit\xE9:"), React.createElement("select", {
    name: "country",
    id: htmlFor,
    value: value,
    onChange: function onChange(event) {
      setValue(event.target.value);
      console.log(event.target.value);
    }
  }, React.createElement("option", {
    value: ""
  }, "S\xE9lectionner une nationalit\xE9"), options.map(function (value, index) {
    return React.createElement("option", {
      key: index,
      value: value
    }, value);
  })));
};

var CheckboxComponent = function CheckboxComponent(props) {
  var htmlFor = props.htmlFor;
  var _useState = useState(false),
    value = _useState[0],
    setValue = _useState[1];
  return React.createElement("div", null, React.createElement("input", {
    type: "checkbox",
    id: htmlFor,
    name: htmlFor,
    checked: value,
    onChange: function onChange(event) {
      return setValue(event.target.checked);
    }
  }), React.createElement("label", {
    htmlFor: htmlFor
  }, "J\u2019atteste que je poss\xE8de un permis de conduire valide."));
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
  return React.createElement("button", {
    className: "my-button",
    type: type,
    onClick: handleTest
  }, label);
};

export { ButtonComponent, CheckboxComponent, InputComponent, RadioComponent, SelectComponent };
//# sourceMappingURL=index.modern.js.map
