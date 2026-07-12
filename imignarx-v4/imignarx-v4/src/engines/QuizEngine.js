import { QUESTIONS } from "../data/questions.js";
import { Quiz } from "../components/Quiz/Quiz.js";
import { Results } from "../components/Results/Results.js";
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

root.innerHTML=Quiz(
QUESTIONS[this.index],
this.index+1,
QUESTIONS.length
);

document.querySelectorAll(".answer").forEach(btn=>{

btn.onclick=()=>{

this.answers.push(btn.dataset.answer);

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

quiz.classList.add("hidden");

results.classList.remove("hidden");

const result=

ResultEngine.calculate(this.answers);

StorageService.addJourney(result);

results.innerHTML=

Results(result);

GardenEngine.render(this.answers.length);

results.insertAdjacentHTML(

"beforeend",

History(

StorageService.history()

)

);

document
.getElementById("restartJourney")
.onclick=()=>location.reload();

}

}

export default new QuizEngine();
