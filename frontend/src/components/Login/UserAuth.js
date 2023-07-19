import { Button, Grid, FilledInput } from '@mui/material';
import React,{useState} from 'react'
import {auth} from '../firebase/config';

const UserAuth = () => {
    const [data,setData] = useState({
        email:"",
        password:""
    })
    const {email,password} = data;
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const signUp = e =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password).then(
            user => console.log(user)
            ).catch(err => console.log(err))
    }
    const signIn = e =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then(
            user => console.log(user)
            ).catch(err => console.log(err))
    }
    return (
        <div>
            <center>
                <form autoComplete="off">
                    <h1>Authentication</h1>
                    <Grid>
                    <FilledInput type="email" name="email" value={email} placeholder="Email" onChange={changeHandler}/></Grid><br /><Grid>
                    <FilledInput type="password" name="password" value={password} placeholder="Password" onChange={changeHandler}/><br /></Grid>
                    <Button variant='contained' onClick={signIn}>Sign In</Button> &nbsp;&nbsp;
                    <Button variant='contained' onClick={signUp}>Sign Up</Button>
                </form>
            </center>
        </div>
    )
}

export default UserAuth
