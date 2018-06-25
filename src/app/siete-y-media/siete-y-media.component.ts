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
  mazoInit: Cartas[];
  mazoInit2: Cartas[];
  cartasTiradasJugador: Cartas[] = [];
  cartasTiradasBanca: Cartas[] = [];
  carta: Cartas;
  puntosJugador: number = 0;
  puntosBanca: number = 0;
  inter: any;
  plantarse: boolean = false;


  constructor(private mazoService: MazoService) { }

  ngOnInit() {
    this.mazo = this.mazoService.getMazo();
    this.mazoService.shuffle(this.mazo);
  }

  pedir() {
    this.plantarse = true;
    this.carta = this.mazo.pop();
    this.cartasTiradasJugador.push(this.carta);
    this.puntosJugador += this.carta.valor;

    if (this.puntosJugador > 7.5) {
      this.perder();
    }

    if (this.puntosJugador == 7.5) {
      this.juegaBanca();
    }
  }

  start() {
    this.carta = this.mazo.pop();
    this.cartasTiradasBanca.push(this.carta);
    this.puntosBanca += this.carta.valor;
    if (this.puntosBanca > this.puntosJugador && this.puntosBanca <= 7.5) {
      this.stop();
      this.perder();
    }
    if (this.puntosBanca > this.puntosJugador && this.puntosBanca > 7.5) {
      this.stop();
      this.ganar();
    }
  }

  juegaBanca() {
    this.inter = setInterval(() => {
      this.start();
    }, 1500);
  }

  perder() {
    setTimeout(() => {

      alert('has perdido');
      this.puntosJugador = 0;
      this.puntosBanca = 0;
      this.mazoInit = this.cartasTiradasBanca.concat(this.cartasTiradasJugador);
      this.mazoInit2 = this.mazo.concat(this.mazoInit);
      this.mazo = this.mazoInit2;
      this.mazoService.shuffle(this.mazo);
      this.cartasTiradasJugador = [];
      this.cartasTiradasBanca = [];
      this.plantarse = false;
    }, 500);

  }

  ganar() {
    setTimeout(() => {

      alert('has ganado');
      this.puntosJugador = 0;
      this.puntosBanca = 0;
      this.mazoInit = this.cartasTiradasBanca.concat(this.cartasTiradasJugador);
      this.mazoInit2 = this.mazo.concat(this.mazoInit);
      this.mazo = this.mazoInit2;
      this.mazoService.shuffle(this.mazo);
      this.cartasTiradasJugador = [];
      this.cartasTiradasBanca = [];
      this.plantarse = false;
    }, 500);
  }

  stop() {
    clearInterval(this.inter);
  }








}

