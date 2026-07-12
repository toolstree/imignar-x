import QuizEngine from "../engines/QuizEngine.js";

export const Events={

bind(){

document.addEventListener("click",e=>{

if(e.target.id==="beginJourney"){

const hero=document.getElementById("screen-hero");
const quiz=document.getElementById("screen-quiz");

hero.classList.add("screen-exit");

setTimeout(()=>{

hero.classList.add("hidden");

quiz.classList.remove("hidden");

QuizEngine.start();

},500);

}

});

}

};
