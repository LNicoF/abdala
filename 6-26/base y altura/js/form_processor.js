form_processor = ( () => {
    return { Form: (() => {
        const defaultData = {
            query: 'form',
            fields: [
            ],
            onFieldChange: ( fieldName, newValue, form ) => {},
            onSubmit: ( form ) => {}
        }

        let data = Object.assign( {}, defaultData )
        let self = {}

        const capitalize = ( str ) => {
            let res = str.replace( /[-_.]./g, ss => ss[ 1 ].toUpperCase() )
            res = res.replace( res[ 0 ], c => c.toUpperCase() )
            return res
        }

        // Magic methods are getters for the fields.
        // They are made in camelCase no matter the case of the actual field name
        // E.g. 'product_id' => getProductId()
        const buildMagicMethods = ( baseGetter ) => {
            for ( let attribute of data.fields ) {
                console.info( 'making getter for', attribute )
                const funcName = 'get' + capitalize( attribute )
                self[ funcName ] = () => baseGetter( attribute )
            }
        }

        const getFieldQuery = ( fieldName ) => `${ data.query } input[name='${ fieldName }']` 

        const setupOnChange = () => {
            for ( let fieldName of data.fields ) {
                let element = document.querySelector( getFieldQuery( fieldName ) )
                element.onchange = () => {
                    data.onFieldChange( fieldName, element.value, self )
                    return false
                }
            }
        }

        const setupOnSubmit = () => {
            let formElement = document.querySelector( data.query )
            formElement.addEventListener( 'submit', () => data.onSubmit( self ) )
        }

        const setupEvents = () => {
            setupOnChange()
            setupOnSubmit()
        }

        function Form( cfg = defaultData ) {
            self = this
            data = Object.assign( data, cfg )
            buildMagicMethods( self.getFieldValue )
            setupEvents()
        }

        Form.prototype.getFieldValue = ( fieldName ) => {
            const element = document.querySelector( getFieldQuery( fieldName ) )
            return element.value
        }

        return { Form }
    } )().Form }
})()