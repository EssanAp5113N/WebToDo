import styled from "styled-components";
import Flex from "./Flex";
import Grid from "./Grid";
import TGItem from "./TGItem";
import { useEffect, useState } from "react";


const TaskGroups = (props) => {
    const [taskList, setTaskList] = useState([])
    useEffect(() => {
        setTaskList(props.$taskList)
        console.log('taskGroups')
    })

    return(
        <Grid $gap='10px' $justify='space-between'>
            {taskList && taskList.map(el  =>
                <TGItem  key={el.id} TGname={props.title} el={el}/>
            )}
        </Grid>
    )
}

export default TaskGroups