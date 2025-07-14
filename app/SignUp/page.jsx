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

const theme = {
    primary: 'black',
    secondary: {
      backcolor: 'black',
      color1: 'white',
      color2: '#8043fd',
      color3: 'rgb(172,172,172)'
    },
}

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [the, setThe] = useState(() => {
        const hh = localStorage.getItem('mode')
        return hh || 'false'
      })
    
    const ClickReg = () => {
        fetch('http://localhost:3001/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                username: name,
                password: password,
            })
        })
        .then(response => response.json())

        setEmail('')
        setName('')
        setPassword('')
    }

    return(
        <Flex $alignI='center' $background={the === 'false' ? 'rgba(220,127,17, 1)' : '#8043fd'} $minwidth='100%' $minheight='100%' $justify='center' >
            <Authorization_content>
                <Text size='26px' color={the === 'false' ? 'rgba(220,127,17, 1)' : '#8043fd'}>Sign up</Text>
                <Flex direction='column' $gap='20px' width='90%'>
                    <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}></input>
                    <input type="text" placeholder="Username" onChange={(e) => setName(e.target.value)} value={name}></input>
                    <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}></input>
                </Flex>
                <Flex height='10%' width='90%' $justify='space-between'>
                    <Button theme={theme} $themeval={the} $primary $padding='5px' width='20%' $bradius='10px' $border='1px rgb(220,127,17) solid' ><Link  href='../'><Text $primary color={the === 'false' ? 'rgba(220,127,17, 1)' : '#8043fd'}>Back</Text></Link></Button>
                    <Button theme={theme} $themeval={the} $primary $padding='5px' width='20%' $bradius='10px' $border='1px rgb(220,127,17) solid' ><Link  href='../LogIn'><Text $primary color={the === 'false' ? 'rgba(220,127,17, 1)' : '#8043fd'}>Log in</Text></Link></Button>
                    <Button theme={theme} $themeval={the} onClick={ClickReg} $primary $bradius='10px' width='20%' $background='rgb(220,127,17)'><Text $primary  color={the === 'false' ? 'rgba(220,127,17, 1)' : '#8043fd'}>Sign up</Text></Button>
                </Flex>
            </Authorization_content>
        </Flex>
    )
}

export default SignUp