import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "react-bootstrap";

const App = () => {

    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `pushed ${count} times`
    })
    const addCount = () => {
        setCount(count + 1)
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <Button variant={'warning'} onClick={addCount}>
                    hi
                </Button>
            </header>
        </div>
    )
}

export default App;
