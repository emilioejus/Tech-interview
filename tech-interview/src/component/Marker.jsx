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
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">For each click add 1</h5>
                <p>{counter}</p>
                <ButtonAdd place="One To One" add={add}/>
            </div>
        </div>
    )
}

export default Marker;