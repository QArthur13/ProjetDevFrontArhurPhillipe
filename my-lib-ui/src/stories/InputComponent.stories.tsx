import React from "react";
import InputComponent from "./InputComponent";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {

  title: "UI/Input",
  component: InputComponent

} as ComponentMeta<typeof InputComponent>;

export const Primary: ComponentStory<typeof InputComponent> = (args) => <InputComponent {...args}/>;
