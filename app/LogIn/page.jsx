'use client'


import Flex from "../components/Flex"
import Text from "../components/Text"
import styled from "styled-components"
import Button from "../components/Button"
import Link from "next/link"
import { useState } from "react"

const Authorization_content = styled.div`
    border-radius: 20px;
    background-color: #ffffff;
    height: 70%;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

const LogIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userToken, setUserToken] = useState(() => {
        const token = localStorage.getItem('userToken')
        return token || undefined
    })
    
    const ClickLogIn = () => {
        fetch('http://localhost:3001/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        })
        .then(response => response.json())
        .then(json => localStorage.setItem('userToken', JSON.stringify(json.access_token)))
        .then(json => console.log(json.access_token))
        
        setEmail('')
        setPassword('')
    }

    return(
        <Flex $alignI='center' $background='rgb(216 216 216 / 63%)' $minwidth='100%' $minheight='100%' $justify='center' >
            <Authorization_content>
                <Text size='26px' color='rgb(220,127,17)'>Log In</Text>
                <Flex direction='column' $gap='20px' width='90%'>
                    <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}></input>
                    <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}></input>
                </Flex>
                <Flex height='10%' width='90%' $justify='space-between'>
                    <Button $primary $padding='5px' width='20%' $bradius='10px' $border='1px rgb(220,127,17) solid' ><Link  href='../'><Text $primary color='rgb(220,127,17)'>Back</Text></Link></Button>
                    <Button $primary $padding='5px' width='20%' $bradius='10px' $border='1px rgb(220,127,17) solid' ><Link  href='../SignUp'><Text $primary color='rgb(220,127,17)'>Sign up</Text></Link></Button>
                    <Button onClick={ClickLogIn} $primary $bradius='10px' width='20%' $background='rgb(220,127,17)'><Text $primary  color='white'>Log in</Text></Button>
                </Flex>
            </Authorization_content>
        </Flex>
    )
}

export default LogIn