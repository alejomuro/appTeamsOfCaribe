//se importa Equipo porque es una interface
import { Component, OnInit } from '@angular/core';
import { EquiposService, Equipo } from 'src/app/servicios/equipos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html'
})
export class EquiposComponent implements OnInit {

  equipos:Equipo[]=[];
  constructor(private _equiposService:EquiposService,
              private router:Router) { }

  ngOnInit() {
      this.equipos=this._equiposService.getEquipos();
     // console.log(this.equipos);

  }

  verEquipo(idx:number){
    this.router.navigate(['/equipo',idx]);
    
  }

}
