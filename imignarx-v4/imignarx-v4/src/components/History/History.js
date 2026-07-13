import "./history.css";

export function History(items){

if(!items?.length){

return `
<div class="history-empty">
No journeys yet.
</div>
`;

}

return `

<section class="history">

<h2>Journey History</h2>

<div class="history-grid">

${items.map(item=>`

<div class="history-card">

<h3>${item.archetype}</h3>

<p>${item.date}</p>

</div>

`).join("")}

</div>

</section>

`;

}
