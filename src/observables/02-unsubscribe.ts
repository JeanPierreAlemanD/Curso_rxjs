import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('[next]: ', value),
    error: error => console.warn('[obs]: ', error),
    complete: () => console.info('completado')
};


const intervalo$ = new Observable<number>(subs => {
    // Crear contador, 1,2,3,4,5,6. . . . 
    let count = 0

    const intervalo = setInterval(() => {
        // Cada segundo
        count++
        subs.next(count)
        console.log(count);
    }, 1000);


    setTimeout(() => {
        subs.complete()
    }, 2500)

    return () => {
        clearInterval(intervalo)
        console.log('Intervalo destruido');
    }
});


const subs1 = intervalo$.subscribe(observer)
const subs2 = intervalo$.subscribe(observer)
const subs3 = intervalo$.subscribe(observer)


subs1.add(subs2)
    // .add(subs3);

setTimeout(() => {
    subs1.unsubscribe()
    // unsubs2.unsubscribe()
    // unsubs3.unsubscribe()

    console.log('Completado timeout');
}, 3000)