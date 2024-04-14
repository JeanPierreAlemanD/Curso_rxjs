import {concatMap, exhaustMap, fromEvent, interval, switchMap, take} from "rxjs";


const click$ = fromEvent(document, 'click');
const interval$ = interval(500).pipe(take(3));


click$.pipe(
    exhaustMap(() => interval$)
).subscribe(console.log)

