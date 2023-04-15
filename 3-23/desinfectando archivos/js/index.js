/*
# Desinfectando Archivos

Ingresar una frase y con funciones resolver el problema en Javascript

  Los archivos de texto de una computadora han sido afectados por un nuevo virus.
Este virus daña los archivos de texto de la siguiente manera: elige dos
caracteres cualesquiera, luego recorre el texto y cada vez que encuentra dos
currencias consecutivas del primer carácter le intercala el segundo carácter.

  Por ejemplo si el texto original fuera aadabeaa y el virus elige como primer
carácter a y como segundo carácter b, el texto infectado será abadabeaba. Si el
archivo de texto original no contenía la secuencia aba entonces el archivo se
puede desinfectar realizando el proceso inverso. A estos archivos los denominaremos
desinfectables.

    ## Ejemplo de entrada

a
b
cabadeabfaeaba

    ## Ejemplo de salida

caadeabfaeaa

*/
const desinfectar = ( str, a, b ) => {
    let res = ''
    for ( let i = 0 ; i < str.length - 1 ; ++i ) {
        if ( str.slice( i - 1, i + 2 ) != a + b + a )
            res += str[ i ]
    }
    return res + str[ str.length - 1 ]
}

const main = () => {
    let a = parseInt( prompt() )
    let b = parseInt( prompt() )
    let str = prompt()
    document.write( desinfectar( str, a, b ) )
}
