/*
  Ingresar una frase y convertirla a cesar con una funcion llamada
ConvertirFrase(f)
*/

const codes = {
    a: 'a'.charCodeAt( 0 ),
    A: 'A'.charCodeAt( 0 ),
    z: 'z'.charCodeAt( 0 ),
    Z: 'Z'.charCodeAt( 0 ),
}

const getACode = ( char ) => {
    let code = char.charCodeAt( 0 )
    if ( code >= codes.a && code <= codes.z )
        return codes.a
    if ( code >= codes.A && code <= codes.Z )
        return codes.A
    return 0
}

const convertirFrase = ( frase, factor ) => {
    const gap = codes.a - codes.z 
    let res = ''

    for ( let i = 0 ; i < frase.length ; ++i ) {
        let code = frase[ i ].charCodeAt( 0 )
        let aCode = getACode( frase[ i ] )

        let newCode = ( ( code - aCode + factor ) % ( gap ) ) + aCode
        console.log( `${ frase[ i ] } : ${ code } => ${ newCode }` )
        res += String.fromCharCode( newCode )
    }

    return res
}

const main = () => {
    let str = prompt()
    let factor = parseInt( prompt() )
    document.write( convertirFrase( str, factor ) )
}