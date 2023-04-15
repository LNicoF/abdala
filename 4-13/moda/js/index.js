const max = ( arr, lt = (a,b)=>a>b ) => {
    if ( arr.length == 0 ) return 0
    let res = arr[ 0 ]
    arr.forEach( e => {
        if ( lt( e, res ) )
            res = e
    } )
    return res
}

const calcModa = ( arr ) => {
    let count = []

    arr.forEach( e => {
        let i = count.findIndex( v => v[ 0 ] == e )
        if ( i == -1 )
            i = count.push( [ e, 0 ] ) - 1
        ++count[ i ][ 1 ]
    } )

    let moda = max( count, ( a, b ) => a[ 1 ] > b[ 1 ] )
    return moda[ 0 ]
}

const generateArr = ( n, generateCb ) => {
    let arr = new Array( n )
    for ( let i = 0 ; i < n ; ++i )
        arr[ i ] = generateCb( arr )
    return arr
}

const main = () => {
    let n = parseInt( prompt( 'N' ) )
    let arr = generateArr( n, _ => parseInt( Math.random() * 10**3 ) % 600 )
    arr = arr.sort()
    document.write( `${ arr.join(' ') }<br>${ calcModa( arr ) }` )
}
