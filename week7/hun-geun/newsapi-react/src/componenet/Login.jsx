import React, { useState } from 'react'
import styled from 'styled-components'
import { validEmail, validPassword } from './LoginValid'

export default function Login() {
    
    const [id, setId] = useState("")
    const [password, setPassword] = useState("")
    const [idPlace, setIdPlace] = useState("")
    const [passwordPlace, setPasswordPlace] = useState("")

    const LoginFunc = (e) => {
        e.preventDefault()
        if(IsValidEmail() && IsValidPassword()){
            alert("로그인 성공!")
        } else if (!IsValidEmail()){
            setId("")
            setIdPlace("Check ID")
        } else if (!IsValidPassword()){
            setPassword("")
            setPasswordPlace("Check Password")
        } else {
            setId("")
            setPassword("")
            setIdPlace("Check ID")
            setPasswordPlace("Check Password")
        }
    }
    const IsValidEmail = () => {
        return ( validEmail.test(id)) ? true : false
    }
    const IsValidPassword = () => {
        return ( validPassword.test(password)) ? true : false
    }

    const Form = styled.form`
        position:absolute;
        top:70px;
        left:20px;
        display:flex;
        flex-direction: column;   
    `
    return (
        <Form onSubmit={LoginFunc}>
            <label htmlFor="id" >ID</label>
            <input type="text" onChange={(e)=>{setId(e.target.value)}} value={id} placeholder={idPlace}/>
            <br />
            <label htmlFor="password">Password</label>
            <input type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password} placeholder={passwordPlace}/>
            <br />
            <button type="submit">로그인</button>
            <br />
        </Form>
    )
}

