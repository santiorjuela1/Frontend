import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit{
  constructor(){

  }
  @Input()
   recibido! :  string;

   @Output()
   enviarPapa = new EventEmitter();


  ngOnInit(): void {
      console.log(this.recibido);
  }

  public enviar(){
    this.enviarPapa.emit('Hola desde el hijo!');
  }
}






