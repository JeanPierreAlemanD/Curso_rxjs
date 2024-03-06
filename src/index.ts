import { catchError, pluck } from 'rxjs/operators';
import { map, of } from "rxjs";
import { ajax } from "rxjs/ajax";



const url = 'https://api.github.com/userXs?per_page=5';

const manejaError = (resp: Response) => {
    if (!resp.ok) {
        throw new Error(resp.statusText);
    }
    return resp
}

const fetchPromesa = fetch(url);

// fetchPromesa
// .then(resp => resp.json())
// .then(data => console.log('data: ', data))
// .catch(err => console.warn('error en usuario',err))



// fetchPromesa
//     .then(manejaError)
//     .then(resp => resp.json())
//     .then(data => console.log('data: ', data))
//     .catch(err => console.warn('error en usuario', err))

ajax(url).pipe(
    // map(m => m.response)
    pluck('response'),
    catchError(err =>{
        console.warn('Error en: ', err);
        return of([]);
    })
).subscribe(users => console.log('Usuarios:', users))