import React,{useState} from "react";

import ButtonAdd from "./ButtonAdd";

const Fibonacci = ()=> {
    // state
    const [counter, setCounter] = useState(0);
    const [fiboA, setFiboA] = useState(1)
    const [fiboB, setFiboB] = useState(1)
    
    // actualizar los estados por cada click en secuencia de fibonnaci
    let hola = ()=> {
        setCounter(fiboA + fiboB);
        setFiboA(fiboB);
        setFiboB(fiboA + fiboB)
    }

    return(

        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Fibonacci</h5>
                <p>{counter}</p>
                <ButtonAdd place="Click" add={()=> hola()}/>
            </div>
        </div>
    )
} 

export default Fibonacci;