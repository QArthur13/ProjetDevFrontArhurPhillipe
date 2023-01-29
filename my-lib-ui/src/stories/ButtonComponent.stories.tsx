import React from "react";
import ButtonComponent from "./ButtonComponent";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import "../styles/button.css";

export default {

  title: 'UI/Bouton',
  component: ButtonComponent

} as ComponentMeta<typeof ButtonComponent>;

//export const myButton: ComponentStory<typeof ButtonComponent> = () => <ButtonComponent label={"Envoie"} type={"submit"} onClick={() => console.log("Test!")} />
//export const ButtonView: ComponentStory<typeof ButtonComponent> = (args) => <ButtonComponent {...args} />;
const ButtonTemplate: ComponentStory<typeof ButtonComponent> = (args) => <ButtonComponent {...args} />;

export const FirstButton = ButtonTemplate.bind({});
export const SecondButton = ButtonTemplate.bind({});
export const ThirdButton = ButtonTemplate.bind({});
export const FourthButton = ButtonTemplate.bind({});

const handleTest = () => console.log("test");
const handleTest2 = () => console.log("Coucou!");
const handleTest3 = () => console.log("Encore");
const handleTest4 = () => console.log("Oui!");

FirstButton.args = {

  label: 'Un test',
  type: 'button',
  classes: "test-button",
  onClick: handleTest2

};

SecondButton.args = {

  label: "Coucou",
  type: 'button',
  onClick: handleTest3

};

ThirdButton.args = {

  label: "Calcul",
  type: 'button',
  onClick: handleTest

};

FourthButton.args = {

  label: "Connexion Admin",
  type: 'button',
  onClick: handleTest4

};
