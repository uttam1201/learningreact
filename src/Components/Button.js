import React from 'react'
import Hello from './Hello';
import Helloworld from './Hello';


export default function Button(props) {

    return(
        <>
        <button onClick={()=>props.toggelemode()}> clickme </button>
        </>
    )

}
