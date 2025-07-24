import styled from "styled-components";
import Flex from "./Flex";
import Text from "./Text";
import Button from "./Button";
import Link from "next/link";
import { useState } from "react";
import Checkbox from "./Checkbox";

const TLItem = (props) => {
    const [checkState, setCheckState] = useState(false)
    const [userToken, setUserToken] = useState(() => {
                const token = localStorage.getItem('userToken')
                const changeToken = token.replace(/"/g, '');
                return changeToken || undefined
            })

    const ChangeCheck = () => {
        setCheckState(checkState ? false : true)
    }
    console.log(props.list.tasks)

    const DeletTask = (e) => {
        fetch(`http://localhost:3001/tasks/${props.taskId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`,
            }
        })
        .then(response => response.json())
        .then(json => console.log(json)) 
    }

    return(
        <Flex $background='white' height='10%' $border='1px black solid' $bradius='4px' $justify='space-between' $alignI='center' $padding='15px'>
            <Flex $alignI='center' width='75%' $gap='10px'>
                <Checkbox theme={props.theme} $themeval={props.$themeval} onClick={ChangeCheck} $checked={checkState}></Checkbox> 
                <label onClick={ChangeCheck} htmlFor={props.taskId}><Text size='12px' color='black'>{props.text}</Text></label>
            </Flex>
            <Button value={JSON.stringify(props.taskId)} onClick={DeletTask}>X</Button>
        </Flex>
    )
}

export default TLItem