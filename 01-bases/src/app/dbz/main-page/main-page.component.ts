import { Component } from '@angular/core';

interface Personaje {
  nombre: string,
  poder: number
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Trunks',
    poder: 14000,
  }

  // cambiarNombre( e:any ){
  //   console.log( e.target.value );
  // }

  agregar(){
    console.log(this.nuevo);
  }
}
