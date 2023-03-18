/*
  Un palindromo es una palabra o frase que, tras unificar mayusculas y quitarle
tildes, espacios y signos de puntuacion, se lee igual de izquierda a derecha que
de derecha a izquierda. Un ejemplo es el titulo de este problema, uno de los
palindromos mas famosos de Juan Filloy. Asociada a los palindromos, existe la
pregunta casi filosofica de si estos se inventan o se descubren. Nosotros nos
quedaremos con la segunda opci ́on e intentaremos descubrir, dada una frase, si
es o no palindroma.

    ## Entrada

  La entrada estar ́a compuesta por multiples casos de prueba. Cada caso de
prueba es una unica linea con una palabra o frase de no mas de 100 caracteres.
En ella puede haber tanto letras mayusculas como minusculas del alfabeto ingles
y uno o varios espacios separando palabras (eso si, las lineas empezaran y
terminaran siempre con letra, nunca con espacios). A riesgo de comprometer la
ortografia y la semantica, las palabras no contendran tildes y los signos de
puntuacion se omiten. El ultimo caso de prueba va seguido de una linea con "XXX"
que marca el final y no debe ser procesada.

    ## Salida

  Por cada caso de prueba se escribira "SI" si la palabra o frase es palindroma
y "NO" en caso contrario.

    ## Entrada de ejemplo
Acaso hubo buhos aca
Querido muerto esta tarde llegamos
XXX

    ## Salida de ejemplo
SI
NO

*/

const esPalindromo = frase => {
    frase = frase.toLowerCase()
    for (
        let l = 0, r = frase.length - 1;
        l - r <= 1 ;
        ++l, --r
    ) {
        if ( frase[ l ] != frase[ r ] )
            return false
    }
    return true
}

const main = () => {
    let input = prompt()

    while ( input != 'XXX' ) {
        document.write( esPalindromo( input ) ? 'Si<br>' : 'No<br>')
        input = prompt()
    }
}
