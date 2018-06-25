import { Component, OnInit } from '@angular/core';

import { MazoService } from '../_servicios/mazo.service';

import { Cartas } from '../_modelos/cartas';


@Component({
  selector: 'app-siete-y-media',
  templateUrl: './siete-y-media.component.html',
  styleUrls: ['./siete-y-media.component.css']
})
export class SieteYMediaComponent implements OnInit {

  mazo: Cartas[];
  cartasTiradasJugador: Cartas[] = [];
  cartasTiradasBanca: Cartas[] = [];
  carta: Cartas;
  puntosJugador: number = 0;
  puntosBanca: number = 0;
  inter: any;


  constructor(private mazoService: MazoService) { }

  ngOnInit() {
    this.mazo = this.mazoService.getMazo();
    this.mazoService.shuffle(this.mazo);
  }

  pedir() {
    this.carta = this.mazo.pop();
    this.cartasTiradasJugador.push(this.carta);
    this.puntosJugador += this.carta.valor;
    // console.log(this.puntosJugador);
  }

  stop() {
    clearInterval(this.inter);
  }

  start() {
    this.carta = this.mazo.pop();
    this.cartasTiradasBanca.push(this.carta);
    this.puntosBanca += this.carta.valor;
    if(this.puntosBanca > this.puntosJugador){
      this.stop();
    }
  }

  juegaBanca() {
    this.inter = setInterval(() => {
      this.start();
    }, 2000);
    // if(this.puntosBanca > 7.5){
    //     this.stop();
    //  }

  }

  stopp() {
    this.stop();
  }

  






}

