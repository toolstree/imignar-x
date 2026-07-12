import "./email.css";

export function EmailCapture(result){

return `

<section class="email-capture fade">

<div class="email-card">

<div class="email-badge">

🔓 Unlock Your Complete Report

</div>

<h2>

${result.archetype.title}

</h2>

<p>

Your complete Nature Report is ready.

Unlock instantly:

• Full psychology profile

• Growth roadmap

• Garden permanently saved

• Weekly reflection emails

</p>

<form id="emailForm">

<input

type="email"

id="email"

placeholder="Enter your email"

required

/>

<button>

Unlock My Report →

</button>

</form>

<div id="emailMessage"></div>

</div>

</section>

`;

}
