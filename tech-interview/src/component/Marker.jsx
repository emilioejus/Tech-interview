import React, {useState} from 'react';

import ButtonAdd from './ButtonAdd';

const Marker = ()=> {
    // state
    const [counter, setCounter] = useState(0)

    // 
    const add = ()=> {
        setCounter(counter + 1)
    }

    return(
        <>
        <ButtonAdd place="One To One" add={add}/>
        <p>{counter}</p>
        </>
    )
}

export default Marker;