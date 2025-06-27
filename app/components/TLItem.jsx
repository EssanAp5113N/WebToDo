import styled from "styled-components";
import Flex from "./Flex";
import Text from "./Text";
import Button from "./Button";
import Link from "next/link";
import { useState } from "react";
import Checkbox from "./Checkbox";

const TLItem = (props) => {
    const [checkState, setCheckState] = useState(false)

    const ChangeCheck = () => {
        setCheckState(checkState ? false : true)
    }

    console.log(props)

    const DeletTask = (e) => {
        currentTaskId = JSON.parse(e.target.value.taskId)
        currentTasks.slice(currentTaskId - 1, 1)
    }

    return(
        <Flex height='10%' $border='1px black solid' $bradius='4px' $justify='space-between' $alignI='center' $padding='15px'>
            <Flex $alignI='center' width='75%' $gap='10px'>
                <Checkbox onClick={ChangeCheck} $checked={checkState}></Checkbox> 
                <label onClick={ChangeCheck} htmlFor={props.taskId}><Text size='12px' color='black'>{props.text}</Text></label>
            </Flex>
            <Button value={JSON.stringify(props.taskId)} onClick={DeletTask}>X</Button>
        </Flex>
    )
}

export default TLItem