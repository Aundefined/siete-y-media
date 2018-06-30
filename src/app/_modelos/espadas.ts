import { Cartas } from './cartas';

export class Espadas implements Cartas{
    palo:string;
    imagen:string;
    carta:string;
    valor:number;

    constructor(im:string, cart:string, val:number){
        this.palo = "espadas";
        this.imagen = im;
        this.carta = cart;
        this.valor = val;

    }

}