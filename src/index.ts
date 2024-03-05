import { interval, range, reduce, take, tap } from "rxjs";


const numbers$ = [1, 2, 3, 4, 5];

const totalReducer = (acumulador: number, valorActual: number) => {
    return acumulador + valorActual;
}

const total = numbers$.reduce(totalReducer);
console.log('total arr', total);


interval(1000).pipe(
    take(3),
    tap(console.log ),
    reduce(totalReducer,4)
).subscribe({
    next: n => console.log('next: ', n),
    complete: () => console.log('Complete'),
})


// reduce : realiz la suma del valor acumulado más el valor actual.
// el conteo inica desde de el 0
