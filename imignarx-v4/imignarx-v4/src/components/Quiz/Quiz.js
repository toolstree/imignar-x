import "./quiz.css";

export function Quiz(question,current,total){

return `

<section class="quiz">

<div class="quiz-card fade">

<div class="progress">

<div
class="progress-fill"
style="width:${current/total*100}%">

</div>

</div>

<div class="quiz-chip">

Question ${current} of ${total}

</div>

<h2>

${question.title}

</h2>

<p>

${question.text}

</p>

<div class="answers">

${question.answers.map((answer,index)=>`

<button

class="answer"

data-answer="${index}">

${answer}

</button>

`).join("")}

</div>

</div>

</section>

`;

}
