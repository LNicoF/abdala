
const Match = () => {
    let sets = []
    sets.getLast = () => {
        return sets[ sets.length - 1 ]
    }

    const addPoint = ( point ) => {
        
    }
}

const processMatch = ( matchStr ) => {
    let match = Match()

    for ( let point of match ) {
        if ( point == F ) {
            match.end()
            break ;
        }

        match.addPoint( point )
    }

    return match
}

const main = () => {
    let match = prompt()
    while( match != 'F' ) {
        let result = procces( match )
        document.write( result, '<br>' )
        match = prompt()
    }
}