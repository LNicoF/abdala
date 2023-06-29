const getDigitCount = ( n ) => {
    let i ;
    for ( i = 1 ; 10**i <= n ; ++i ) {}
    return i ;
}

const main = () => {
    let n = parseInt( prompt() )
    document.write( getDigitCount( n ) )
}