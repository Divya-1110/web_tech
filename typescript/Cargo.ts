//first child class
import{IPayload} from './IPayload'
export class Cargo implements IPayload{
    massKg: number=0;
    material:string='';
    constructor(){
        this.massKg=15;
        this.material='mercury';
    }  
 }
