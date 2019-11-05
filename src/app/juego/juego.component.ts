import { Component, OnInit, Input } from '@angular/core';
import { Pregunta } from '../models/pregunta.model';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  arrPreguntas: Pregunta[];
  preguntaActiva: number;
  preguntasCorrectas: number;
  preguntasRestantes: number;
  contador: number;
  mensaje: string;

  constructor() {
    this.arrPreguntas = [
      new Pregunta('Cuantas patas tiene un gato?', ['una', 'dos', 'tres', 'cuatro'], 3),
      new Pregunta('De que color era el caballo blanco de San martin?', ['blanco', 'rojo', 'negro', 'azul'], 0),
      new Pregunta('De que color era el caballo azul de San martin?', ['blanco', 'rojo', 'negro', 'azul'], 3),
      new Pregunta('Quien no es un  jugador de futbol?', ['Maradona', 'Pique', 'Roberto Carlos', 'Juanes'], 3),

    ]
    this.preguntaActiva = 0;
    this.preguntasCorrectas = 0;
    this.preguntasRestantes = this.arrPreguntas.length;
    this.contador = 10;
    this.mensaje = '';

  }

  ngOnInit() {
    /*  const tiempoRestante = setInterval(() => {
       this.contador--;
       if (this.contador === 0) {
         stopInterval();
         this.preguntaActiva++;
       }
     }, 1000)
 
 
     function stopInterval() {
       clearInterval(tiempoRestante);
     } */
  }

  manejarRespuestaSeleccionada($event) {
    if ($event === this.arrPreguntas[this.preguntaActiva].respuestaCorrecta) {
      this.mensaje = 'Has Acertado';
      this.preguntasCorrectas++;
    } else if (this.contador) {
      this.mensaje = 'PERDISTE, PERDISTE DAS LASTIMA MI AMOR !';
    }
    if (this.preguntaActiva === this.arrPreguntas.length - 1) {
      this.mensaje = 'TERMINO EL JUEGO!'
    } else {
      this.preguntaActiva++;
    }
  }

}
