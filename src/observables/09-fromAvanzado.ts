import { of, from } from 'rxjs';


// of = Toma los argumentos y genera una secuencia de observable
// from = array, promise, iterable, observable



const observer = {
    next: val => console.log('next:', val),
    completado: () => console.log('Completado')
}

const miGenerador = function*() {
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
}

const miIterado = miGenerador()


from(miIterado).subscribe(observer)


// const source$ = from([1,2,3,4,5,6,7]);
// const source$ = of(...[1,2,3,4,5,6,7]);


// const source$ = from('Pierre');

const source$ = from(fetch('https://api.github.com/users/klerith'))

// source$.subscribe(async (res) => {
//     console.log(res);
//     const dataResp = await res.json()
//     console.log(dataResp);

// })


// source$.subscribe(observer)
