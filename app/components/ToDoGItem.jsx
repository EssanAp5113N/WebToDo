import styled from "styled-components";
import Flex from "./Flex";
import Text from "./Text";
import Link from "next/link";
import { BiSolidCalendarHeart } from "react-icons/bi";
import { useEffect, useState } from "react"


const ToDoGItem = (props) => {
    const [userToken, setUserToken] = useState(() => {
        const token = localStorage.getItem('userToken')
        const changeToken = token.replace(/"/g, '');
        return changeToken || undefined
    })

    const [categoryStats, setCategoryStats] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3001/categories/${props.el.id}/stats`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`,
            },
        })
        .then(response => response.json())
        .then(json => setCategoryStats(json))
    }, [])
    
    const ClickLink = () => {
        localStorage.setItem('currentCategory', JSON.stringify(props.el))
    }

    
    return (
        <Flex direction='column' $justify='center' $background='white' $bradius='12px' $shadow='-3px 5px 18px 26px rgba(186, 193, 198, 0.1)' $gap='13px' $minwidth='228px' $minheight='200px'>
            <Flex direction='column' $justify='center' $alignI='center' height='50%' $gap='15px'>
                <Flex $padding='5px 0px 0px 0px' $bradius='30px' $justify='center' $alignI='center' height='50px' $background={props.$themeval === 'false' ? 'rgba(220,127,17, 0.2)' : 'rgba(129, 67, 253, 0.2)'} width='50px'><Text color={props.$themeval === 'false' ? 'rgba(220,127,17, 1)' : '#8043fd'} size='26px'><BiSolidCalendarHeart/></Text></Flex>
                <Link onClick={ClickLink} href={`http://localhost:3000/groups/${props.el.name}`} ><Text color='black' size='21px'>{props.el.name}</Text></Link>
            </Flex>
            <Text $padding='0px 0px 0px 14px' size='12px'>{categoryStats.done_lists} / {categoryStats.total_lists} Task Completed</Text>
        </Flex>
    )
}

export default ToDoGItem