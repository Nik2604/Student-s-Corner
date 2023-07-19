import React,{useEffect,useState} from 'react'
import { auth } from '../firebase/config';
import UserAuth from './UserAuth';
import Home from '../../App';
import Table from '../Table/Table';

const App = () => {
  const [presentUser,setPresentUser] = useState(null);
  useEffect(()=>{
    auth.onAuthStateChanged(user =>{
      if(user){
      setPresentUser({
        uid:user?.uid,
        email:user?.email
      })
    }
    else{
      setPresentUser(null);
    }
    })
  },[])
  return (
    <div>
      <center>
        {presentUser ? <Home presentUser={presentUser}/> : <UserAuth /> }
        {/* {presentUser ? <Table presentUser={presentUser}/> : <UserAuth /> } */}
      </center>
    </div>
  )
}

export default App
