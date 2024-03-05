import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next:value => console.log('siguiente [next]: ', value),
    error: error => console.warn('error [obs]: ', error),
    complete: ()=>console.info('completado [obs]')
};


const obs$ = new Observable<string>(subs => {
    subs.next('hola')
    subs.next('dos')
    subs.next('tres')
    // forzar error
    // const a = undefined;
    // a.nombre = 'Pierre';

    subs.complete()
    subs.next('cuatro')

});


obs$.subscribe(observer)

// obs$.subscribe(
//     resp => console.log('next: ', resp),
//     error => console.warn('error:', error),
//     ()    => console.info('Completado: ')
// )