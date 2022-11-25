import React from "react";
import RadioComponent from "./RadioComponent";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {

  title: "UI/Radio",
  component: RadioComponent

} as ComponentMeta<typeof RadioComponent>;

export const myRadio: ComponentStory<typeof RadioComponent> = () => <RadioComponent />;
