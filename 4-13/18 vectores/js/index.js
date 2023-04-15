const generateArr = ( n, generateCb ) => {
    let arr = []
    for ( let i = 0 ; i < n ; ++i )
        arr.push( generateCb( arr ) )
    return arr
}

const accumulate = ( arr, operate = (a,b)=>a+b ) => {
    let sum = 0
    arr.forEach( e => {
        sum = operate( sum, e )
    } )
    return sum
}

const average = ( arr, filterCb = (a,b)=>a+b ) => {
    return accumulate( arr, filterCb ) / arr.length
}

const filter = ( arr, filterCb ) => {
    let res = [] ;
    for ( let i = 0 ; i < arr.length ; ++i )
        if ( filterCb( arr[ i ] ) )
            res.push( arr[ i ] )
    return res
}

const double = ( arr ) => {
    let res = []
    arr.forEach( e => {
        res.push( e * 2 )
    })
    return res
}

const main = () => {
    let n = parseInt( prompt( 'N' ) )
    let a = generateArr( n, _ => parseInt( Math.random() * 10**4 ) % 32000 )
    let avg = average( a )
    let b = filter( a, e => e > avg )
    let multQ = filter( a, e => e % 6 == 0 ).length
    let sum = accumulate( a )
    let c = double( a )

    document.write( `
    A: ${ a.join( ' ' ) } <br/>
    Promedio: ${ avg } <br/>
    B: ${ b.join( ' ' ) } <br/>
    Multiplos de 6: ${ multQ } <br/>
    Suma: ${ sum } <br/>
    C: ${ c.join( ' ' ) } <br/>
    ` )
}
