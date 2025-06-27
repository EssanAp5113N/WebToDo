import styled from "styled-components";
import Flex from "./Flex";
import Link from "next/link";
import Text from "./Text";
import { BiFolderPlus } from "react-icons/bi";
import {useState, createContext } from "react";

const StyledAddB = styled.div`
    cursor: pointer
`

const AddBlock = ({...props}) => {    
    return(
        <StyledAddB onClick={() => props.$setMState(true)}>
            <Flex $background='rgba(220,127,17, 1)' direction='column' $justify='center' $bradius='12px' $shadow='-3px 5px 18px 26px rgba(186, 193, 198, 0.1)' $gap='13px' $minwidth='228px' $minheight='200px'>
                <Flex direction='column' $justify='center' $alignI='center' height='50%' $gap='30px'>
                    <Flex $padding='5px 0px 0px 0px' $bradius='30px' $justify='center' $alignI='center' height='50px' $background='white' width='50px'><Text color='rgba(220,127,17, 1)' size='26px'><BiFolderPlus/></Text></Flex>
                    <Text color='white' size='21px'>Add New</Text>
                </Flex>
            </Flex>
        </StyledAddB>
    )
}

export default AddBlock