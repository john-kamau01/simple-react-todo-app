import React from 'react';
import Button from './Button';

const Header = ({toggleForm}) => {
    return (
        <header className='header'>
            <h1>React ToDO App</h1>
            <Button toggleForm={toggleForm}/>
        </header>
    )
}

export default Header
