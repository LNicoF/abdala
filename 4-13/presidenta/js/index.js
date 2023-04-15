const esPrimo = ( n ) => {
    if ( n <= 1 ) return n
    const lim = Math.sqrt( n )
    for ( let i = 2 ; i <= lim ; ++i )
        if ( n % i == 0 )
            return false
    return true
}

const calcPrimos = ( desde, hasta ) => {
    let res = []
    for ( let i = desde ; i <= hasta ; ++i )
        if ( esPrimo( i ) )
            res.push( i )
    return res
}

const filter = ( arr, filterCb ) => {
    let res = [] ;
    for ( let i = 0 ; i < arr.length ; ++i )
        if ( filterCb( arr[ i ] ) )
            res.push( arr[ i ] )
    return res
}

const sumarDigitos = ( n ) => {
    let sum = 0
    for ( let e = 1 ; e <= n ; e *= 10 ) {
        let c = parseInt( ( n / e ) % 10 )
        sum += c
    }
    return sum
}

const main = () => {
    let desde = parseInt( prompt( 'desde' ) )
    let hasta = parseInt( prompt( 'hasta' ) )
    let primos = calcPrimos( desde, hasta )
    document.write( filter(
        primos,
        e => esPrimo( sumarDigitos( e ) )
    ).join( ' ' ) )
}
