window.onload = function(){
    let qs = (elemento) => {
        return document.querySelector(elemento);
    }
    
 
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
      formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    

    let
        $title = qs('#title');
        $titleError = qs('#titleError');

        $rating = qs('#rating');
        $ratingError = qs('#ratingError');

        $awards = qs('#awards');
       $awardsError = qs('#awardsError');

       $releaseDate = qs('#release_date');
        $releaseDateError = qs('#releaseDateError');
        $length = qs('#length');
        $lengthError = qs('#lengthError');

        $genre = qs('#genre_id');
        $genreError = qs('#genreError');

        $form = qs('#form');
        $formErrors = qs('.errores');

        $title.focus();

        $title.addEventListener('blur', () => {
            $title.classList.remove('is-valid');
            $titleError.classList.remove('is-valid');
            switch (true) {
                case !$title.value.trim():
                    $titleError.innerText = 'El campo es obligatorio';
                    $title.classList.add('is-invalid');
                    $titleError.classList.add('is-invalid');
                    break;
                default:
                    $title.classList.remove('is-invalid');
                    $title.classList.add('is-valid');
                    $titleError.classList.remove('is-invalid');
                    $titleError.classList.add('is-valid');
                    break;
            }
});

    $rating.addEventListener('blur', () => {
        $rating.classList.remove('is-valid');
        $ratingError.classList.remove('is-valid');
        switch (true) {
            case !$rating.value.trim():
                $ratingError.innerText = 'El campo es obligatorio';
                $rating.classList.add('is-invalid');
                $ratingError.classList.add('is-invalid');
                break;
            case $rating.value < 0 || $rating.value > 10:
                $ratingError.innerText = 'Indicar el valor entre 0 y 10';
                $rating.classList.add('is-invalid');
                $ratingError.classList.add('is-invalid');
                break;
            default:
                $rating.classList.remove('is-invalid');
                $rating.classList.add('is-valid');
                $ratingError.classList.remove('is-invalid');
                $ratingError.classList.add('is-valid');
                break;
        }
    });

    $awards.addEventListener('blur', () => {
        $awards.classList.remove('is-valid');
        $awardsError.classList.remove('is-valid');
        switch (true) {
            case !$awards.value.trim():
                $awardsError.innerText = 'El campo es obligatorio';
                $awards.classList.add('is-invalid');
                $awardsError.classList.add('is-invalid');
                break;
            case $awards.value < 0 || $awards.value > 10:
                $awardsError.innerText = 'Indicar el valor entre 0 y 10';
                $awards.classList.add('is-invalid');
                $awardsError.classList.add('is-invalid');
                break;
            default:
                $awards.classList.remove('is-invalid');
                $awards.classList.add('is-valid');
                $awardsError.classList.remove('is-invalid');
                $awardsError.classList.add('is-valid');
                break;
        }
    });

    $releaseDate.addEventListener('blur', () => {
        $releaseDate.classList.remove('is-valid');
        $releaseDateError.classList.remove('is-valid');
        switch (true) {
            case !$releaseDate.value.trim():
                $releaseDateError.innerText = 'El campo es obligatorio';
                $releaseDate.classList.add('is-invalid');
                $releaseDateError.classList.add('is-invalid');
                break;
            default:
                $releaseDate.classList.remove('is-invalid');
                $releaseDate.classList.add('is-valid');
                $releaseDateError.classList.remove('is-invalid');
                $releaseDateError.classList.add('is-valid');
                break;
        }
    });

    $length.addEventListener('blur', () => {
        $length.classList.remove('is-valid');
        $lengthError.classList.remove('is-valid');
        switch (true) {
            case !$length.value.trim():
                $lengthError.innerText = 'El campo es obligatorio';
                $length.classList.add('is-invalid');
                $lengthError.classList.add('is-invalid');
                break;
            case $length.value < 60 || $length.value > 360:
                $lengthError.innerText = 'El campo es obligatorio';
                $length.classList.add('is-invalid');
                $lengthError.classList.add('is-invalid');
                break;
            default:
                $length.classList.remove('is-invalid');
                $length.classList.add('is-valid');
                $lengthError.classList.remove('is-invalid');
                $lengthError.classList.add('is-valid');
                break;
        }
    });

    $genre.addEventListener('blur', () => {
        $genre.classList.remove('is-valid');
        $genreError.classList.remove('is-valid');
        switch (true) {
            case !$genre.value.trim():
                $genreError.innerText = 'El campo es obligatorio';
                $genre.classList.add('is-invalid');
                $genreError.classList.add('is-invalid');
                break;
            default:
                $genre.classList.remove('is-invalid');
                $genre.classList.add('is-valid');
                $genreError.classList.remove('is-invalid');
                $genreError.classList.add('is-valid');
                break;
        }
    });



    $form.addEventListener("submit", (event) => {
        event.preventDefault()
        const elementErrors = document.querySelectorAll(".is-invalid");



        const ERRORES = elementErrors.length > 0;
        if (ERRORES) {
            $formErrors.classList.add('alert-warning')
            for (let i = 0; i < elementErrors.length - 1; i++) {
                const element = elementErrors[i];
                
                if (element.value === "" && element.type !== "submit") {
                    element.classList.add("is-invalid")
                    $formErrors.innerHTML += (`<h2>"Los campos son obligatorios"</h2>`)
                    $formErrors.innerHTML += (`<br>`)
                }
                
            }

            
        }else{
            alert('La pelicula se guardó satisfactoriamente')
            $form.submit()
        }
    })
    }

