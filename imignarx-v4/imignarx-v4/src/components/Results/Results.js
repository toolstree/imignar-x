import "./results.css";

export function Results(result){

return `

<section class="results fade">

<div class="results-shell">

<div class="result-badge">

🌿 YOUR NATURE

</div>

<h1>

${result.archetype.title}

</h1>

<p class="result-description">

${result.archetype.description}

</p>

<div class="insights">

<div class="insight">

<h3>Thinking Style</h3>

<p>

${
result.archetype.title.includes("Sage")
? "Thoughtful • Analytical • Patient"
: result.archetype.title.includes("Explorer")
? "Curious • Adventurous • Adaptive"
: result.archetype.title.includes("Guardian")
? "Reliable • Caring • Stable"
: "Creative • Expressive • Imaginative"
}

</p>

</div>

<div class="insight">

<h3>Growth Path</h3>

<p>

Continue choosing calm over noise.

Small intentional actions create
lasting personal growth.

</p>

</div>

<div class="insight">

<h3>Daily Reflection</h3>

<p>

Spend ten quiet minutes today
without distractions and simply
observe your thoughts.

</p>

</div>

<div class="insight">

<h3>Nature Reminder</h3>

<p>

Your strongest version appears
when your environment is calm,
beautiful and intentional.

</p>

</div>

</div>

<div class="score-title">

Personality Balance

</div>

<div class="bars">

${Object.entries(result.scores).map(([k,v])=>`

<div class="bar">

<div class="bar-label">

${k}

</div>

<div class="bar-track">

<div
class="bar-fill"
style="width:${v/15*100}%">

</div>

</div>

<div class="bar-value">

${v}

</div>

</div>

`).join("")}

</div>

<button
id="restartJourney">

Begin Another Journey →

</button>

</div>

</section>

`;

}
