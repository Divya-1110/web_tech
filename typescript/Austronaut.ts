//first child class
import{IPayload} from './IPayload'
export class Austronaut implements IPayload{
    massKg: number=0;
    name: string='';
    constructor(massKg:number){
        this.massKg = massKg;
        this.name ='earth';
    }

 }
