import styled from "styled-components";

const StaledCheckbox = styled.input.attrs({ type: 'checkbox' })`
    appearance: none;
    width: 15px;
    height: 15px;
    background-color: none;
    border: ${props => props.$themeval === 'false' ? `2px rgba(220,127,17, 1) solid` : `2px #8043fd solid`};
    border-radius: 3px;
    background: ${props => props.$checked ? props.$themeval === 'false' ? 'rgba(220,127,17, 1)' : '#8043fd' : 'none'};
`

const Checkbox = (props) => {
    return (
        <StaledCheckbox {...props}/>
    )
}

export default Checkbox