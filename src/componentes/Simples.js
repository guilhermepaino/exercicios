import React from 'react'
import { Text } from 'react-native'
import Padrao from '../estilo/Padrao'

// export default function(props){
//     return <Text>{props.texto}</Text>
// }

// funcao tambem, porem, sem a necessidade de especificar o return e as chaves.. chamado de ArrowFunction
// voce pode retornar dois elementos dentro de uma View ou 
// dentro de um Array --- precisa utilizar os colchetes[] e especificar a propriedade KEY 
export default props => 
    <Text style={Padrao.ex}> Arrow: {props.texto}</Text>