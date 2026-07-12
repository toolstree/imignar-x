import "./results.css";

export function Results(result){

return`

<section class="results fade">

<div class="results-card">

<div
class="result-icon">

🌿

</div>

<h1>

${result.archetype.title}

</h1>

<p>

${result.archetype.description}

</p>

<div class="score-grid">

${Object.entries(result.scores).map(([k,v])=>`

<div class="score-box">

<h3>${k}</h3>

<strong>${v}</strong>

</div>

`).join("")}

</div>

<button
id="restartJourney">

Begin Again →

</button>

</div>

</section>

`;

}
