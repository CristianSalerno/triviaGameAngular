export class Pregunta {
    textoPregunta: string;
    respuestas: string[];
    respuestaCorrecta: number;

    constructor(pTextoPregunta: string = '', pRespuestas: string[], pRespuestaCorrecta: number) {
        this.textoPregunta = pTextoPregunta;
        this.respuestas = pRespuestas;
        this.respuestaCorrecta = pRespuestaCorrecta;
    }
}