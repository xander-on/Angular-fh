import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})


export class EmpleadoComponent implements OnInit {

  nombre = "Juan";
  apellido = "Diaz";
  // private edad = 18;
  edad = 17;
  empresa = "ff";

  // getEdad(){
  //   return this.edad;
  // }

  registerText = 'No hay nadie registrado';

  disabledTextbox_Property = false;
  userRegister = true;


  // changeCompany(e:Event){
  //   this.empresa = (<HTMLInputElement>e.target).value;
  // }


  getUserRegister(){
    this.userRegister = false;
  }

  setUserRegister(e:Event){
    // this.registerText = 'El usuario se registro';
    // if((<HTMLInputElement>e.target).value == 'registrado'){
    //   this.registerText = "El usuario se registro";
    // }else{
    //   this.registerText = "El usuario no esta registrado";
    // }

    this.registerText = (<HTMLInputElement>e.target).value === 'registrado' 
    ? "El usuario se registro"
    : "El usuario no esta registrado";

  }





  constructor() { }

  ngOnInit(): void {
  }

}
