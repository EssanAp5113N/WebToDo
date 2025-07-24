import styled from "styled-components";
import Flex from "./Flex";
import TLItem from "./TLItem";
import { useState, useEffect } from "react";

const TaskListItems = (props) => {
    const [tasks, setTasks] = useState([])
        useEffect(() => {
            setTasks(props.tasks)
        })
    
    return(
        <Flex direction='column' width='40%' height='100%' $gap='16px'>
            {tasks && tasks.map(el => 
                <TLItem theme={props.theme} $themeval={props.$themeval} key={el.id} list={props} taskId={el.id} text={el.text}/>
            )}
        </Flex>
    )
}

export default TaskListItems