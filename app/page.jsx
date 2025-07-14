'use client'

import { BiMoon } from "react-icons/bi";
import { BiSolidMoon } from "react-icons/bi";
import { useContext, useEffect, useState } from "react"
import styled, {ThemeProvider} from "styled-components";
import ToDoGroups from "./components/ToDoGroups";
import Text from "./components/Text";
import Flex from "./components/Flex";
import Title from "./components/Title";
import Button from "./components/Button";
import Modal from "./components/Modal";
import TextData from "../app/datatest.json"
import Link from "next/link";



const HomeBlock = styled.div`
    display: flex;
    padding: 40px;
    margin: 0;
    gap: 30px;
    width: 94%;
    flex-direction: column;
    height: 90%;
    
`

const theme = {
    primary: 'black',
    secondary: {
      backcolor: 'black',
      color1: 'white',
      color2: '#8043fd',
      color3: 'rgb(172,172,172)'
    },
}

const Home = () => {
  const [time, setTime] = useState()
  const [modalActive, setModalActive] = useState(false)
  const [inputName, setInputName] = useState('')
  const [inputIconId, setInputIconId] = useState('')
  const [listCategories, setListCategories] = useState(() => {
    const defaultTDCategories = TextData.categories
    const changeTDCategories = JSON.parse(localStorage.getItem('TDCategories'))
    return changeTDCategories || defaultTDCategories
  })
  const [the, setThe] = useState(() => {
    const hh = localStorage.getItem('mode')
    return hh || 'false'
  })

  

  const ClickAddModal = () => {
    setModalActive(false)
    listCategories.push({id: listCategories.length + 1, name: inputName, icon_id: inputIconId})
    localStorage.setItem('TDCategories', JSON.stringify(listCategories))
    setInputIconId('')
    setInputName('')
  }

  const ChangeTheme = () => {
    setThe((cur) => {
      const newTheme = cur === 'false' ? 'true' : 'false';
      localStorage.setItem('mode', newTheme)
      return newTheme
    })

    const body = document.body;
    const newColor = the === 'true' ? 'white' : 'black';
    body.style.setProperty('--body-background-color', newColor);
  }

  useEffect(() => {
    let now = new Date()
    setTime(now.toLocaleDateString('en-US', { month: "long", day: 'numeric', year: 'numeric'}))
    const body = document.body;
    const newColor = localStorage.getItem('mode') === 'true' ? 'black' : 'white';
    body.style.setProperty('--body-background-color', newColor);
  }, []) 


  return(
    <ThemeProvider theme={theme}>
      <HomeBlock>
          <Flex $justify='space-between' height='10%'>
              <Title theme={theme} $themeval={the} size='50px'>Todo List</Title>
              <Flex $justify='space-between' width='10%'>
                <Button theme={theme} $themeval={the} $primary $padding='5px' width='60%' $bradius='4px' $border='1px rgb(220,127,17) solid' ><Link  href='LogIn'><Text $primary  color={the === 'false' ? 'rgba(220,127,17, 1)' : '#8043fd'}>Log In</Text></Link></Button>
                <Button onClick={ChangeTheme}>
                  {the === 'true' ? (
                    <Text color='#8043fd' size='26px'><BiSolidMoon></BiSolidMoon></Text>
                  ) : (
                    <Text color='rgba(220,127,17, 1)' size='26px'><BiMoon></BiMoon></Text>
                  )}
                  </Button>
              </Flex>
          </Flex>
        <Text theme={theme} $themeval={the} size='16px'>{time}</Text>
        <ToDoGroups theme={theme} $themeval={the} $listCategories={listCategories} $MState={modalActive} $setMState={setModalActive}/>
      </HomeBlock>
      <Modal $MState={modalActive} $setMState={setModalActive}>
        <Text size='24px' color='black'>Добавить категорию</Text>
        <Flex direction='column' height='20%' $justify='space-between' width='90%'>
          <input type="text"  placeholder="Введите название категории" onChange={(e) => setInputName(e.target.value)} value={inputName} />
          <input type="text"  placeholder="Выберите иконку" onChange={(e) => setInputIconId(e.target.value)} value={inputIconId} />
        </Flex>
        <Flex height='10%' width='90%' $justify='flex-end'>
          <Button theme={theme} $themeval={the} onClick={ClickAddModal} $primary $bradius='10px' width='25%' $background='rgb(220,127,17)'><Text $primary size='16px' color={the === 'false' ? 'rgba(220,127,17, 1)' : '#8043fd'}>Добавить</Text></Button>
        </Flex>
      </Modal>
    </ThemeProvider>
  )
}

export default Home