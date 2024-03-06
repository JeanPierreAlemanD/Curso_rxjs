import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { debounceTime, fromEvent, map } from "rxjs";



const click$= fromEvent<PointerEvent>(document,'click');


click$.pipe(
    debounceTime(3000)
).subscribe(console.log)


const input = document.createElement('input');
document.querySelector('body').append(input)

const input$= fromEvent<KeyboardEvent>(input,'keyup');

input$.pipe(
    debounceTime(3000),
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe(console.log)