/*
  Todo número natural es perfecto, si la suma de sus divisores propios (todos
sus divisores excepto el mismo número) es igual al número. Así por ejemplo, el
número 6 es perfecto ya que sus divisores propios son 1, 2 y 3 y la suma de
ellos es igual al mismo número, es decir, 6.

  Son números perfectos:  6, 28, 496, 8128.

  Realizar un programa que liste TODOS los números perfectos hasta un numero
ingresado

  Utilizar la función esPerfecto(n)
*/

const esPerfecto = n => {
    let lim = parseInt( Math.sqrt( n ) )
    let sum = 1 ;
    for ( d = 2 ; d < lim ; ++d ) {
        if ( n % d === 0 )
            sum += d
    }
    if ( lim * lim === n )
        sum += lim
    return sum === n
}

const main = () => {
    let lim = parseInt( prompt() )
    for ( let i = 1 ; i <= lim ; ++i )
        if ( esPerfecto( i ) )
            document.write( `${ i } ` )
}
