/*
  Número de n dígitos que resulta ser igual a la suma de las potencias de
orden n de sus dígitos. Por ejemplo: 153 es un número narcisista.

  Hacer un programa que muestre mediante una función llamada function
esNarciso(n) muestre el listado de los números narcisos hasta el número
ingresado.
*/

const esNarcisista = n => {
    let cantDig = 0
    let sum = 0
    for ( let e = 1 ; e <= n ; e *= 10 )
        ++cantDig
    for ( let e = 1 ; e <= n ; e *= 10 )
        sum += Math.pow( ( n / e ) % 10, cantDig )
    return sum === n
}

const main = () => {
    let lim = parseInt( prompt() )
    for ( let i = 1 ; i <= lim ; ++i )
        if ( esNarcisista( i ) )
            document.write( `${ i } ` )
}
