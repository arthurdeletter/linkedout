import { useCallback, useState } from 'react'
import { Button, TextInput } from '../../../../ui'
import './form.css';
import {form} from '../../form-types'
import { useDispatch } from 'react-redux';
import { SignInUser, signUpUser } from '../../../../features/user/user-slice';

export const Form = ({type, title}) => {
    const dispatch = useDispatch()
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    const [registerData, setregisterData] = useState({
        username: "",
        email: "",
        picture: "",
        password: ""
    })

    const handleLogin = useCallback((e) =>{
        e.preventDefault();
        dispatch(SignInUser(loginData))
    }, [loginData, dispatch])

    const handleRegister = useCallback((e) =>{
        e.preventDefault();
        dispatch(signUpUser(registerData))
    }, [registerData, dispatch])

    if (type === form.LOGIN) {
        return (
            <form className='form' onSubmit={handleLogin}>
                <h1>{title}</h1>
                <TextInput label="Email" name="email" id="email" value={loginData.email} onChange={(e) => setLoginData((current => ({...current, email: e.target.value})))} />
                <TextInput label="Password" name="password" id="password" type="password" value={loginData.password} onChange={(e) => setLoginData((current => ({...current, password: e.target.value})))} />
                <Button text="Log in" variant="primary" type="submit" />
            </form>
        )
    }

    return (
        <form className='form' onSubmit={handleRegister}>
            <h1>{title}</h1>
            <TextInput label="Username" name="username" id="username" value={registerData.username} onChange={(e) => setregisterData((current => ({...current, username: e.target.value})))} />
            <TextInput label="Email" name="email" id="email" value={registerData.email} onChange={(e) => setregisterData((current => ({...current, email: e.target.value})))} />
            <TextInput label="Profile picture URL" name="pictureUrl" id="pictureUrl" value={registerData.picture} onChange={(e) => setregisterData((current => ({...current, picture: e.target.value})))} />
            <TextInput label="Password" name="password" id="password" type="password" value={registerData.password} onChange={(e) => setregisterData((current => ({...current, password: e.target.value})))} />
            <Button text="Create account" variant="primary" type="submit" />
        </form>
    )
}