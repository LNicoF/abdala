const calcMediaPar = ( arr ) => {
    if ( arr.length % 2 != 0 ) return undefined
    let l = arr.length / 2 - 1
    let r = arr.length / 2
    console.log( l, r )
    return ( parseInt( arr[ l ] ) + parseInt( arr[ r ] ) ) / 2
}

const calcMediaImpar = ( arr ) => {
    if ( arr.length % 2 == 0 ) return undefined
    return parseInt( arr[ ( arr.length - 1 ) / 2 ] )
}

const calcMedia = ( arr ) => {
    console.log( arr )
    if ( arr.length % 2 == 0 )
        return calcMediaPar( arr )
    return calcMediaImpar( arr )
}

const main = () => {
    let n = prompt( 'Cantidad:' )
    while ( n != '0' ) {
        let arr = prompt( 'Valores:' ).split( ' ' )
        arr = arr.sort( ( a, b ) => a - b )
        document.write( `${ calcMedia( arr ) * 2 }<br>` )
        n = prompt( 'Cantidad:' )
    }
}
