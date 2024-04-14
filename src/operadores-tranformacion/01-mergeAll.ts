import { mergeAll, pluck } from 'rxjs/operators';
import { Observable, debounceTime, fromEvent, map, of } from "rxjs";
import { ajax } from 'rxjs/ajax';

const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList)


// STREAMS
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');


// input$.pipe(
//     debounceTime(500),
//     map(e => {
//         const texto = e.target['value'];
//         return ajax.getJSON(
//             `https://api.github.com/search/users?q=${texto}`
//         )
//     })
//     // pluck('target','value')
// ).subscribe(r => {
//     r.pipe(
//         // pluck('url')
//     ).subscribe(console.log)
// })

input$.pipe(
    debounceTime(500),
    pluck('value'),
    map(e => ajax.getJSON(
        `https://api.github.com/search/users?q=${e}`)
    ),
    mergeAll(),
    pluck('items')
).subscribe(r => {
    console.log(r[0].score);

})