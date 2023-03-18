/*
    ## Entrada

  El programa deber ́a leer, de la entrada estandar, los mensajes recibidos
desde el servidor por la aplicacion de mensajer ́ıa instantanea, cada uno en
una linea. Estaran compuestos de entre 1 y 1.000 caracteres, formados unicamente
por letras del alfabeto ingles, espacios, signos de exclamacion (solo de cierre,
por supuesto), y otros signos ortograficos.

    ## Salida

  Por cada linea de la entrada, el programa escribir ́a "ESGRITO" si el texto
tiene mas signos de exclamacion que letras (del abecedario ingles), y "escrito"
en caso contrario.

    ## Entrada de ejemplo
Hola!!!!!
No puedo ir :(
22!
Uau!!!
Si!! Si!!!
:-O!!

    ## Salida de ejemplo
ESGRITO
escrito
ESGRITO
escrito
ESGRITO
ESGRITO

*/

const esGrito = frase => {
    const abc = 'abcdefghijklmnopqrstuvwxyz'
    let letras = 0, signos = 0
    for ( let i = 0 ; i < frase.length ; ++i ) {
        if ( frase[ i ] === '!' )
            ++signos
        else if ( abc.includes( frase[ i ] ) )
            ++letras
    }
    return signos > letras ? 'ESGRITO' : 'escrito'
}

const main = () => {
    let input = prompt()
    while ( input !== null ) {
        document.write( `${ esGrito( input ) }<br>` )
        input = prompt()
    }
}
