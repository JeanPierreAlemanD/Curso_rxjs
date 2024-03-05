import { map, range, tap } from "rxjs";



const numb$ = range(1, 5);



numb$.pipe(
    tap(t => console.log('antes: ', t)),
    map(m => m * 10),
    tap(t => console.log('despues: ', t))
)
.subscribe(v => console.log('subs: ', v))