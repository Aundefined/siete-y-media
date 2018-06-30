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
  divganar:boolean = false;
  divperder:boolean = false;
  divperderFondos:boolean = false;





  constructor(private mazoService: MazoService) { }

  ngOnInit() {
    this.mazo = this.mazoService.getMazo();
    this.mazoService.shuffle(this.mazo);
  }

  apostar(value) {

    switch (value) {
      case 10:
        if (this.fondos >= 10) {
          this.pedirCarta = true;
          this.apuesta = 10;
          this.apuestaEnCurso += this.apuesta;
          this.fondos -= this.apuesta;
          if (this.fondos == 0) {
            this.boolApuesta = false;
          }
        } else {
          alert('fondos insuficientes');
        }

        break;

      case 20:
        if (this.fondos >= 20) {
          this.pedirCarta = true;
          this.apuesta = 20;
          this.apuestaEnCurso += this.apuesta;
          this.fondos -= this.apuesta;
          if (this.fondos == 0) {
            this.boolApuesta = false;
          }
        } else {
          alert('fondos insuficientes');
        }
        break;

      case 30:
        if (this.fondos >= 30) {
          this.pedirCarta = true;
          this.apuesta = 30;
          this.apuestaEnCurso += this.apuesta;
          this.fondos -= this.apuesta;
          if (this.fondos == 0) {
            this.boolApuesta = false;
          }
        } else {
          alert('fondos insuficientes');
        }
        break;

      case 50:
        if (this.fondos >= 50) {
          this.pedirCarta = true;
          this.apuesta = 50;
          this.apuestaEnCurso += this.apuesta;
          this.fondos -= this.apuesta;
          if (this.fondos == 0) {
            this.boolApuesta = false;
          }
        } else {
          alert('fondos insuficientes');
        }
        break;
    }

  }

  pedir() {
    // this.apuesta = "0";
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
    else if (this.puntosBanca > this.puntosJugador && this.puntosBanca > 7.5) {
      this.stop();
      this.ganar();
    }
    else if (this.puntosBanca == this.puntosJugador) {
      this.stop();
      this.perder();
    }
  }

  perder() {
    setTimeout(() => {

      if (this.fondos <= 0) {

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
        this.divperderFondos = true;
      } else {

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
        this.divperder = true;

      }
    }, 500);

  }

  ganar() {
    setTimeout(() => {

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
      this.divganar = true;

    }, 500);
  }

  chngDivGanar(){
    this.divganar = false;
  }

  chngDivPerder(){
    this.divperder = false;
  }

  chngDivPerderFondos(){
    this.divperderFondos = false;
  }

  stop() {
    clearInterval(this.inter);
  }
}

