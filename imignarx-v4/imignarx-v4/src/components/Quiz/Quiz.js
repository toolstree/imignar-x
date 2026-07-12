import "./quiz.css";

export function Quiz(question,current,total){

return `

<section class="quiz fade">

<div class="quiz-shell">

<div class="progress">

<div
class="progress-fill"
style="width:${(current/total)*100}%">
</div>

</div>

<div class="chapter-pill">

${question.chapter}

</div>

<h1>

${question.title}

</h1>

<p class="story">

${question.text}

</p>

<div class="answers">

${question.answers.map((answer,index)=>`

<button
class="answer"
data-answer="${index}">

<span class="answer-text">

${answer}

</span>

<span class="arrow">

→

</span>

</button>

`).join("")}

</div>

<div class="progress-text">

Question ${current} of ${total}

</div>

</div>

</section>

`;

}
