import "./garden.css";

export function Garden(progress){

const trees=Math.max(1,Math.floor(progress/3));
const flowers=Math.max(6,progress*4);
const butterflies=Math.floor(progress/5);

return `

<section class="garden fade">

<div class="garden-sky"></div>

<div class="garden-card">

<div class="garden-header">

<h1>

🌿 Your Living Garden

</h1>

<p>

Every completed journey helps your inner
garden grow stronger.

</p>

</div>

<div class="garden-world">

<div class="sun"></div>

<div class="ground"></div>

<div class="trees">

${Array.from({length:trees}).map(()=>`

<div class="tree">

🌳

</div>

`).join("")}

</div>

<div class="flowers">

${Array.from({length:flowers}).map(()=>`

<span>

🌼

</span>

`).join("")}

</div>

<div class="butterflies">

${Array.from({length:butterflies}).map(()=>`

<span>

🦋

</span>

`).join("")}

</div>

</div>

</div>

</section>

`;

}
