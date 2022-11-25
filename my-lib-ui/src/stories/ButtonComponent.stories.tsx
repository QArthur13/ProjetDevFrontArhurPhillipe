import React from "react";
import ButtonComponent from "./ButtonComponent";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {

  title: 'UI/Bouton',
  component: ButtonComponent

} as ComponentMeta<typeof ButtonComponent>;

//export const myButton: ComponentStory<typeof ButtonComponent> = () => <ButtonComponent label={"Coucou"} onClick={() => console.log("Test!")} />
const Template: ComponentStory<typeof ButtonComponent> = (args) => <ButtonComponent {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {

  label: 'Un test',
  onClick: () => alert("Test du click!")

};

Secondary.args = {

  label: "Coucou",
  onClick: () => console.log("Encore!")

};
