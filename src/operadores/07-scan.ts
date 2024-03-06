import { from, map, range, reduce, scan } from "rxjs";


const numeros = range(1, 5);


// const totalAcumulado = (acc, cur) => {
//     return acc + cur
// }


const totalAcumulado = (acc, cur) => acc + cur;

// Reduce
from(numeros).pipe(
    reduce(totalAcumulado, 0)
).subscribe(console.log)


// Scan
from(numeros).pipe(
    scan(totalAcumulado, 0)
).subscribe(console.log)


// Redux
interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

const user: Usuario[] = [
    { id: 'jota', autenticado: false, token: null },
    { id: 'jota', autenticado: true, token: 'abc' },
    { id: 'jota', autenticado: true, token: 'Abc123' },
];


const state$ = from(user).pipe(
    scan<Usuario>((acc, cur) => {
        return { ...acc, ...cur }
    } )
);


const id$ = state$.pipe(
    map(state => state)
);

id$.subscribe(console.log)
