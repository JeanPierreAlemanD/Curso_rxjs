import { fromEvent } from 'rxjs';

// Eventos del dom

const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');
const src3$ = fromEvent<DragEvent>(document, 'drag');



const observer = {
    next: val => console.log('next:', val)

}

// src1$.subscribe(console.log)
// src2$.subscribe(console.log)


// src1$.subscribe(observer)

// src3$.subscribe(d => {
//     console.log('drag', d)
// })

src1$.subscribe(({ x, y }) => {
    console.log(x, y);
})


src2$.subscribe(event => {
    console.log(event.key);

})
