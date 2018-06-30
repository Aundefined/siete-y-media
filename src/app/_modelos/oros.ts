import { Cartas } from './cartas';

export class Oros implements Cartas{
    palo:string;
    imagen:string;
    carta:string;
    valor:number;

    constructor(im:string, cart:string, val:number){
        this.palo = "oros";
        this.imagen = im;
        this.carta = cart;
        this.valor = val;

    }

}