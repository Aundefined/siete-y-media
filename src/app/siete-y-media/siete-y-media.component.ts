import { Component, OnInit } from '@angular/core';
import { MazoService } from '../_servicios/mazo.service';
import { Cartas } from '../_modelos/cartas';


@Component({
  selector: 'app-siete-y-media',
  templateUrl: './siete-y-media.component.html',
  styleUrls: ['./siete-y-media.component.css']
})
export class SieteYMediaComponent implements OnInit {

  // Array del mazo de cartas.
  mazo: Cartas[];
  // Arrays auxiliares para reseteo del mazo.
  mazoInit: Cartas[];
  mazoInit2: Cartas[];
  // Arrays para pintar las cartas en pantalla
  cartasTiradasJugador: Cartas[] = [];
  cartasTiradasBanca: Cartas[] = [];
  // Variable de la carta extraída del mazo.
  carta: Cartas;
  // Variables númericas para calcular los puntos en cada jugada, las apuestas y el dinero del jugador.
  puntosJugador: number = 0;
  puntosBanca: number = 0;
  fondos: number = 100;
  apuestaEnCurso: number = 0;
  dinero: number = 0;
  apuesta: number;
  // Variable en la que guardammos la función del setInterval.
  inter: any;
  // Booleanos para habilitar/deshabilitar botones y mostrar/ocultar divs con texto.
  plantarse: boolean = false;
  pedirCarta: boolean = false;
  boolApuesta: boolean = true;
  divganar: boolean = false;
  divperder: boolean = false;
  divperderFondos: boolean = false;

  // Realizamos una inyección de dependencia ya que necesitaremos las funciones del servicio MazoService.
  constructor(private mazoService: MazoService) { }

  ngOnInit() {
    // Al cargar la página, obtenemos el mazo y lo mezclamos.
    this.mazo = this.mazoService.getMazo();
    this.mazoService.shuffle(this.mazo);
    // Repartimos las cartas.
    this.inicio();
  }

  inicio() {
    //Extraemos una carta del array.
    this.carta = this.mazo.pop();
    // Con este bucle evitamos poder perder la mano con la primera carta.
    while (this.carta.valor > 7) {
      this.carta = this.mazo.pop();
    }
    // Incluimos la carta en el array que nos sirve para pintarlas en pantalla.
    this.cartasTiradasJugador.push(this.carta);
    // Sumamos el valor de la carta al total de puntos del jugador.
    this.puntosJugador += this.carta.valor;
  }

  // Función para efectuar las apuestas.
  apostar(value) {
    // Una vez pulsado el botón, lo deshabilitamos.
    this.boolApuesta = false;
    // Evaluamos el valor de la apuesto con un switch.
    switch (value) {
      case 10:
        // Comprobamos que los fondos son suficientes para realizar la apuesta.
        if (this.fondos >= 10) {
          // Hablilitamos el botón de plantarse.
          this.plantarse = true;
          // Habilitmaos el botón de pedir carta.
          this.pedirCarta = true;
          // Asignamos el valor de la apuesta.
          this.apuesta = 10;
          // Sumamos el valor de la apuesta al total apostado en la mano.
          this.apuestaEnCurso += this.apuesta;
          // Restamos el valor de la apuesta a los fondos del jugador.
          this.fondos -= this.apuesta;
          // Si los fondos no son suficientes,no se puede realizar la apuesta.
        } else {
          alert('Fondos insuficientes');
          this.boolApuesta = true;
        }

        break;

      case 20:
        if (this.fondos >= 20) {
          this.plantarse = true;
          this.pedirCarta = true;
          this.apuesta = 20;
          this.apuestaEnCurso += this.apuesta;
          this.fondos -= this.apuesta;
        } else {
          alert('Fondos insuficientes');
          this.boolApuesta = true;
        }
        break;

      case 30:
        if (this.fondos >= 30) {
          this.plantarse = true;
          this.pedirCarta = true;
          this.apuesta = 30;
          this.apuestaEnCurso += this.apuesta;
          this.fondos -= this.apuesta;
        } else {
          alert('Fondos insuficientes');
          this.boolApuesta = true;
        }
        break;

      case 40:
        if (this.fondos >= 40) {
          this.plantarse = true;
          this.pedirCarta = true;
          this.apuesta = 40;
          this.apuestaEnCurso += this.apuesta;
          this.fondos -= this.apuesta;
        } else {
          alert('fondos insuficientes');
          this.boolApuesta = true;
        }
        break;

      case 50:
        if (this.fondos >= 50) {
          this.plantarse = true;
          this.pedirCarta = true;
          this.apuesta = 50;
          this.apuestaEnCurso += this.apuesta;
          this.fondos -= this.apuesta;
        } else {
          alert('fondos insuficientes');
          this.boolApuesta = true;
        }
        break;
    }
  }

