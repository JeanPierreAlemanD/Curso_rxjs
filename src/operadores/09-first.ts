import { first, fromEvent, map, take, tap } from "rxjs";


const click$ = fromEvent<PointerEvent>(document, 'click')



click$.pipe(
    // pequeño tik
    tap<PointerEvent>(() => console.log('tap')),
    // map(event =>({
    //     clientY: event.clientY,
    //     clientX:event.clientX
    // })),
    map(({ clientX, clientY }) => ({clientY,clientX})),


    // tap( ()=>console.log('tap')),
    first(event => event.clientY >= 150)
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')

})