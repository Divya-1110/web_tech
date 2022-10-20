import { IPayload } from "./IPayload";
import { Austronaut } from "./Austronaut.js";

//DI in function
function displayDetails(_panthera:IPayload){
    console.log('MassKg:'+_panthera.massKg);
}

//application
let austro=new Austronaut(12);
let austro1=new Austronaut(13);
let austro2=new Austronaut(14);
let austro3=new Austronaut(15);
let austro4=new Austronaut(16);

let austronauts=[austro,austro1,austro2,austro3,austro4]
for(let i=0;i<austronauts.length;i++){
    displayDetails(austronauts[i]);
};