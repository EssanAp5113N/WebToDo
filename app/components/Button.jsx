import styled, { css } from "styled-components";


const StyledButton = styled.button`
    background: ${props => props.$background || 'none'};
    border: ${props => props.$border || 'none'};
    cursor: pointer;
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: ${props => props.$bradius || '0px'};
    padding: ${props => props.$padding || '0'};


${props => props.$secondary && css`
    color: 'rgb(219, 129, 20)';
    background: none;
    border: 1px rgb(220,127,17) solid;

    &:hover {
        background: rgb(219, 129, 20);
        color: white;
    }
    `
}

${props => props.$primary && css`
    background: none;
    border: ${props => props.$themeval === 'false' ? `1px rgb(219, 129, 20) solid` : `1px ${props.theme.secondary.color2} solid`};


    &:hover {
        background: ${props => props.$themeval === 'false' ? `rgb(219, 129, 20)` : props.theme.secondary.color2};
        color: white;
    }
    `

}
`



const Button = ({...props}) => {
    return <StyledButton onClick={() => props.$setMState(true)} {...props}/> 
}


export default Button