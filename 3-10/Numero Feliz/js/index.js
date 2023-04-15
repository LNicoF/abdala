/*
  Todo número natural que cumpla  que si sumamos los cuadrados de sus dígitos
y seguimos el proceso con los resultados obtenidos el resultado es 1.

Por ejemplo, el número 203 es un número feliz puesto que:
 - 2^2 + 0^2 + 3^2 = 4 + 0 + 9 = 13
 - 1^2 + 3^2 = 1 + 9 = 10
 - 1^2 + 0^2 = 1 + 0 = 1

  Hacer un programa que muestre mediante una función llamada EsFeliz(n) muestre
el listado de los números felices hasta el número ingresado. La función
devuelve un valor boolean (true/false)
*/

const esFeliz = n => {
    if ( n < 5 )
        return n === 1
    let res = 0 ;
    for ( let e = 1 ; e <= n ; e *= 10 ) {
        let c = parseInt( ( n / e ) % 10 )
        res += c * c ;
    }
    return esFeliz( res )
}

const main = () => {
    let n = parseInt( prompt() )
    if ( esFeliz( n ) )
        document.writeln( `${ n } es feliz` )
    else
        document.writeln( `${ n } no es feliz` )
}
