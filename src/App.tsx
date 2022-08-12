import React from 'react';
import './App.css';
import {BrowserRouter, Link, NavLink, Outlet, Route, Routes, useNavigate} from "react-router-dom";

const Login = () => {
    console.log("Login")
    return <div>
        <h1>Login</h1>
        <input type="text"/>
    </div>
}
const Reg = () => {
    console.log("REg")
    return <div>
        <h1>Reg</h1>
        <input type="text"/>
        <Outlet/>
    </div>
}

const Profile = () => {
    console.log("Profile")
    return <div>
        <h1>This is Profile</h1>
    </div>
}
const Status = () => {
    console.log("Stats")
    return <div>
        <h1>This is Stats</h1>
    </div>
}

const Main = () => {
    const navigate = useNavigate()
    return <div>
        <h1>Main</h1>
        <button onClick={() => navigate('/auth/login')}>click</button>
        <Link style={{color:'red'}} to={'profile'}> Profile</Link>
        <Link to={'stats'}> stats</Link>
        <Outlet/>
    </div>
}

function App() {
    return (
        <div className="App">
            <h1>Hello</h1>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Main/>}>
                        <Route index element={<Profile/>}/>
                        <Route path='/profile' element={<Profile/>}/>
                        <Route path='/stats' element={<Status/>}/>
                    </Route>
                    <Route path='auth/login' element={<Login/>}/>
                    <Route path='*' element={<h1>Not Found!</h1>}/>
                    <Route path='auth/reg' element={<Reg/>}>
                        <Route path=':id' element={<h1>This is id</h1>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
