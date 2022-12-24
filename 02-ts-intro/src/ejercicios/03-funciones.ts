
/*
    ===== Código de TypeScript =====
*/

function sumar(a:number, b:number):number {
    return a+b;
}


const sumarFlecha = (a:number, b:number):number =>  a+b;


function multiplicar (numero:number, otroNumero?:number, base:number=2):number{
    return numero * base;
}


interface PersonajeLOR {
    name:string;
    pv:number;
    mostrarPv: () => void;
}

function curar (personaje:PersonajeLOR, curarX:number):void {
    personaje.pv += curarX;
    console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
    name:'Alex',
    pv:50,
    mostrarPv (){
        console.log('puntos de vida', this.pv)
    }
}

curar( nuevoPersonaje, 10 );