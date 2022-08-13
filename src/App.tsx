import React, {useEffect} from 'react';
import './App.css';
import {
    Link, Navigate,
    NavLink,
    Outlet,
    Route,
    Routes,
    useLocation,
    useNavigate, useOutlet,
    useParams,
    useSearchParams
} from "react-router-dom";

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
    return <div>
        <h1>This is Profile</h1>
    </div>
}
const Status = () => {
    return <div>
        <h1>This is Stats</h1>
    </div>
}

const Bags = ({out}:any)=>{
    return <div>
        <h1>Bags</h1>
        {out}
    </div>
}
const Main = () => {
    const navigate = useNavigate()
    const out =useOutlet()
    console.log(out)

    // if (1){
    //     console.log('good')
    //     return <Navigate to="/auth/login" replace={true}/>
    // }

    return <div>
        <h1>Main</h1>
        <button onClick={() => navigate('/auth/login')}>click</button>
        <Link style={{color: 'red'}} to={'profile'}> Profile</Link>
        <NavLink
            style={({isActive}) => {
                return {
                    display: "block",
                    margin: "1rem 0",
                    fontWeight: 900,
                    color: isActive ? "greenyellow" : "",
                };
            }} to={'stats'}> stats</NavLink>
        {/*<Outlet/>*/}
        <Bags out={out}/>
        {/*{out}*/}
    </div>
}

const Id = () => {
    let [searchParams, setSearchParams] = useSearchParams({user: ''});
    const {id} = useParams()
    const loc = useLocation()
    console.log(loc)
    useEffect(() => {
        console.log(id)
    }, [])
    return <div>
        <h1>This is ID</h1>
        <button onClick={() => setSearchParams({user: Math.ceil(Math.random() * 10) + ""})}>click</button>
    </div>
}

function App() {

    return (
        <div className="App">
            <h1>Hello</h1>
            <Routes>
                <Route path='/' element={<Main/>}>
                    <Route index element={<Profile/>}/>
                    <Route path='profile' element={<Profile/>}/>
                    <Route path='stats' element={<Status/>}/>
                </Route>
                <Route path='auth/login' element={<Login/>}/>
                <Route path='*' element={<h1>Not Found!</h1>}/>
                <Route path='auth/reg' element={<Reg/>}>
                    <Route path=':id' element={<Id/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
