#Estructura principal de la aplicación

En /src/app encontramos : 

 /_modelos :       Carpeta que contiene las clases e interfaces necesarias para crear las cartas.

 /_servicios :     Carpeta que contiene el servicio que usamos para crear las cartas y el mazo, asi cómo
                   el getter del array de cartas y la función para mezclar el mazo.

 /_siete-y-media : Componente principal de la aplicación.Contiene : 
                   -Un archivo html para crear la interfaz gráfica del juego.
                   -Un archivo css para los estilos.
                   -Un archivo ts en el que definimos la lógica de negocio de la aplicación.

-Los archivos app.component.ts, app.component.html y app.component.css son el componente por defecto de Angular.En este caso solo hemos modificado el archivo html para que nos redireccione a la ruta del componente principal del juego medianta la etiqueta 'router-outlet'

-app.module.ts es el archivo en el que realizamos las importaciones necesarias para el funcionamiento de la aplicación (componentes de Angular,servicios,componentes creados para el desarrollo,el archivo de rutas...)

-app.routing.ts es el archivo en el que definimos las rutas de la aplicación.

#Desarrollo del juego

*En el juego original la primera carta se reparte boca abajo.Al ser muy complicado reproducir este comportamiento, se ha optado por incluir un sistema que impide que la primera carta repartida sea un 8 o un 9,ya que haría perder al jugador nada mas empezar (siete-y-media.ts,línea 54).

Al inicar el juego se le reparte una carta al jugador.Posteriormente tendrá que realizar una apuesta.Una vez hecha
podrá pedir cuantas cartas como desee para intentar acercarse a 7.5 puntos, o plantarse para que juegue la banca.

Si el jugador sobrepasa los 7.5 puntos antes de plantarse,pierde la mano y la apuesta.

Si obtiene 7.5 puntos justos,pasa a jugar la banca automáticamente.

La banca gana si supera los puntos del jugador, siempre que no sobrepase los 7.5 puntos.Pierde si sobrepasa los 7.5 puntos.

Si la banca y el jugador empatan a puntos,gana la banca.

El jugador empieza con 100€ de fondo para apostar.
Cada vez que apueste se le descontará de sus fondos la cantidad apostada.
Si pierde la mano pierde el dinero apostado.
Si gana se añadirá a sus fondos el doble de la cantidad apostada.
Si se queda sin fondos pierde la partida y se reinica el juego.




<!-- # SieteYmedia

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


 -->
