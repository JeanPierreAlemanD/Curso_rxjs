import { fromEvent, map, tap } from "rxjs";

const texto = document.createElement('div');
texto.innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed posuere erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris facilisis felis libero, eu ultricies ante bibendum sed. Sed condimentum erat ut mi iaculis tempor. Morbi iaculis, sem non porta vulputate, erat turpis placerat nibh, sed finibus nisl sem cursus justo. Suspendisse mattis commodo orci. Mauris ut malesuada leo.
'<br/>'
Sed aliquet pulvinar elit et auctor. Phasellus scelerisque viverra vestibulum. Maecenas fermentum elit quis iaculis elementum. Maecenas ut sem nec eros elementum porta. Nullam mattis leo vitae lectus efficitur, sed elementum arcu semper. Etiam et metus et nunc suscipit pretium. Curabitur eu nibh eros. Sed condimentum nibh vel diam rhoncus, eget facilisis eros tincidunt. Praesent congue tortor vel lacus tempus, eu laoreet augue hendrerit. Phasellus tristique scelerisque lacus. Vestibulum quis justo at ipsum efficitur iaculis ac vel diam.
<br/><br/><br/><br/>
Donec consectetur turpis augue, eget tincidunt justo ullamcorper at. In metus sapien, rutrum sed mauris nec, pharetra molestie tellus. Aenean varius velit ut ex tempus congue. Sed commodo lorem nec orci aliquam, a laoreet dolor efficitur. Fusce lobortis, diam sit amet porta molestie, nisl lectus ultricies nibh, eget pulvinar urna justo quis orci. Proin eu enim vel ipsum volutpat gravida. Etiam vehicula quis tellus vitae interdum. Sed id leo neque. Sed vitae placerat ante, at porta ex.
<br/><br/>
Aliquam erat volutpat. Suspendisse maximus justo ac nulla efficitur sollicitudin. Aenean quis massa id sapien blandit tempor ac in libero. Nullam suscipit pharetra augue, id convallis leo iaculis in. Sed ac diam justo. Vivamus sollicitudin vulputate faucibus. Mauris gravida turpis vel commodo cursus. Nunc at odio eu tellus imperdiet lacinia. Sed quis ultrices velit, id viverra dui. Morbi sed dui lacinia, venenatis enim eget, tincidunt ex. Proin lacus arcu, vehicula id suscipit at, pulvinar quis orci. Fusce dapibus leo erat, in volutpat nisl accumsan vitae. Cras erat felis, pharetra egestas consequat ac, placerat nec libero. Nam pellentesque diam quis elit feugiat pulvinar.
<br/><br/>
Phasellus quis facilisis metus, vel sagittis lacus. Nunc laoreet rhoncus dui id facilisis. Donec arcu leo, dignissim convallis laoreet quis, venenatis quis eros. Vivamus elementum magna a interdum porta. Aenean scelerisque maximus justo quis laoreet. Nullam vel ornare dui, in blandit odio. Vivamus ac ante est. Aliquam iaculis fermentum magna a semper.
<br/><br/>
Integer finibus tincidunt ultrices. Aliquam at urna luctus, efficitur urna at, cursus ipsum. Donec placerat eleifend mi a imperdiet. Suspendisse malesuada luctus eros, nec lacinia sem sagittis id. Aenean tempor tincidunt vulputate. Integer mattis nisi a lobortis auctor. Nullam iaculis accumsan est et consequat. Praesent ac augue in magna vehicula elementum. Etiam nec lacus eget ligula molestie fringilla. Vestibulum cursus, metus id elementum dapibus, nunc enim ultricies arcu, a posuere magna lacus vitae nibh.
<br/><br/>
Integer lorem velit, elementum vel elit quis, luctus pretium ante. Suspendisse ultricies dolor risus, egestas ultrices neque tempor non. Pellentesque hendrerit aliquet purus, ut iaculis lacus aliquet non. Aenean urna libero, laoreet eget purus eu, rhoncus fermentum ipsum. Aenean interdum volutpat consequat. Nunc sagittis sed nibh nec sollicitudin. Praesent ultrices velit vitae diam venenatis, a rhoncus nisi mollis. Fusce finibus eleifend accumsan. Nam lacinia justo mauris, vel eleifend erat gravida et. Quisque et diam at nibh ullamcorper aliquet ac id felis. Quisque mattis mi ante, eget laoreet nisi tincidunt in. Ut et nisl placerat, malesuada sem at, viverra orci. Cras turpis metus, blandit sed pulvinar non, commodo eu elit.
<br/><br/>
Donec consectetur turpis augue, eget tincidunt justo ullamcorper at. In metus sapien, rutrum sed mauris nec, pharetra molestie tellus. Aenean varius velit ut ex tempus congue. Sed commodo lorem nec orci aliquam, a laoreet dolor efficitur. Fusce lobortis, diam sit amet porta molestie, nisl lectus ultricies nibh, eget pulvinar urna justo quis orci. Proin eu enim vel ipsum volutpat gravida. Etiam vehicula quis tellus vitae interdum. Sed id leo neque. Sed vitae placerat ante, at porta ex.
<br/><br/>
Aliquam erat volutpat. Suspendisse maximus justo ac nulla efficitur sollicitudin. Aenean quis massa id sapien blandit tempor ac in libero. Nullam suscipit pharetra augue, id convallis leo iaculis in. Sed ac diam justo. Vivamus sollicitudin vulputate faucibus. Mauris gravida turpis vel commodo cursus. Nunc at odio eu tellus imperdiet lacinia. Sed quis ultrices velit, id viverra dui. Morbi sed dui lacinia, venenatis enim eget, tincidunt ex. Proin lacus arcu, vehicula id suscipit at, pulvinar quis orci. Fusce dapibus leo erat, in volutpat nisl accumsan vitae. Cras erat felis, pharetra egestas consequat ac, placerat nec libero. Nam pellentesque diam quis elit feugiat pulvinar.
<br/><br/>
Phasellus quis facilisis metus, vel sagittis lacus. Nunc laoreet rhoncus dui id facilisis. Donec arcu leo, dignissim convallis laoreet quis, venenatis quis eros. Vivamus elementum magna a interdum porta. Aenean scelerisque maximus justo quis laoreet. Nullam vel ornare dui, in blandit odio. Vivamus ac ante est. Aliquam iaculis fermentum magna a semper.
<br/><br/>
Integer finibus tincidunt ultrices. Aliquam at urna luctus, efficitur urna at, cursus ipsum. Donec placerat eleifend mi a imperdiet. Suspendisse malesuada luctus eros, nec lacinia sem sagittis id. Aenean tempor tincidunt vulputate. Integer mattis nisi a lobortis auctor. Nullam iaculis accumsan est et consequat. Praesent ac augue in magna vehicula elementum. Etiam nec lacus eget ligula molestie fringilla. Vestibulum cursus, metus id elementum dapibus, nunc enim ultricies arcu, a posuere magna lacus vitae nibh.
<br/><br/>
Integer lorem velit, elementum vel elit quis, luctus pretium ante. Suspendisse ultricies dolor risus, egestas ultrices neque tempor non. Pellentesque hendrerit aliquet purus, ut iaculis lacus aliquet non. Aenean urna libero, laoreet eget purus eu, rhoncus fermentum ipsum. Aenean interdum volutpat consequat. Nunc sagittis sed nibh nec sollicitudin. Praesent ultrices velit vitae diam venenatis, a rhoncus nisi mollis. Fusce finibus eleifend accumsan. Nam lacinia justo mauris, vel eleifend erat gravida et. Quisque et diam at nibh ullamcorper aliquet ac id felis. Quisque mattis mi ante, eget laoreet nisi tincidunt in. Ut et nisl placerat, malesuada sem at, viverra orci. Cras turpis metus, blandit sed pulvinar non, commodo eu elit.
<br/><br/>
Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam vitae sollicitudin eros. Quisque a bibendum nulla, id cursus magna. Duis elementum dictum dui, non dapibus risus lobortis at. Duis semper malesuada neque a efficitur. Nunc tincidunt sem eget dolor accumsan porta. Duis vitae semper quam. Cras efficitur lacinia libero, sit amet efficitur ipsum porttitor nec. Suspendisse potenti. Donec dui mauris, mollis pretium dui sed, interdum imperdiet nibh. Curabitur consectetur est a suscipit lacinia. Praesent in lectus ultrices, fermentum nunc malesuada, pharetra nisl. Phasellus porttitor feugiat massa, quis rhoncus leo euismod eu. Nulla dapibus elit lacus, non finibus diam interdum vehicula.
<br/><br/>
Vivamus eleifend convallis porta. In condimentum viverra sem, non eleifend ex pellentesque ac. Ut nec malesuada sem, eget condimentum quam. Maecenas vehicula arcu ac enim sagittis placerat. Morbi porta vitae libero sit amet fermentum. Quisque in imperdiet mauris. Phasellus et dui massa. Ut mollis imperdiet pulvinar.
<br/><br/>
Curabitur varius placerat nisl non congue. Aenean vitae vehicula velit, ut tristique lorem. Nam nec blandit mi. Donec vel iaculis augue. Duis quis ligula fermentum, ornare nibh quis, venenatis dolor. Fusce ultricies, velit eget suscipit auctor, dui est blandit enim, sit amet dapibus nulla diam nec dolor. Fusce at pharetra ex. Vestibulum facilisis arcu quam, eu efficitur elit venenatis vel. Vestibulum velit risus, imperdiet et leo eu, molestie sodales mi.`;


const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar)

//Funcion que calcule
const calcularPorcentajeScroll = (e) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = e.target.documentElement;

    return ((scrollTop / (scrollHeight - clientHeight)) * 100).toFixed();
}


// streams
const scroll$ = fromEvent(document, 'scroll');
// scroll$.subscribe(console.log)

const progress$ = scroll$.pipe(
    map(m => calcularPorcentajeScroll(m)),
    tap(console.log)
);


progress$.subscribe(por => {
    progressBar.style.width = `${por}%`
})