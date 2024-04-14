import {mergeAll, mergeMap, pluck, switchMap} from 'rxjs/operators';
import {Observable, debounceTime, fromEvent, map, of} from "rxjs";
import {ajax} from 'rxjs/ajax';
import {GithubUsersResp} from "../interfaces/github-user.models";

const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList)


// STREAMS
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    pluck('value'),
    mergeMap(e => ajax.getJSON(
        `https://api.github.com/search/users?q=${e}`)
    ),
    pluck('items')
)
// .subscribe( mostrarUsuarios)

const url = 'https://httpbin.org/delay/1?arg=';

input$.pipe(
    pluck('value'),
    switchMap(text => ajax.getJSON(url + text))
).subscribe(console.log)
