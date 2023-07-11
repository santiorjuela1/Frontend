import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Libro } from 'src/models/Libro';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {

  public formLibro = new FormGroup({
    idLibro : new FormControl(null),
    autor : new FormControl('', [Validators.required, Validators.minLength(5)]),
    titulo : new FormControl('', [Validators.required]),

  });

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

  enviarLibro(){
    let libro = {
      idLibro : this.formLibro.get('idLibro')?.value,
      autor : this.formLibro.get('autor')?.value,
      titulo : this.formLibro.get('titulo')?.value,
    }
    console.log(libro);
  }
}
