import { Component } from '@angular/core';
import { Libro } from 'src/models/Libro';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    let libro: Libro = new Libro();

    libro.autor = 'Diego';
    libro.idLibro = 1;
    libro.titulo = 'El libro de diego';

    let libro2: Libro = new Libro();
    libro2.autor = 'Diego2';
    libro2.idLibro = 2;
    libro2.titulo = 'El libro de diego2';

    this.listaLibros.push(libro);
    this.listaLibros.push(libro2);
    console.log(this.listaLibros);

  }

  public listaLibros: Libro[] = [];

  public nombre : string = 'Santiago';

  public numero : number = 1;

  public bool : boolean = true;

  public nombres: string[] = ['pedro', 'juan', 'lucas'];

  public nombres2 : string[] = ['matias', 'felipe', 'santiago'];

  public imagenUrl = 'https://picsum.photos/200/300';

  public backgroundColor : string = 'red';

  public textColor : string = 'black';

  public isDisabled : boolean =  false;


  public activedButton: boolean = false;

  public desactivarBoton(bandera : boolean): void{
    this.activedButton = bandera;
  }

  public addFirstElementArray(name : string): void{
    this.nombres.unshift(name);
  }

  public addLastElementArray(name :  string): void{
    this.nombres.push(name);
  }

  public concat(list: string[]): string[]{
    return this.nombres.concat(list);
  }

  public mostrarEventos(event : any) : void{
    console.log(event);
  }


}
