const getHamming = ( a, b ) => {
    let res = 0
    for ( let i = 0 ; i < a.length ; ++i ) {
        res += Number( a[ i ] != b[ i ] )
    }
    return res
}

const main = () => {
    const a = prompt( 'a' )
    const b = prompt( 'b' )
    document.write( getHamming( a, b ) )
}