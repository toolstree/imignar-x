import { Hero } from "../components/Hero/Hero.js";
import "../components/Hero/hero.css";

export const Router={

mount(root){

root.innerHTML=`

<div id="screen-hero">

${Hero()}

</div>

<div
id="screen-quiz"
class="hidden">

</div>

<div
id="screen-results"
class="hidden">

</div>

`;

}

};
