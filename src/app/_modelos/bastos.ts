import { Cartas } from './cartas';
export class Bastos implements Cartas{
    palo:string;
    imagen:string;
    carta:string;
    valor:number;

    constructor(im:string, cart:string, val:number){
        this.palo = "bastos";
        this.imagen = im;
        this.carta = cart;
        this.valor = val;

    }

}