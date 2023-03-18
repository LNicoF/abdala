/*
    # El desafío de Bino

Bino y Cino son amigos cercanos. A Bino le gusta crear desafíos matemáticos para que
Cino los resuelva. Esta vez, Bino creó una lista de números y le preguntó a Cino: ¿Cuantos
números son múltiplos de 2, 3, 4 y 5?
Este desafío parece simple, pero si la lista contiene muchos números, Cino cometerá
algunos errores de cálculo. Para ayudar a Cino, haga un programa que resuelva el Desafío
de Bino.

    ## Entrada

La primera línea de entrada consiste de un entero N (1 ≤ N ≤1000), que representa la
cantidad de números en la lista de Bino.
La segunda línea contiene N enteros Li (1 ≤ Li ≤ 100), que representan los números en la
lista de Bino.

    ## Salida

Mostrar la cantidad de múltiplos de 2, 3, 4 y 5 en la lista. Nótese que el formato de la salida
mostrado en el ejemplo debe ser seguido estrictamente.

 Ejemplos Entrada | Ejemplos Salida
------------------|-----------------
5                 | 4 Multiplo(s) de 2
2 5 4 20 10       | 0 Multiplo(s) de 3
                  | 2 Multiplo(s) de 4
                  | 3 Multiplo(s) de 5


## HACER UNA FUNCION PARA CADA NUMERO:
int ContarMultiplosde2(int n)
int ContarMultiplosde3(int n)
int ContarMultiplosde4(int n)
int ContarMultiplosde5(int n)
 */

const appendTo = ( query, content ) => {
    let c = document.querySelector( query )
    c.innerHTML += `${ content }<br>`
}

const contarMultiplos = ( de, en ) => {
    let res = 0 ;
    en.forEach( val => {
        if ( val % de === 0 ) ++ res
    } )
    return res
}

const main = () => {
    let n = parseInt( prompt() )
    appendTo( '.in', n )
    let str = prompt()
    appendTo( '.in', str )
    let list = []
    let aux = str.split( ' ' )

    aux.forEach( str => {
        list.push( parseInt( str ) )
    })

    appendTo( '.out', `${ contarMultiplos( 2, list ) } Multiplo(s) de 2` )
    appendTo( '.out', `${ contarMultiplos( 3, list ) } Multiplo(s) de 3` )
    appendTo( '.out', `${ contarMultiplos( 4, list ) } Multiplo(s) de 4` )
    appendTo( '.out', `${ contarMultiplos( 5, list ) } Multiplo(s) de 5` )
}
