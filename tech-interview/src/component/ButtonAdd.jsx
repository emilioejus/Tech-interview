import React from 'react';


const ButtonAdd = props=> {
    const {place, add} = props

    return(
        <>
        <button onClick= {add} type="button" class="btn btn-success">{place}</button>
        </>
    )
}

export default ButtonAdd;