import { map, pluck } from 'rxjs/operators';
import { filter, from, fromEvent, range } from "rxjs";


// range(1, 10).pipe(
//     tap(t => console.log('tap:', t)),
//     filter(x => x % 2 === 1)
// ).subscribe(console.log)


range(1, 10).pipe(
    filter(x => {
        return x % 2 === 1
    })
)//.subscribe(console.log)

interface Personajes {
    tipo: string;
    nombre: string
}


const personajes: Personajes[] = [
    { tipo: 'heroe', nombre: 'Batman' },
    { tipo: 'heroe', nombre: 'robin' },
    { tipo: 'villano', nombre: 'Joker' }
]


from(personajes).pipe(
    filter(f => f.tipo == 'heroe'),
    map(m => m.nombre)
).subscribe(console.log)


const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(m => m.code),
    filter(f => f === 'Enter')
)

keyup$.subscribe(console.log)



