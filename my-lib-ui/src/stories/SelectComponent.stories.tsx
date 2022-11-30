import React from "react";
import SelectComponent from "./SelectComponent";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {

  title: "UI/Select",
  component: SelectComponent

} as ComponentMeta<typeof SelectComponent>;

//export const mySelect: ComponentStory<typeof SelectComponent> = () => <SelectComponent></SelectComponent>;
const TemplateSelectComponent: ComponentStory<typeof SelectComponent> = (args) => <SelectComponent {...args}/>

export const Primary = TemplateSelectComponent.bind({});

Primary.args = {

  options: ["France", "Allemagne", "Italie", "Espagne", "Belgique", "Luxembourg", "Suisse", "Angleterre"]

};

/*export const mySelect: ComponentStory<typeof SelectComponent> = () => (

  <SelectComponent>
    <option value="france">France</option>
    <option value="alemange">Alemagne</option>
    <option value="espagne">Espagne</option>
    <option value="italie">Italie</option>
    <option value="belgique">Belgique</option>
  </SelectComponent>

)*/
