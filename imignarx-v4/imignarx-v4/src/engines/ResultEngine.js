import { ARCHETYPES } from "../data/archetypes.js";

class ResultEngine{

calculate(answers){

const scores={
SAGE:0,
EXPLORER:0,
GUARDIAN:0,
CREATOR:0
};

answers.forEach(a=>{

switch(Number(a)){

case 0:
scores.GUARDIAN++;
break;

case 1:
scores.EXPLORER++;
break;

case 2:
scores.SAGE++;
break;

case 3:
scores.CREATOR++;
break;

}

});

const winner=Object.keys(scores).reduce((a,b)=>

scores[a]>scores[b]?a:b

);

return{

scores,

archetype:ARCHETYPES[winner]

};

}

}

export default new ResultEngine();
