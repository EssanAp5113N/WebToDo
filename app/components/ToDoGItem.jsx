import styled from "styled-components";
import Flex from "./Flex";
import Text from "./Text";
import Link from "next/link";
import { BiSolidCalendarHeart } from "react-icons/bi";



const ToDoGItem = (props) => {
    const ClickLink = () => {
        localStorage.setItem('currentCategory', JSON.stringify(props.el))
    }

    
    return (
        <Flex direction='column' $justify='center' $bradius='12px' $shadow='-3px 5px 18px 26px rgba(186, 193, 198, 0.1)' $gap='13px' $minwidth='228px' $minheight='200px'>
            <Flex direction='column' $justify='center' $alignI='center' height='50%' $gap='15px'>
                <Flex $padding='5px 0px 0px 0px' $bradius='30px' $justify='center' $alignI='center' height='50px' $background='rgba(220,127,17, 0.2)' width='50px'><Text color='rgba(220,127,17, 1)' size='26px'><BiSolidCalendarHeart/></Text></Flex>
                <Link onClick={ClickLink} href={`http://localhost:3000/groups/${props.el.name}`} ><Text color='black' size='21px'>{props.el.name}</Text></Link>
            </Flex>
            <Text $padding='0px 0px 0px 14px' size='12px'>1 / 12 Task Completed</Text>
        </Flex>
    )
}

export default ToDoGItem