import styled from "styled-components";
import Flex from "./Flex";
import Grid from "./Grid";
import TGItem from "./TGItem";
import { useEffect, useState } from "react";


const TaskGroups = (props) => {
    const [taskList, setTaskList] = useState(props.$taskList)

    return(
        <Grid $gap='10px' $justify='space-between'>
            {taskList && taskList.map(el  =>
                <TGItem  key={el.id} TGname={props.title} el={el}/>
                
            )}
            {/* <TGItem checkId='1' TGname={props.title} title='Shopping List'/>
            <TGItem checkId='2' TGname={props.title} title='Food'/> */}
        </Grid>
    )
}

export default TaskGroups