import React from 'react';
import {NavBar} from './components/NavBar'
import {TODOForm} from './components/TODOForm'

const App: React.FC = () => {
    return (
        <>
            <NavBar/>
            <div className="container">
                <TODOForm />
            </div>
        </>
    )
}

export default App;