const index = ( () => {

const { Form } = form_processor
const { CRectangulo } = rectangulo

let rect = new CRectangulo( 0, 0 );

const outputArea = () => {
    document.querySelector( '#area-form .output').textContent = rect.calcularArea()
}

const updateRectangulo = ( base, altura ) => {
    if ( !( base && altura ) ) {
        return
    }
    rect = new CRectangulo( parseInt( base ), parseInt( altura ) )
    outputArea()
}

const main = () => {
    let form = new Form( { 
        query: '#area-form',
        fields: [ 'base', 'altura' ],
        onFieldChange: ( _n, _v, form ) => {
            updateRectangulo( form.getBase(), form.getAltura() )
        },
        onSubmit: ( form ) => {
            updateRectangulo( form.getBase(), form.getAltura() )
        }
    } )
    
    console.log( form )
    console.log( form.getFieldValue( 'base' ) )
    console.log( form.getBase() )
}

main() ;

})()