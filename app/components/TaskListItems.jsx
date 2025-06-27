import styled from "styled-components";
import Flex from "./Flex";
import TLItem from "./TLItem";


const TaskListItems = (props) => {
    return(
        <Flex direction='column' width='40%' height='100%' $gap='16px'>
            {props.tasks && props.tasks.map(el => 
                <TLItem key={el.id} list={props} taskId={el.id} text={el.text}/>
            )}

            {/* <TLItem taskId='1' text='Buy Tomato'/>
            <TLItem taskId='2' text='Buy Car'/>
            <TLItem taskId='3' text='Buy Suop'/> */}
        </Flex>
    )
}

export default TaskListItems