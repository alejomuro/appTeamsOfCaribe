import { Injectable } from "@angular/core";


@Injectable()
export class EquiposService{

    
    //el arreglo equipos de de tipo equipo
   private equipos:Equipo[]=[
        {
          nombre: "Navegantes del Magallanes",
          bio: "son un equipo de béisbol profesional de la Liga Venezolana de Béisbol Profesional, con sede en Valencia, estado Carabobo, Venezuela.Participa en la Liga Venezolana de Béisbol Profesional desde su creación en 1945. Ejerce su localía en el Estadio José Bernardo Pérez, inaugurado en 1955, y cuenta con 14 638 asientos llegando a alcanzar una capacidad o aforo total de 16 000 espectadores",
          img: "assets/img/Navegantes.jpg",
          aparicion: "1917-10-26",
          estadio:"Jose Bernardo Perez",
          ciudad:"Valencia",
          titulos:"13",
          titulosSc:"2",
          liga:"LVBP"
        },
        {
          nombre: "Leones del Caracas",
          bio: "Es un equipo de béisbol profesional de la Liga Venezolana de Béisbol Profesional. En su creación tiene por sede el Estadio Universitario de Caracas en la Universidad Central de Venezuela. El dueño y accionista único del club deportivo es Ricardo Cisneros, presidente de Ateneas Sports Holding",
          img: "assets/img/leones.jpg",
          aparicion: "1942-05-07",
          estadio:"Universitario",
          ciudad:"Caracas",
          titulos:"20",
          titulosSc:"2",
          liga:"LVBP"
        },
        {
          nombre: "Tigres de Aragua",
          bio: " son un equipo de béisbol venezolano perteneciente a la Liga Venezolana de Béisbol Profesional.El equipo toma su nombre del significado del vocablo que da nombre a la ciudad de Maracay, que en la lengua de los indios caribes significa tigre",
          img: "assets/img/tigres.jpg",
          aparicion: "1960-10-15",
          estadio:"Jose Perez Colmenares",
          ciudad:"Maracay",
          titulos:"10",
          titulosSc:"1",
          liga: "LVBP"
        },
        {
          nombre: "Tigres del Licey",
          bio: "son un equipo profesional de béisbol de la República Dominicana este equipo fue fundado en 1907 con sede en Santo Domingo. Compiten en la Liga de Béisbol Profesional de la República Dominicana, juegan sus partidos como locales en el Estadio Quisqueya Juan Marichal",
          img: "assets/img/licey.jpg",
          aparicion: "1907-05-01",
          estadio:"Quisqueya Juan Marichal",
          ciudad:"Santo Domingo",
          titulos:"22",
          titulosSc:"10",
          liga:"LIDOM"
        },
        {
          nombre: "Aguilas Cibaeñas",
          bio: "son un equipo profesional de béisbol de la República Dominicana fundado en 1937 con sede en Santiago de los Caballeros. Compiten en la Liga de Béisbol Profesional de la República Dominicana, juegan sus partidos como locales en el Estadio Cibao.",
          img: "assets/img/cibao.jpg",
          aparicion: "1937-06-01",
          estadio:"Cibao",
          ciudad:"Santiago de los caballeros",
          titulos:"22",
          titulosSc:"6",
          liga: "LIDOM"
        },
        {
          nombre: "Leones del Escogido",
          bio: "son un equipo profesional de béisbol de la República Dominicana fundado en 1921 con sede en Santo Domingo. Compiten en la Liga de Béisbol Profesional de la República Dominicana, juegan sus partidos en el Estadio Quisqueya Juan Marichal",
          img: "assets/img/escogido.jpg",
          aparicion: "1921-08-01",
          estadio:"Quisqueya Juan Marichal",
          ciudad:"Santo Domingo",
          titulos:"16",
          titulosSc:"4",
          liga: "LIDOM"
        },
        {
          nombre: "Criollos de Caguas",
          bio: " son un equipo de béisbol participante en la Liga de Béisbol Profesional de Puerto Rico.A Caguas se le conoce como el Valle del Turabo, por el hermoso grupo de montañas que rodea a este municipio ubicado en la parte centro oriental de Puerto Rico. También se le identifica como la Ciudad Criolla, gentilicio utilizado por los deportistas al identificar a los conjuntos que representan los colores de la ciudad en los diferentes eventos y torneos que se desarrollan en la Isla",
          img: "assets/img/criollos.jpg",
          aparicion: "1938-11-01",
          estadio:"Parque Yldefonso Solá Morales",
          ciudad:"Caguas",
          titulos:"19",
          titulosSc:"5",
          liga: "LBPRC"
        },
        {
          nombre: "Indios de Mayaguez",
          bio: "es un equipo de béisbol participante en la Liga de Béisbol Profesional de Puerto Rico. Su nombre procede de la mayagüezana Cervecería India, que ha sido su auspiciador principal desde su fundación hasta nuestros días. Los colores del equipo son el granate y oro, que fueran los colores de la Cerveza India, el antiguo producto principal de la Cervecería",
          img: "assets/img/mayaguez.jpg",
          aparicion: "1938-08-01",
          estadio:"Isidoro Garcia",
          ciudad:"Mayaguez",
          titulos:"18",
          titulosSc:"2",
          liga: "LBPRC"
        },
        {
          nombre: "Cangrejeros de San Turce",
          bio: "son un equipo de béisbol profesional basado en Santurce, el barrio más importante de San Juan, Puerto Rico. Formaba parte de la Puerto Rico Baseball League (la liga de béisbol más importante de Puerto Rico) desde 1939 hasta la temporada 2003-2004 y desde la temporada de 2008-2009 que tuvieron marca de 19-22 en la cuarta posición clasificando a la postemporada donde fueron eliminados en la semi final 4-1 frete Lobos de Arecibo. Tiene como sede el Estadio Hiram Bithorn en San Juan",
          img: "assets/img/san turce.jpg",
          aparicion: "1939-08-01",
          estadio:"Hiram Bithorn",
          ciudad:"Santurce, San Juan e Puerto Rico",
          titulos:"16",
          titulosSc:"5",
          liga: "LBPRC"
        },
        {
          nombre: "Naranjeros de Hermosillo",
          bio: "son un equipo de béisbol profesional integrante de la Liga Mexicana del Pacífico (LMP),Los Naranjeros tienen su antecedente en los Queliteros de Hermosillo de la vieja Liga de la Costa del Pacífico, quienes consiguieron 3 campeonatos en 13 temporadas.La primera serie que se jugó en Hermosillo en la Liga de la Costa fue contra Venados de Mazatlán",
          img: "assets/img/hermosillo.jpg",
          aparicion: "1958-08-01",
          estadio:"Sonora",
          ciudad:"Hermosillo",
          titulos:"16",
          titulosSc:"4",
          liga: "LMB"
        },
        {
          nombre: "Tomateros de Culiacan",
          bio: "son un equipo de béisbol profesional integrante de la Liga Mexicana del Pacífico (LMP).Los Tomateros tienen su antecedente en los Tacuarineros de Culiacán de la vieja Liga de la Costa del Pacífico, quienes consiguieron 5 campeonatos en 13 temporadas.",
          img: "assets/img/tomateros.jpg",
          aparicion: "1965-08-01",
          estadio:"Tomateros",
          ciudad:"Culiacan Rosales",
          titulos:"13",
          titulosSc:"4",
          liga: "LMB"
        },
        {
          nombre: "Venados de Mazatlan",
          bio: " es un equipo de béisbol profesional integrante de la Liga Mexicana del Pacífico (LMP),Los Venados de Mazatlán participaron en la vieja Liga de la Costa del Pacífico, quienes consiguieron 5 campeonatos en 13 temporadas.",
          img: "assets/img/mazatlan.jpg",
          aparicion: "1945-08-01",
          estadio:"Teodoro Mariscal",
          ciudad:"Mazatlan, Sinaloa",
          titulos:"9",
          titulosSc:"4",
          liga: "LMB"
        }
      ];
    
    
      constructor(){
       console.log("servicio listo para usar");
       
    }
    getEquipos():Equipo[] {
        return this.equipos;
    }

    getEquipo(idx:any){
      return this.equipos[idx];
    }

    buscarEquipos(termino:string):Equipo[] {
     
      let equipoArr:Equipo[]=[];
      termino=termino.toLowerCase();

     for (let equipo of this.equipos) {//por cada iteracion va a extraer un equipo
      let nombre = equipo.nombre.toLowerCase();

      if(nombre.indexOf(termino)>=0 ){
        equipoArr.push(equipo)
      }

     }
     return equipoArr;
    }

}

//para que no se pueda inserta un objeto con otras caracateristicas
//export para que se pueda exportar el equipos
export interface Equipo{
    nombre:String,
    bio:String,
    img:String,
    aparicion:String,
    estadio:String,
    ciudad:String,
    titulos:String,
    titulosSc:string,
    liga:String
}