import React,{useEffect, useState} from 'react';

const TableResults = ()=> {
    // state
    const [counter, setCounter] = useState([]);

    // api
    const API = 'http://localhost:3000/initalState';

    useEffect(()=> {
        fetch(API)
        .then(response => response.json())
        .then(data => setCounter(data.people))
    },[])

    return(
        <div className="div-table">
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Lenguage</th>
                    </tr>
                </thead>
                <tbody>
                    {counter.map((element, index) => {
                        return(
                            <tr key={index}>
                                <td>{element.id}</td>
                                <td>{element.name}</td>
                                <td>{element.email}</td>
                                <td>{element.language}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
};

export default TableResults;