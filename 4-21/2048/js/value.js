/** @param { number } n */
const Value = ( n, onChangeCb = n=>{} ) => {
    let res = {
        value: n,

        /**
         * @param { { value: number } } other
         */
        merge( other, onMerge = ()=>{} ) {
            if ( other.value != this.value )
                return
            console.info( 'merging...' )
            this.value *= 2
            onMerge()
            onChangeCb( this.value )
        }
    }

    onChangeCb( n )
    return res
}
