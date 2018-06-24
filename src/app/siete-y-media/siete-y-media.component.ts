import { Component, OnInit } from '@angular/core';

import { MazoService } from '../_servicios/mazo.service';

import { Cartas } from '../_modelos/cartas';


@Component({
  selector: 'app-siete-y-media',
  templateUrl: './siete-y-media.component.html',
  styleUrls: ['./siete-y-media.component.css']
})
export class SieteYMediaComponent implements OnInit {

  mazo:Cartas[];
  cartasTiradas:Cartas[] = [];
  carta:Cartas;
  puntosJugador:number = 0;
  puntosMaquina:number = 0;


  constructor(private mazoService:MazoService) {}

  ngOnInit() {
    this.mazo = this.mazoService.getMazo();
    this.mazoService.shuffle(this.mazo);
  }

  pedir(){
    this.carta = this.mazo.pop();
    this.cartasTiradas.push(this.carta);
    this.puntosJugador += this.carta.valor;
    // console.log(this.puntosJugador);
  }



  



  

}
