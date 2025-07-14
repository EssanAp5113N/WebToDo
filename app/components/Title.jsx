import styled from "styled-components";

const StyledTitle = styled.h1`
    color: ${props => props.$themeval === 'false' ? props.theme.primary : props.theme.secondary.color2};
    font-size: ${props => props.size || '32px'};
`


const Title = (props) => {
    return <StyledTitle {...props}/>
}

export default Title