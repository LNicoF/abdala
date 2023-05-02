/**
 * # TODO
 * - Separate view
 * - Decompose init
 */

const app = {
    init( query, size, nGenerated ) {
        /** @type { HTMLElement } */
        const table = document.querySelector( query )

        // Generate table fields
        for ( let i = 0 ; i < size ; ++i ) {
            const row = document.createElement( 'tr' )
            for ( let j = 0 ; j < size ; ++j ) {
                const col = document.createElement( 'td' )
                row.appendChild( col )
            }
            table.appendChild( row )
        }

        let grid = Grid( size, nGenerated, ( x, y, n ) => {
            // fill table cell
            table.children[ y ].children[ x ].innerHTML = n ? n : '&nbsp;'
        } )

        // attach button to move up
        document.querySelector( 'button.up' ).onclick = () => {
            grid.move( DIRS.UP )
        }
    }
}