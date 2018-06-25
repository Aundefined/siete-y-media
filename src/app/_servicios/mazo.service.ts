import { Injectable } from '@angular/core';
import { Cartas } from '../_modelos/cartas';
import { Bastos } from '../_modelos/bastos';

@Injectable()
export class MazoService {

  Mazo: Cartas[];
  
  reyBastos = new Bastos("../assets/bastos_12.jpg", "rey", 0.5);
  caballoBastos = new Bastos("../assets/bastos_11.jpg", "caballo", 0.5);
  sotaBastos = new Bastos("../assets/bastos_10.jpg", "sota", 0.5);
  unoBastos = new Bastos("../assets/bastos_1.jpg", "1", 1);
  dosBastos = new Bastos("../assets/bastos_2.jpg", "2", 2);
  tresBastos = new Bastos("../assets/bastos_3.jpg", "3", 3);
  cuatroBastos = new Bastos("../assets/bastos_4.jpg", "4", 4);
  cincoBastos = new Bastos("../assets/bastos_5.jpg", "5", 5);
  seisBastos = new Bastos("../assets/bastos_6.jpg", "6", 6);
  sieteBastos = new Bastos("../assets/bastos_7.jpg", "7", 7);
  ochoBastos = new Bastos("../assets/bastos_8.jpg", "8", 8);
  nueveBastos = new Bastos("../assets/bastos_9.jpg", "9", 9);

  constructor() {

    this.Mazo = [
      this.reyBastos,
      this.caballoBastos,
      this.sotaBastos,
      this.unoBastos,
      this.dosBastos,
      this.tresBastos,
      this.cuatroBastos,
      this.cincoBastos,
      this.seisBastos,
      this.sieteBastos,
      this.ochoBastos,
      this.nueveBastos
    ]
  }

  getMazo() {
    return this.Mazo;
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
}
