import { QUESTIONS } from "../data/questions.js";
import { Quiz } from "../components/Quiz/Quiz.js";
import { Results } from "../components/Results/Results.js";
import { EmailCapture } from "../components/Email/Email.js";
import { History } from "../components/History/History.js";

import ResultEngine from "./ResultEngine.js";
import GardenEngine from "./GardenEngine.js";

import StorageService from "../services/StorageService.js";

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

root.innerHTML=

Quiz(

QUESTIONS[this.index],

this.index+1,

QUESTIONS.length

);

this.bind();

}

bind(){

document.querySelectorAll(".answer").forEach(btn=>{

btn.onclick=()=>{

this.answers.push(

Number(btn.dataset.answer)

);

this.index++;

if(this.index>=QUESTIONS.length){

this.finish();

}else{

this.render();

}

};

});

}

finish(){

const quiz=document.getElementById("screen-quiz");

const results=document.getElementById("screen-results");

if(!quiz||!results)return;

quiz.classList.add("hidden");

results.classList.remove("hidden");

const result=

ResultEngine.calculate(this.answers);

StorageService.addJourney(result);

results.innerHTML=

Results(result);

results.insertAdjacentHTML(

"beforeend",

History(

StorageService.history()

)

);

results.insertAdjacentHTML(

"beforeend",

EmailCapture(result)

);

GardenEngine.render(

this.answers.length

);

const form=

document.getElementById("emailForm");

if(form){

form.addEventListener(

"submit",

e=>{

e.preventDefault();

const email=

document

.getElementById("email")

.value

.trim();

const ok=

/^[^\s@]+@[^\s@]+\.[^\s@]+$/

.test(email);

document

.getElementById("emailMessage")

.textContent=

ok

? "✅ Report unlocked!"

: "Please enter a valid email.";

}

);

}

const restart=

document.getElementById(

"restartJourney"

);

if(restart){

restart.onclick=()=>{

location.reload();

};

}

}

}

export default new QuizEngine();
