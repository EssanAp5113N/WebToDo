import styled from "styled-components";
import Flex from "./Flex";
import Text from "./Text";
import Button from "./Button";
import Link from "next/link";
import Checkbox from "./Checkbox";
import { useState } from "react";

const TGItem = (props) => {
    const [checkState, setCheckState] = useState(false)
    
    const ChangeCheck = () => {
        setCheckState(checkState ? false : true)
    }


    const ClickLink = () => {
        localStorage.setItem('currentTaskList', JSON.stringify(props.el))
    }

    console.log(props.el.task.slice(0, 3))
    return(
        <Flex $alignI='center' direction='column' $justify='center' $bradius='12px' $shadow='-3px 5px 18px 26px rgba(186, 193, 198, 0.1)' $gap='13px' $minwidth='228px' $minheight='200px'>
            <Flex $gap='5px' direction='column' width='95%' height='20%' $alignI='center' $borderbottom='1px rgb(172,172,172) solid'>
                <Flex $justify='space-around'>
                    <Flex $alignI='center' width='75%' $gap='10px'>
                        <Checkbox onClick={ChangeCheck} $checked={checkState}></Checkbox>
                        <label onClick={ChangeCheck} htmlFor={`${props.el.id}`}><Text size='18px' color='black'>{props.el.title}</Text></label>
                    </Flex>
                    <Text size='16px' color='black'>...</Text>
                </Flex>
                <Flex width='90%' $justify='flex-end'>
                    <Text size='12px' color='black'>0/{props.el.task.length} Done</Text>
                </Flex>
            </Flex>    
            <Flex direction='column' width='60%' height='40%' $gap='10px'>
                {props.el.task && props.el.task.slice(0, 3).map(el => 
                    <p key={el.id}>{el.text}</p>
                )}
            </Flex>
            <Flex width='75%' $justify='flex-end'>
                <Button onClick={ClickLink} $primary $padding='5px' $bradius='4px' $border='1px rgb(220,127,17) solid' ><Link  href={`http://localhost:3000/groups/${props.TGname}/taskLists/${props.el.title}`}><Text $primary color='rgb(220,127,17)'>View All</Text></Link></Button>
            </Flex>
        </Flex>
    )
}

export default TGItem