  // Función para pedir carta
  pedir() {
    // Extraemos una carta del mazo.
    this.carta = this.mazo.pop();
    // Incluimos esta carta en el array que nos sirve para pintarlas en pantalla.
    this.cartasTiradasJugador.push(this.carta);
    // Sumamos el valor de la carta al total de puntos del jugador.
    this.puntosJugador += this.carta.valor;
    // Si pasamos 7.5 puntos,perdemos.
    if (this.puntosJugador > 7.5) {
      this.perder();
    }
    // Si tenemos 7.5 puntos,juega la banca automáticamente.
    if (this.puntosJugador == 7.5) {
      this.juegaBanca();
    }
  }

  // Función que inicia el juego de la banca.
  juegaBanca() {
    // Deshabilitamos todos los botones.
    this.plantarse = false;
    this.pedirCarta = false;
    this.boolApuesta = false;
    // Repartimos una carta a la banca cada 1500ms.
    this.inter = setInterval(() => {
      this.start();
    }, 1500);
  }

  // Función que hace jugar a la banca.
  start() {
    // Extraemos una carta del mazo.
    this.carta = this.mazo.pop();
    // Incluimos esta carta en el array que nos sirve para pintarlas en pantalla.
    this.cartasTiradasBanca.push(this.carta);
    // Sumamos el valor de la carta al total de puntos de la banca.
    this.puntosBanca += this.carta.valor;
    // Evaluamos los puntos de la banca:
    // Si supera al jugador y tiene 7.5 puntos o menos,el jugador pierde.
    if (this.puntosBanca > this.puntosJugador && this.puntosBanca <= 7.5) {
      // Con la función stop() paramos el setInterval que hace jugar a la banca.
      this.stop();
      // LLamada a la función que termina la mano o la partida si el jugador pierde.
      this.perder();
    }
    // Si supera al jugador y tiene mas de 7.5 puntos,el jugador gana.
    else if (this.puntosBanca > this.puntosJugador && this.puntosBanca > 7.5) {
      this.stop();
      // Llamada a la función que termina la mano si el jugador la gana.
      this.ganar();
    }
    // Si tiene los mismos puntos que el jugador,el jugador pierde.
    else if (this.puntosBanca == this.puntosJugador) {
      this.stop();
      this.perder();
    }
  }

