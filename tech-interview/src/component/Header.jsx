import React from 'react';


const Header = ({logo})=> {

    return(
        <>
        <header className="App-header">
            <div>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <h1>Tech Interview</h1>
        </header>
        </>
    )
};

export default Header;