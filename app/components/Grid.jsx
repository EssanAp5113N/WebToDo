import styled from "styled-components";

const StyledFGrid = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    justify-content: ${props => props.$justify || 'stretch'};
    grid-template-columns: repeat(auto-fill, 228px);
    grid-template-rows: repeat(auto-fill, 200px);
    gap: ${props => props.$gap || '0px'}
    
`

const Grid = (props) => {
    return <StyledFGrid {...props}/>
}

export default Grid
