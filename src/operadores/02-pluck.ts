import { fromEvent, pipe, range } from 'rxjs';
import { map, pluck } from 'rxjs/operators';


// range(1, 5).pipe(
//     map(x => x * 10)
// ).subscribe(console.log)


const keyup$= fromEvent<KeyboardEvent>(document,'keyup');

const keyupCode$= keyup$.pipe(
    map(event => event.code)
);

const keyupPluck$ = keyup$.pipe(
    // pluck('key')
    // pluck('keyCode')
    pluck('target','baseURI')
);


// keyup$.subscribe(code => console.log(code))
keyupCode$.subscribe(code => console.log('map',code))
keyupPluck$.subscribe(code => console.log('pluck',code))



