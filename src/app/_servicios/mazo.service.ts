import { Injectable } from '@angular/core';
import { Cartas } from '../_modelos/cartas';
import { Bastos, Oros, Copas, Espadas } from '../_modelos/index';

@Injectable()
export class MazoService {

  Mazo: Cartas[];

  reyBastos = new Bastos("../../assets/bastos/bastos_12.jpg", "rey", 0.5);
  caballoBastos = new Bastos("../../assets/bastos/bastos_11.jpg", "caballo", 0.5);
  sotaBastos = new Bastos("../../assets/bastos/bastos_10.jpg", "sota", 0.5);
  unoBastos = new Bastos("../../assets/bastos/bastos_1.jpg", "1", 1);
  dosBastos = new Bastos("../../assets/bastos/bastos_2.jpg", "2", 2);
  tresBastos = new Bastos("../../assets/bastos/bastos_3.jpg", "3", 3);
  cuatroBastos = new Bastos("../../assets/bastos/bastos_4.jpg", "4", 4);
  cincoBastos = new Bastos("../../assets/bastos/bastos_5.jpg", "5", 5);
  seisBastos = new Bastos("../../assets/bastos/bastos_6.jpg", "6", 6);
  sieteBastos = new Bastos("../../assets/bastos/bastos_7.jpg", "7", 7);
  ochoBastos = new Bastos("../../assets/bastos/bastos_8.jpg", "8", 8);
  nueveBastos = new Bastos("../../assets/bastos/bastos_9.jpg", "9", 9);

  reyCopas = new Copas("../../assets/copas/copas_12.jpg", "rey", 0.5);
  caballoCopas = new Copas("../../assets/copas/copas_11.jpg", "caballo", 0.5);
  sotaCopas = new Copas("../../assets/copas/copas_10.jpg", "sota", 0.5);
  unoCopas = new Copas("../../assets/copas/copas_1.jpg", "1", 1);
  dosCopas = new Copas("../../assets/copas/copas_2.jpg", "2", 2);
  tresCopas = new Copas("../../assets/copas/copas_3.jpg", "3", 3);
  cuatroCopas = new Copas("../../assets/copas/copas_4.jpg", "4", 4);
  cincoCopas = new Copas("../../assets/copas/copas_5.jpg", "5", 5);
  seisCopas = new Copas("../../assets/copas/copas_6.jpg", "6", 6);
  sieteCopas = new Copas("../../assets/copas/copas_7.jpg", "7", 7);
  ochoCopas = new Copas("../../assets/copas/copas_8.jpg", "8", 8);
  nueveCopas = new Copas("../../assets/copas/copas_9.jpg", "9", 9);

  reyEspadas = new Espadas("../../assets/espadas/espadas_12.jpg", "rey", 0.5);
  caballoEspadas = new Espadas("../../assets/espadas/espadas_11.jpg", "caballo", 0.5);
  sotaEspadas = new Espadas("../../assets/espadas/espadas_10.jpg", "sota", 0.5);
  unoEspadas = new Espadas("../../assets/espadas/espadas_1.jpg", "1", 1);
  dosEspadas = new Espadas("../../assets/espadas/espadas_2.jpg", "2", 2);
  tresEspadas = new Espadas("../../assets/espadas/espadas_3.jpg", "3", 3);
  cuatroEspadas = new Espadas("../../assets/espadas/espadas_4.jpg", "4", 4);
  cincoEspadas = new Espadas("../../assets/espadas/espadas_5.jpg", "5", 5);
  seisEspadas = new Espadas("../../assets/espadas/espadas_6.jpg", "6", 6);
  sieteEspadas = new Espadas("../../assets/espadas/espadas_7.jpg", "7", 7);
  ochoEspadas = new Espadas("../../assets/espadas/espadas_8.jpg", "8", 8);
  nueveEspadas = new Espadas("../../assets/espadas/espadas_9.jpg", "9", 9);

  reyOros = new Oros("../../assets/oros/oros_12.jpg", "rey", 0.5);
  caballoOros = new Oros("../../assets/oros/oros_11.jpg", "caballo", 0.5);
  sotaOros = new Oros("../../assets/oros/oros_10.jpg", "sota", 0.5);
  unoOros = new Oros("../../assets/oros/oros_1.jpg", "1", 1);
  dosOros = new Oros("../../assets/oros/oros_2.jpg", "2", 2);
  tresOros = new Oros("../../assets/oros/oros_3.jpg", "3", 3);
  cuatroOros = new Oros("../../assets/oros/oros_4.jpg", "4", 4);
  cincoOros = new Oros("../../assets/oros/oros_5.jpg", "5", 5);
  seisOros = new Oros("../../assets/oros/oros_6.jpg", "6", 6);
  sieteOros = new Oros("../../assets/oros/oros_7.jpg", "7", 7);
  ochoOros = new Oros("../../assets/oros/oros_8.jpg", "8", 8);
  nueveOros = new Oros("../../assets/oros/oros_9.jpg", "9", 9);

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
      this.nueveBastos,

      this.reyCopas,
      this.caballoCopas,
      this.sotaCopas,
      this.unoCopas,
      this.dosCopas,
      this.tresCopas,
      this.cuatroCopas,
      this.cincoCopas,
      this.seisCopas,
      this.sieteCopas,
      this.ochoCopas,
      this.nueveCopas,

      this.reyEspadas,
      this.caballoEspadas,
      this.sotaEspadas,
      this.unoEspadas,
      this.dosEspadas,
      this.tresEspadas,
      this.cuatroEspadas,
      this.cincoEspadas,
      this.seisEspadas,
      this.sieteEspadas,
      this.ochoEspadas,
      this.nueveEspadas,

      this.reyOros,
      this.caballoOros,
      this.sotaOros,
      this.unoOros,
      this.dosOros,
      this.tresOros,
      this.cuatroOros,
      this.cincoOros,
      this.seisOros,
      this.sieteOros,
      this.ochoOros,
      this.nueveOros
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
