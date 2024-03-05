import { fromEvent, pipe, range } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators';


const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupCode$ = keyup$.pipe(
    map(event => event.code)
);

const keyupPluck$ = keyup$.pipe(
    pluck('target', 'baseURI')
);

const keyupMapTo$ = keyup$.pipe(
    mapTo('tecla precionada')
);


// keyup$.subscribe(code => console.log(code))
keyupCode$.subscribe(code => console.log('map', code))
keyupPluck$.subscribe(code => console.log('pluck', code));
keyupMapTo$.subscribe(code => console.log('MapTo', code));



