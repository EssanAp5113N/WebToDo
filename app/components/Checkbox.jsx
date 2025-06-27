import styled from "styled-components";

const StaledCheckbox = styled.input.attrs({ type: 'checkbox' })`
    appearance: none;
    width: 15px;
    height: 15px;
    background-color: none;
    border: 2px rgb(220,127,17) solid;
    border-radius: 3px;
    background: ${props => props.$checked ? 'rgb(220,127,17)' : 'none'};
`

const Checkbox = (props) => {
    return (
        <StaledCheckbox {...props}/>
    )
}

export default Checkbox