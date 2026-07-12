import { Garden } from "../components/Garden/Garden.js";

class GardenEngine{

render(progress=15){

const root=document.getElementById("screen-results");

if(!root)return;

root.insertAdjacentHTML(

"beforeend",

Garden(progress)

);

}

}

export default new GardenEngine();
