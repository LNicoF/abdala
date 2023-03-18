/*
  Para “japonizar” un nombre seguiremos el proceso siguiente: siempre que
encontremos una consonante (distinta de la ‘n’) que no vaya seguida de
vocal, insertaremos una vocal ‘u’ a continuacion. (En japon ́es la vocal
‘u’ hace el papel de vocal muda.)
  Por ejemplo: siguiendo las normas descritas, “Brat Pitt” se japoniza en
“Buratu Pitutu”, “Pedro Gutierrez” en “Peduro Gutierurezu”, y “Joe
McEnroe” en “Joe MucEnroe”. “Angelina Jolie”, en cambio, se queda como
esta.

    ## Entrada

  La entrada consiste en una linea con un numero n entre 1 y 1000, seguido de n
lineas, cada una de las cuales contiene un nombre. Un nombre es una o mas
palabras formadas ́unicamente por letras del alfabeto ingles. Las palabras estan
separadas entre ellas por un espacio. Una palabra tiene como mucho 40 letras, y
un nombre nunca tendria mas de 10 palabras. Vuestro programa debe resolver 3
entradas como las descritas en un tiempo de un segundo.

    ## Salida

  La salida consiste en n lineas siguiendo el formato “Konnichi wa,
NOMuBuRE-san”, donde NOMuBuRE es la japonizacion del NOMBRE leido. Hay que
respetar la capitalizacion del nombre leido, pero las letras ‘u’ que se
añadan deben ser siempre min  ́usculas.


 Ejemplo de entrada | Ejemplo de salida
--------------------|--------------------------------------------------------------------------------
 6                  | Konnichi wa, NOMuBuRE-san
 NOMBRE             | Konnichi wa, Buratu Pitutu-san
 Brat Pitt          | Konnichi wa, Peduro Gutierurezu-san
 Pedro Gutierrez    | Konnichi wa, Joe MucEnroe Juru-san
 Joe McEnroe Jr     | Konnichi wa, Edugaru Ramirezu III-san
 Edgar Ramirez III  | Konnichi wa, Angelina Jolie IVu-san
 Angelina Jolie IV  |

*/

const consonantes = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'
const vocales = 'aeiouAEIOU'

const correct = ( a, b ) => {
    if ( consonantes.includes( a ) && a != 'n' && a != ' ' &&
         !( vocales.includes( b ) || b == 'n' ) )
        return a + 'u'
    return a
}

const main = () => {
    let n = prompt()
    while( n-- ) {
        let input = prompt()
        let output = ''

        for ( let i = 1 ; i <= input.length ; ++i ) {
            output += correct( input[ i - 1 ], input[ i ] )
        }

        document.write( `Konichiwa${ output }-san <br>` )
    }
}
