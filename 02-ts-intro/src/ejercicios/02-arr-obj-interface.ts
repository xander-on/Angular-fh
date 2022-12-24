
/*
    ===== Código de TypeScript =====
*/
let c =0
let habilidades: ( boolean | string | number )[]= ["hola", "mundo"];

habilidades.push(1);

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: 'Alexander',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Pueblo Paleta';

console.table(personaje);