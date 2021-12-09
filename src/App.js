import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// src
import './App.css';
import CustomTable from './components/CustomTable';
import UserService from './services/UserService';
import { resetColumnState } from './redux/slice';

const userToken = JSON.parse(UserService.getUserToken());
const userAuthenticated = userToken? true: false;

function App() {
    const [loginStatus, setLoginStatus] = useState(userAuthenticated);

    const login = () => {
        UserService.setUserToken();
        setLoginStatus(true)
    }

    const logout = () => {
        UserService.removeUserToken();
        setLoginStatus(false)
    }

    const columns = useSelector(state => state.columns)

    const saveColumn = () => {
        UserService.setUserToken(columns)
    }

    const dispatch = useDispatch();

    const loadOriginColumn = () => {
        dispatch(resetColumnState())
    }

    return (
        <div className="App">
            {loginStatus? (
                <div>
                    <div className='button-wrapper'>
                        <button onClick={logout}>Logout</button>
                    </div>
                    
                    <div className='save-button-wrapper'>
                        <button onClick={saveColumn}>Save</button>
                        <button onClick={loadOriginColumn}>Load</button>
                    </div>
                </div>
            ) : (
                <div className='button-wrapper'>
                    <button onClick={login}>Login</button>
                </div>
            )}
            
            <CustomTable />
        </div>
    );
}

export default App;
