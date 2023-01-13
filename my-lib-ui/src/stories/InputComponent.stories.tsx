import React, {useState} from "react";
import InputComponent from "./InputComponent";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import "../styles/input.css";

export default {

  title: "UI/Input",
  component: InputComponent

} as ComponentMeta<typeof InputComponent>;

const InputTemplate: ComponentStory<typeof InputComponent> = (args) => <InputComponent {...args}/>;

export const FirstInput = InputTemplate.bind({});
export const SecondInput = InputTemplate.bind({});
export const ThirdInput = InputTemplate.bind({});
export const FourthInput = InputTemplate.bind({});
export const FifthInput = InputTemplate.bind({});
export const SixthInput = InputTemplate.bind({});

const [valueTest, setValueTest] = useState<string>("");
const handleChangeTest = (data: any) => {

  console.log("Test");
  setValueTest(data);
  console.log(valueTest);

}

FirstInput.args = {

  label: "Nom",
  htmlFor: "lastName",
  type: "text"

};

SecondInput.args = {

  label: "Prénom",
  htmlFor: "firstName",
  type: "text"

};

ThirdInput.args = {

  label: "Email",
  htmlFor: "email",
  type: 'email'

};

FourthInput.args = {

  label: "Téléphone",
  htmlFor: "phone",
  type: "tel"

};

FifthInput.args = {

  label: "Mot de passe",
  htmlFor: "password",
  type: "password"

}

SixthInput.args = {

  label: "Test",
  htmlFor: "test",
  type: "text",
  value: valueTest,
  onChange: handleChangeTest

}
