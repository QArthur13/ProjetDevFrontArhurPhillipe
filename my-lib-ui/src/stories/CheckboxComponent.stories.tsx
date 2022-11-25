import React from "react";
import CheckboxComponent from "./CheckboxComponent";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {

  title: "UI/Checkbox",
  component: CheckboxComponent

} as ComponentMeta<typeof CheckboxComponent>;

export const myCheckbox: ComponentStory<typeof CheckboxComponent> = () => <CheckboxComponent></CheckboxComponent>
