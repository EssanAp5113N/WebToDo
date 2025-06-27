import styled from "styled-components";
import Grid from "./Grid";
import ToDoGItem from "./ToDoGItem";
import AddBlock from "./AddBlock";

const ToDoGroups = ({...props}) => {
    return(
        <Grid $gap='30px' $justify='space-between'>
            {props.$listCategories && props.$listCategories.map(el  =>
                <ToDoGItem key={el.id} el={el} />
            )}
            {/* <ToDoGItem title='Health'/>
            <ToDoGItem title='Education'/>
            <ToDoGItem title='Food'/>
            <ToDoGItem title='Lifetyle'/>
            <ToDoGItem title='Group Work'/> */}
            <AddBlock $MState={props.$MState} $setMState={props.$setMState}></AddBlock>
        </Grid>
    )
}

export default ToDoGroups