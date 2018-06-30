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
  fondos: number = 100;
  apuestaEnCurso: number = 0;

  inter: any;
  apuesta: any;

  plantarse: boolean = false;
  pedirCarta: boolean = false;
  boolApuesta: boolean = true;





  constructor(private mazoService: MazoService) { }

  ngOnInit() {
    this.mazo = this.mazoService.getMazo();
    this.mazoService.shuffle(this.mazo);
  }

  apostar(value) {
    console.log(value);
    this.pedirCarta = true;
    this.apuesta = value;
    this.apuestaEnCurso += parseInt(this.apuesta);
    console.log(this.apuesta);
    this.fondos -= parseInt(this.apuesta);
  }

  pedir() {
    this.apuesta = "0";
    this.boolApuesta = true;
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

  juegaBanca() {
    this.plantarse = false;
    this.pedirCarta = false;
    this.boolApuesta = false;
    this.inter = setInterval(() => {
      this.start();
    }, 1500);
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

  perder() {
    setTimeout(() => {

      if (this.fondos <= 0) {
        alert('has perdido todos tus fondos');
        this.fondos = 100;
        this.puntosJugador = 0;
        this.puntosBanca = 0;
        this.mazoInit = this.cartasTiradasBanca.concat(this.cartasTiradasJugador);
        this.mazoInit2 = this.mazo.concat(this.mazoInit);
        this.mazo = this.mazoInit2;
        this.mazoService.shuffle(this.mazo);
        this.cartasTiradasJugador = [];
        this.cartasTiradasBanca = [];
        this.plantarse = false;
        this.pedirCarta = false;
        this.boolApuesta = true;
        this.apuestaEnCurso = 0;
      } else {
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
        this.pedirCarta = false;
        this.boolApuesta = true;
        this.apuestaEnCurso = 0;

      }
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
      this.pedirCarta = false;
      this.boolApuesta = true;
      this.fondos += (this.apuestaEnCurso * 2);
      this.apuestaEnCurso = 0;
    }, 500);
  }

  stop() {
    clearInterval(this.inter);
  }
}

