import { interval, range, reduce, take, tap } from "rxjs";


const numbers$ = [1, 2, 3, 4, 5];

const totalReducer = (acumulador: number, valorActual: number) => {
    return acumulador + valorActual;
}


const total = numbers$.reduce(totalReducer, 0);
console.log('total arr', total);


interval(500).pipe(
    take(6),
    tap(console.log ),
    reduce(totalReducer)
).subscribe({
    next: n => console.log('next: ', n),
    complete: () => console.log('Complete'),
})


// reduce : realiz la suma del valor acumulado más el valor actual.
// el conteo inica desde de el 0
