const KEY="imignarx-v4";

class StorageService{

load(){

try{

return JSON.parse(

localStorage.getItem(KEY)

)||{

journeys:[]

};

}catch{

return{

journeys:[]

};

}

}

save(data){

localStorage.setItem(

KEY,

JSON.stringify(data)

);

}

addJourney(result){

const db=this.load();

db.journeys.unshift({

date:new Date().toLocaleString(),

archetype:result.archetype.title,

scores:result.scores

});

this.save(db);

}

history(){

return this.load().journeys;

}

clear(){

localStorage.removeItem(KEY);

}

}

export default new StorageService();
