import { fromEvent, pipe, range } from 'rxjs';
import { map } from 'rxjs/operators';


// range(1, 5).pipe(
//     map(x => x * 10)
// ).subscribe(console.log)


const keyup$= fromEvent<KeyboardEvent>(document,'keyup');
const keyupCode$= keyup$.pipe(
    map(event => event.code)
)


// keyup$.subscribe(code => console.log(code))
keyupCode$.subscribe(code => console.log(code))



