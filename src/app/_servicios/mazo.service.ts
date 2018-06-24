import { Injectable } from '@angular/core';
import { Cartas } from '../_modelos/cartas';

@Injectable()
export class MazoService {

  Mazo: Cartas[];

  constructor() {

    this.Mazo = [
      {
        "palo": "bastos",
        "carta": "rey",
        "valor": 0.5,
        "imagen": "../assets/bastos_12.jpg"
      },
      {
        "palo": "bastos",
        "carta": "caballero",
        "valor": 0.5,
        "imagen": "../assets/bastos_11.jpg"
      },
      {
        "palo": "bastos",
        "carta": "sota",
        "valor": 0.5,
        "imagen": "../assets/bastos_10.jpg"
      },
      {
        "palo": "bastos",
        "carta": "1",
        "valor": 0.5,
        "imagen": "../assets/bastos_1.jpg"
      },
      {
        "palo": "bastos",
        "carta": "2",
        "valor": 0.5,
        "imagen": "../assets/bastos_2.jpg"
      },
      {
        "palo": "bastos",
        "carta": "3",
        "valor": 0.5,
        "imagen": "../assets/bastos_3.jpg"
      },
      {
        "palo": "bastos",
        "carta": "4",
        "valor": 0.5,
        "imagen": "../assets/bastos_4.jpg"
      },
      {
        "palo": "bastos",
        "carta": "5",
        "valor": 0.5,
        "imagen": "../assets/bastos_5.jpg"
      },
      {
        "palo": "bastos",
        "carta": "6",
        "valor": 0.5,
        "imagen": "../assets/bastos_6.jpg"
      },
      {
        "palo": "bastos",
        "carta": "7",
        "valor": 0.5,
        "imagen": "../assets/bastos_7.jpg"
      },
      {
        "palo": "bastos",
        "carta": "8",
        "valor": 0.5,
        "imagen": "../assets/bastos_8.jpg"
      },
      {
        "palo": "bastos",
        "carta": "9",
        "valor": 0.5,
        "imagen": "../assets/bastos_9.jpg"
      },

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
