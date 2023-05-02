/**
 * # TODO
 * - Transitions
 */

const EmptyCell = ( onChangeCb = n=>{} ) => {
    res = {
        clear () { return this },
        shift () { return this },

        fill ( value, onSuccess = ()=>{} ) {
            onSuccess()
            let res = FilledCell( value, onChangeCb )
            return res
        },

        fillIfEmpty ( value, ifTrue = ()=>{} ) {
            let res = this.fill( value )
            ifTrue()
            return res
        }
    }

    onChangeCb( null )
    return res
}

const FilledCell = ( value, onChangeCb = n=>{} ) => {
    return {
        value: Value( value, onChangeCb ),

        clear () {
            return EmptyCell( onChangeCb )
        },

        shift ( onto ) {
            let res = this
            onto.fill( this.value.value, () => { // fix
                res = this.clear()
            } )
            return res
        },

        fill ( value, onSuccess = ()=>{} ) {
            console.info( `filling ${ value.value } into ${ this.value.value }` )
            this.value.merge( Value( value ), onSuccess )
            return this
        },

        fillIfEmpty () { return this }
    }
}

const Cell = ( onChangeCb = n=>{} ) => {
    let state = EmptyCell( onChangeCb )

    return {
        clear () {
            state = state.clear()
        },

        shift ( onto, onSuccess = ()=>{} ) {
            state = state.shift( onto, onSuccess )
        },

        fill ( value ) {
            state = state.fill( value )
        },

        fillIfEmpty ( value, ifTrue = ()=>{} ) {
            state = state.fillIfEmpty( value, ifTrue )
        }
    }
}