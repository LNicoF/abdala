const getHashtags = ( sentence ) => {
    /** @type String[] */
    let words = sentence.split( /[,.; ]+/ )

    words = words.sort( ( a, b ) => {
        if ( a.length == b.length ) return 0
        if ( a.length < b.length ) return 1
        return -1
    })

    return words.map( s => `#${ s }`)
                .slice( 0, 3 )
}

const main = () => {
    let sentence = prompt()
    document.write( getHashtags( sentence ).join( ' ' ) )
}