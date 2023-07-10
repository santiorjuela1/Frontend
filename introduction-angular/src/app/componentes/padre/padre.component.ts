import { Component } from '@angular/core';
import { Libro } from 'src/models/Libro';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  public mensajeParaEnviar : string = "Soy el mensaje para enviar";

  public mensajePadre! : string;

  public libro : Libro = new Libro();

  value = '';

  public recibirMensage($event : string){
    this.mensajePadre = $event;
    console.log(this.mensajePadre);
  }

  public mostrarLibro(){
    console.log(this.libro);
  }
}
