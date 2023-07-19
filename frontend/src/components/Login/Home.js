import React from 'react'
import {auth} from '../firebase/config';
import App from '../../App';


const Home = ({presentUser}) => {
    return (
        <div>
           <h1> Welcome {presentUser.email}</h1>
           <button onClick={() => auth.signOut()}>Sign Out</button>
           <App/>
        </div>
        
    )
}

export default Home
