import {concatMap, fromEvent, interval, mergeMap, switchMap, take} from "rxjs";


const click$ = fromEvent(document, 'click');
const interval$ = interval(500).pipe(take(3));


click$.pipe(
    // mergeMap(() => interval$)
    concatMap(() => interval$)
).subscribe(console.log)
