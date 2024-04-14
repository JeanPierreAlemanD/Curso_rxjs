//crar formulario
import {exhaustMap, fromEvent, map, mergeMap, of, switchMap, tap} from "rxjs";
import {ajax} from "rxjs/ajax";
import {catchError, pluck} from "rxjs/operators";


// HELPER
const peticionHttpLogin = (userPass) => ajax.post('https://reqres.in/api/login?delay=1', userPass)
    .pipe(
        pluck('response', 'token'),
        catchError(err => of('Este es un error'))
    )


const form = document.createElement('form');

const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

// configuration
inputEmail.type = 'email';
inputEmail.placeholder = 'email';
inputEmail.value = 'eve.holt@reqres.in';
inputPass.value = 'cityslicka';


inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Ingresar';
form.append(inputEmail, inputPass, submitBtn);

document.querySelector('body').append(form);

// streams
const submitForm$ = fromEvent(form, 'submit')
    .pipe(
        tap(ev => ev.preventDefault()),
        map(m => ({
            email: m.target[0].value,
            password: m.target[1].value
        })),
        // mergeMap(peticionHttpLogin)
        // switchMap(peticionHttpLogin)
        exhaustMap(peticionHttpLogin)
    );


submitForm$.subscribe(token => {
    console.log(token)
})

