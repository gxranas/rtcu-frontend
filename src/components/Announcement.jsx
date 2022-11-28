import React, {useState} from 'react'
import styled from 'styled-components'
import { Close } from '@mui/icons-material'

const ModalContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    z-index: 999;
`

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    background: rgba(0,0,0,0.8);
`


const ModalContent = styled.div`
    width: ${props => props.contentWidth};
    height: ${props => props.contentHeight};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    background: #f1f1f1;
    padding: 14px 28px;
    border-radius: 8px;
`

const CloseModal = styled(Close)`
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 7px;
    cursor: pointer;
    color:#fff;
`

function Announcement() {


    const [modals, setModal] = useState(true)
    const toggleModal = () => {
        setModal(false);
    }

  return (
    <>
    { modals && 
    (
      <ModalContainer>
        <Overlay onClick={toggleModal}></Overlay>
        <CloseModal onClick={toggleModal}/>
        <ModalContent contentWidth="500px" contentHeight="500px">

        </ModalContent>
      </ModalContainer>
    )
    }
    </>
  )
}

export default Announcement
