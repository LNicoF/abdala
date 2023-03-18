/*
  Todo número natural es abundante si la suma de sus divisores propios es mayor
que el propio número. También llamado número excesivo.

  Los primeros números abundantes son: 12, 18, 20, 24, 30, 36, 40, 42, 48, 54,
56, 60, 66, 70, 72, 78, 80, 84, 88, 90, 96, 100, 102, ...

  Existen infinitos números abundantes pares e impares. Cualquier múltiplo
propio de número perfecto, y cualquier múltiplo de un número abundante es
abundante.

  Realizar un programa que liste todos los numeros abdundantes hasta un numero
ingresado con una función llamada esAbundante(n) que devuelve un valor boolean.
*/

const esAbundante = n => {
    let lim = Math.sqrt( n )
    let sum = 1
    for ( let d = 2 ; d < lim ; ++d ) {
        if ( n % d === 0 )
            sum += d + n / d
    }
    if ( lim * lim === n )
        sum += lim
    return n != 1 && sum > n
}

const main = () => {
    let lim = parseInt( prompt() )
    for ( let i = 1 ; i <= lim ; ++i )
        if ( esAbundante( i ) )
            document.write( `${ i } ` )
}

