/*
# Mensajes secretos

 Ingresar una frase y con funciones resolver el siguiente ejercicio

  Dos amigas necesitan enviarse por correo electrónico mensajes muy importantes
y extremadamente reservados. Ante el temor de que alguien pueda leer los correos,
deciden codificar los mensajes.

  La estrategia que utilizan es la siguiente: ciertos trozos disjuntos (o sea
sin superposición) del texto los escriben en orden inverso y los encierran entre
paréntesis, de manera tal de no olvidar que esos trozos deben ser leídos al revés.

    ## Ejemplo de entrada

Hoy (.sh 22 sal a) (ed asac ne sominuer son) Marcelo.

    ## Ejemplo de salida

Hoy a las 22 hs. nos reunimos en casa de Marcelo.

*/

const decode = ( str ) => {
    let res = ''
    let from = 0, to = 0
    let inPar = false

    for ( let i = 0 ; i < str.length ; ++i ) {
        if ( !inPar ) {
            if ( str[ i ] === '(' )
                from = i, inPar = true 
            else
                res += str[ i ]
        } else {
            if ( str[ i ] === ')' ) {
                to = i ;
                res += str.slice( from + 1, to )
                          .split( '' )
                          .reverse()
                          .join( '' )
                inPar = false
            }
        }
    }

    if ( inPar )
        res += str.slice( from )

    return res
}

const main = () => {
    let str = prompt()
    document.write( decode( str ) )
}