  // Función que determina el comportamiento del programa en caso de que pierda el jugador.
  perder() {
    // Deshabilitamos los botones.
    this.plantarse = false;
    this.pedirCarta = false;
    this.boolApuesta = false;
    // Uso del setTimeout para poder ver las cartas antes de que se active la función.
    setTimeout(() => {
      // Evaluamos si le quedan fondos al jugador.
      // Si no le quedan,se acaba la partida y se reinician los fondos.
      if (this.fondos == 0) {
        // Reseteo de los fondos.
        this.fondos = 100;
        // Reseteo de los puntos.
        this.puntosJugador = 0;
        this.puntosBanca = 0;
        // Reseteo del mazo : 
        // En un array auxiliar guardamos las cartas tiradas hasta el momento.
        this.mazoInit = this.cartasTiradasBanca.concat(this.cartasTiradasJugador);
        // En otro array auxiliar unimos el array anterior y el mazo de cartas.
        this.mazoInit2 = this.mazo.concat(this.mazoInit);
        // En el mazo hacemos una copia del array anterior que contiene todas las cartas.
        this.mazo = this.mazoInit2;
        // Volvemos a mezclar el mazo.
        this.mazoService.shuffle(this.mazo);
        // Vaciamos los arrays que contienen las cartas tiradas.
        this.cartasTiradasJugador = [];
        this.cartasTiradasBanca = [];
        // Reseteo de la apuesta en curso.
        this.apuestaEnCurso = 0;
        // Mostramos el div que contiene el texto que informa al jugador que no le quedan fondos.
        this.divperderFondos = true;
        // Si quedan fondos termina la mano y el jugador continua la partida con los fondos que le queden.
      } else {
        this.puntosJugador = 0;
        this.puntosBanca = 0;
        this.mazoInit = this.cartasTiradasBanca.concat(this.cartasTiradasJugador);
        this.mazoInit2 = this.mazo.concat(this.mazoInit);
        this.mazo = this.mazoInit2;
        this.mazoService.shuffle(this.mazo);
        this.cartasTiradasJugador = [];
        this.cartasTiradasBanca = [];
        // Asignamos a la variable dinero el valor de la apuesta en curso para pintarla
        // en pantalla e informar el jugador de la cantidad perdida.
        this.dinero = this.apuestaEnCurso;
        this.apuestaEnCurso = 0;
        // Mostramos el div que contiene el texto que informa al jugador que ha perdido la mano.
        this.divperder = true;
      }
    }, 1500);

  }

  // Función que determina el comportamiento del programa en caso de que gane el jugador.
  ganar() {
    this.plantarse = false;
    this.pedirCarta = false;
    this.boolApuesta = false;

    setTimeout(() => {

      this.puntosJugador = 0;
      this.puntosBanca = 0;
      this.mazoInit = this.cartasTiradasBanca.concat(this.cartasTiradasJugador);
      this.mazoInit2 = this.mazo.concat(this.mazoInit);
      this.mazo = this.mazoInit2;
      this.mazoService.shuffle(this.mazo);
      this.cartasTiradasJugador = [];
      this.cartasTiradasBanca = [];
      // Añadimos a los fondos el doble del valor de la cantidad apostada.
      this.fondos += (this.apuestaEnCurso * 2);
      this.dinero = this.apuestaEnCurso;
      this.apuestaEnCurso = 0;
      // Mostramos el div que contiene el texto que informa al jugador que ha ganado la mano.
      this.divganar = true;
    }, 1500);
  }

  // Funciónes para los botones 'continuar' que aparecen cuando termina una mano:
  // Ocultamos el texto que informa al jugador de que ha ganado, reseteamos los botones
  // de pedir,plantarse y apostar y repartimos una carta.
  chngDivGanar() {
    this.divganar = false;
    this.plantarse = false;
    this.pedirCarta = false;
    this.boolApuesta = true;
    this.inicio();
  }

  // Ocultamos el texto que informa al jugador de que ha perdido, reseteamos los botones
  // de pedir,plantarse y apostar y repartimos una carta.
  chngDivPerder() {
    this.divperder = false;
    this.plantarse = false;
    this.pedirCarta = false;
    this.boolApuesta = true;
    this.inicio();
  }

  // Ocultamos el texto que informa al jugador de que ha perdido sus fondos, reseteamos los botones
  // de pedir,plantarse y apostar y repartimos una carta.
  chngDivPerderFondos() {
    this.divperderFondos = false;
    this.plantarse = false;
    this.pedirCarta = false;
    this.boolApuesta = true;
    this.inicio();
  }

  // Función que para el juego de la máquina.
  stop() {
    clearInterval(this.inter);
  }
}

