import {endWith, range, startWith} from "rxjs";

const numeros$ = range(1,3)
    .pipe(
        startWith('a','b','c'),
        endWith('X','Y','Z')
    );

numeros$.subscribe(console.log)
