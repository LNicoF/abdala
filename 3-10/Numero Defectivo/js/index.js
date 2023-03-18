/*
  Un numero defectivo es aquel número cuya suma de sus divisores propios es menor
que dicho número. Por ejemplo, 14 es un número defectivo ya que sus divisores
propios son: 1, 2 y 7, y la suma de ellos es 1+2+7=10 que es menor que el número.
Otro número defectivo es 16, pues sus divisores propios son: 1, 2, 4 y 8, y la
suma de estos divisores es: 1+2+4+8=15, que también es menor que el número.
Todos los números primos son defectivos, y también lo son las potencias de los
números primos y los divisores propios de los números defectivos y perfectos.
Es fácil ver que existen infinitos números defectivos, ya que existen infinitos
números primos, y éstos son sólo algunos de los números defectivos.

  Hacer un programa que muestre mediante una función llamada function
esDefectivo(n) muestre el listado de los números defectivos hasta el número
ingresado.
*/

const esDefectivo = n => {
    let lim = parseInt( Math.sqrt( n ) )
    let sum = 1 ;
    for ( d = 2 ; d < lim ; ++d ) {
        if ( n % d === 0 )
            sum += d
    }
    if ( lim * lim === n )
        sum += lim
    return sum < n
}

const main = () => {
    let lim = parseInt( prompt() )
    for ( let i = 1 ; i <= lim ; ++i )
        if ( esDefectivo( i ) )
            document.write( `${ i } ` )
}
