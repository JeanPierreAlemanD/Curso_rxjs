import {delay, forkJoin, interval, of, range, take} from "rxjs";


const number$ = range(1, 4);
const interval$ = interval(1000).pipe(take(3));
const letras$ = of('a', 'b', 'c').pipe(delay(3500))


// forkJoin(
//     number$,
//     interval$,
//     letras$
// ).subscribe(console.log)

forkJoin({
    num: number$,
    int: interval$,
    let: letras$
}).subscribe(console.log)
