import styled from "styled-components";


const StyledFlex = styled.div`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    align-items: ${props => props.$alignI || 'normal'};
    align-content: ${props => props.$alignC || 'normal'};
    justify-content: ${props => props.$justify || 'stretch'};
    margin: ${props => props.margin || '0'};
    padding: ${props => props.$padding || '0'};
    width: ${props => props.width || '100%'};
    height: ${props => props.height};
    gap: ${props => props.$gap || '0px'};
    border-radius: ${props => props.$bradius || '0px'};
    box-shadow: ${props => props.$shadow || 'none'};
    min-width: ${props => props.$minwidth || 'none'};
    min-height: ${props => props.$minheight || 'none'};
    border-bottom: ${props => props.$borderbottom || 'none'};
    border: ${props => props.$border};
    background: ${props => props.$background || 'none'};


`


const Flex = (props) => {
    return <StyledFlex {...props}/>

}

export default Flex