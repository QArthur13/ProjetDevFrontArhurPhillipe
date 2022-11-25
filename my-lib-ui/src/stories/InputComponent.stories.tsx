import React from "react";
import InputComponent from "./InputComponent";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {

  title: "UI/Input",
  component: InputComponent

} as ComponentMeta<typeof InputComponent>;

const TemplateInput: ComponentStory<typeof InputComponent> = (args) => <InputComponent {...args}/>;

export const FirstInput = TemplateInput.bind({});
export const SecondInput = TemplateInput.bind({});
export const ThirdInput = TemplateInput.bind({});
export const FourthInput = TemplateInput.bind({});

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
