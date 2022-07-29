import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//RUTAS 
import { APP_ROUTING } from './app.routes';

//SERVICIOS
import { EquiposService } from './servicios/equipos.service'; 

//COMPONENTES
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { EquipoTarjetaComponent } from './components/equipo-tarjeta/equipo-tarjeta.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    EquiposComponent,
    EquipoComponent,
    EquipoTarjetaComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [EquiposService],
  bootstrap: [AppComponent]
})
export class AppModule { }
