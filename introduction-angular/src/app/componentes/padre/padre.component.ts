import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  public mensajeParaEnviar : string = "Soy el mensaje para enviar";

  public mensajePadre! : string;

  public recibirMensage($event : string){
    this.mensajePadre = $event;
    console.log(this.mensajePadre);
  }
}
