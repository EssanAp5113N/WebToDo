import styled from "styled-components";

const StyledTitle = styled.h1`
    color: black;
    font-size: ${props => props.size || '32px'};
`

const Title = (props) => {
    return <StyledTitle {...props}/>
}

export default Title