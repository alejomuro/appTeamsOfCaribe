import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipo-tarjeta',
  templateUrl: './equipo-tarjeta.component.html',
  styleUrls: ['./equipo-tarjeta.component.css']
})
export class EquipoTarjetaComponent implements OnInit {
//el input es para recibir el equipo desde afuera
@Input() equipo:any={};
@Input() index:any;

@Output() equipoSeleccionado: EventEmitter<number>;

  constructor(private router:Router) {
    //inicializamos el evento aqui en el constructor
    this.equipoSeleccionado=new EventEmitter;
   }

  ngOnInit(){
  }
  verEquipo(){
  //  console.log( this.index );
  //  this.router.navigate(['/equipo',this.index]);

  //aqui emite el index que esta recibiendo
  this.equipoSeleccionado.emit(this.index);
  }
}
