import styled from "styled-components";

const StyledModal = styled.div`
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${props => props.$MState ? '1' : '0'};
    pointer-events: ${props => props.$MState ? 'all' : 'none'};
`

const Modal_content = styled.div`
    border-radius: 12px;
    background-color: whitesmoke;
    height: 450px;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`



const Modal = ({...props}) => {

    return(
        <StyledModal {...props} onClick={() => props.$setMState(false)}>
            <Modal_content onClick={e => e.stopPropagation()}>
                {props.children}
            </Modal_content>
        </StyledModal>
    )
}

export default Modal