import { QUESTIONS } from "../data/questions.js";
import { Quiz } from "../components/Quiz/Quiz.js";

class QuizEngine{

constructor(){

this.index=0;
this.answers=[];

}

start(){

this.index=0;
this.answers=[];

this.render();

}

render(){

const root=document.getElementById("screen-quiz");

if(!root)return;

root.innerHTML=Quiz(
QUESTIONS[this.index],
this.index+1,
QUESTIONS.length
);

this.bind();

}

bind(){

document.querySelectorAll(".answer").forEach(btn=>{

btn.onclick=()=>{

this.answers.push(btn.dataset.answer);

this.next();

};

});

}

next(){

this.index++;

if(this.index>=QUESTIONS.length){

this.finish();

return;

}

this.render();

}

finish(){

const root=document.getElementById("screen-quiz");

root.innerHTML=`

<section class="quiz">

<div class="quiz-card fade">

<h2>

🌿 Journey Complete

</h2>

<p>

Preparing your personal reflection...

</p>

</div>

</section>

`;

console.log(this.answers);

}

}

export default new QuizEngine();
