import { Component } from '@angular/core';
import{  ActivatedRoute }from '@angular/router'
import { EquiposService } from 'src/app/servicios/equipos.service'; 

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html'
})
export class EquipoComponent {
    equipo:any={};
  
    constructor( private activatedRoute:ActivatedRoute,
                  private _equiposService:EquiposService) { 
    
      this.activatedRoute.params.subscribe(params=>{
      //para que solo se muestre el id el numero
     
      this.equipo=this._equiposService.getEquipo(params['id']);
      console.log(this.equipo );
    });

  }

 
}
