
/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
	volume: number;
	time: number;
	song: string;
	details: Details;
}

interface Details{
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volume:90,
    time: 60,
    song: 'sesdf',
    details: {
        anio:2015,
        autor:'Ed sheran'
    }
}


const { volume, time, song, details:{ autor: aliasAutor} } = reproductor;
// const { autor } = details;

// console.log('El volumen actual es de: ', volume);
// console.log('El tiempo actual es de: ', time);
// console.log('La cancion actual es de: ', song);
// console.log('El autor es: ', aliasAutor);


//desestruccturacion arrays
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [, , p3] = dbz;

console.log('Personaje 3', p3)