import styled, {css} from "styled-components";

const StyledText = styled.p`
    color: ${props => props.color || 'rgb(172,172,172)'};
    padding: ${props => props.$padding || '0'};
    margin: ${props => props.margin || '0'};
    font-size: ${props => props.size || '14px'};
    cursor: pointer;
    

${props => props.$primary && css`
    color: ${props => props.color || 'rgb(219, 129, 20)'};
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    display: flex;

    &:hover {
        color: white;
    }
    `

}

`

const Text = (props) => {
    return <StyledText {...props}/>
}

export default Text