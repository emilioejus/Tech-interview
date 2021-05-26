import React from 'react';


const ButtonAdd = props=> {
    const {place, add} = props

    return(
        <>
        <button onClick= {add} type="button" className="btn btn-success">{place}</button>
        </>
    )
}

export default ButtonAdd;