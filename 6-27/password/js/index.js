const index = ( () => {

const { Form } = form_processor
const { CPassword } = password

let pass

const outputPassword = () => {
    let element = document.querySelector( '#password-generator .output')
    element.textContent =`Password ${ pass.generate() }
Length ${ pass.length }
${ pass.isStrong() ? 'strong' : 'weak' }`
}

const updatePassword = ( length ) => {
    if ( !length ) {
        return
    }
    pass = new CPassword( length )
    outputPassword()
}

const main = () => {
    let form = new Form( { 
        fields: [ 'length' ],
        onFieldChange: ( _, length ) => {
            updatePassword( length )
        },
        onSubmit: ( form ) => {
            updatePassword( form.getLength() )
        }
    } )

    // document.querySelector( '#password-generator' ).submit()
}

main() ;

})()