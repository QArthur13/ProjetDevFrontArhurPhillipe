import React from "react";
import RadioComponent from "./RadioComponent";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {

  title: "UI/Radio",
  component: RadioComponent

} as ComponentMeta<typeof RadioComponent>;

const RadioTemplate: ComponentStory<typeof RadioComponent> = (args) => <RadioComponent {...args} />;

export const myRadio = RadioTemplate.bind({});

myRadio.args = {

  id1: "entreprise",
  value1: "entreprise",
  id2: "particulier",
  value2: "particulier"

}
