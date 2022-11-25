import React from "react";
import ButtonComponent from "./ButtonComponent";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {

  title: 'UI/Bouton',
  component: ButtonComponent

} as ComponentMeta<typeof ButtonComponent>;

//export const myButton: ComponentStory<typeof ButtonComponent> = () => <ButtonComponent label={"Envoie"} type={"submit"} onClick={() => console.log("Test!")} />
const ButtonTemplate: ComponentStory<typeof ButtonComponent> = (args) => <ButtonComponent {...args} />;

export const FirstButton = ButtonTemplate.bind({});
export const SecondButton = ButtonTemplate.bind({});
export const ThirdButton = ButtonTemplate.bind({});

const handleTest = () => console.log("test");

FirstButton.args = {

  label: 'Un test',
  onClick: () => console.log("Coucou!")

};

SecondButton.args = {

  label: "Coucou",
  onClick: () => console.log("Encore!")

};

ThirdButton.args = {

  label: "Calcul",
  onClick: handleTest

}
