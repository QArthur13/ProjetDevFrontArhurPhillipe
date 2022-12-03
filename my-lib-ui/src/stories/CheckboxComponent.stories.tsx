import React from "react";
import CheckboxComponent from "./CheckboxComponent";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {

  title: "UI/Checkbox",
  component: CheckboxComponent

} as ComponentMeta<typeof CheckboxComponent>;

const myCheckbox: ComponentStory<typeof CheckboxComponent> = (args) => <CheckboxComponent {...args}/>

export const Primary = myCheckbox.bind({});

Primary.args = {

  htmlFor: "accept"

}
