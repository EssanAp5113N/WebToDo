'use client'

import styled from "styled-components"
import React from "react"
import Link from "next/link"
import Flex from "@/app/components/Flex"
import Text from "@/app/components/Text"
import Title from "@/app/components/Title"
import Button from "@/app/components/Button"
import TaskListItems from "@/app/components/TaskListItems"
import { useState } from "react"
import Modal from "@/app/components/Modal"

const StaledTask = styled.div`
    display: flex;
    padding: 35px;
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



const Page = ({params}) => {
    const [modalActive, setModalActive] = useState(false)
    const [taskName, setTaskName] = useState('')
    const [currentTasks, setCurrentTasks] = useState(() => {
            const el = JSON.parse(localStorage.getItem('currentTaskList'))
            return el.task || []
        })
    const [the, setThe] = useState(() => {
    const hh = localStorage.getItem('mode')
    return hh || 'false'
  })
        
    
    const ClickAddModal = () => {
        currentTasks.push({id: currentTasks.length + 1, text: taskName, done: false})
        localStorage.setItem('currentTaskList', JSON.stringify(currentTasks))
        setTaskName('')
        setModalActive(false)
    }

    const ClickBack = () => {
        setCurrentCategory([])
        localStorage.removeItem('currentCategory')
    }


    const resolvedParams = React.use(params)
    const t = resolvedParams.task
    const n = resolvedParams.name
    const task = t.replaceAll(/%20/g, " ");
    const name = n.replaceAll(/%20/g, " ");
    return(
        <StaledTask>
            <Link href={`http://localhost:3000/groups/${name}`} onClick={ClickBack}>
                <Flex $alignI='center' $gap='8px'>
                    <Text size='17px' color={the === 'false' ? 'rgba(220,127,17, 1)' : '#8043fd'}>Go Back</Text> 
                </Flex>
            </Link>
            <Flex $justify='space-between' height='10%'>
                <Title theme={theme} $themeval={the} size='50px'>{task}</Title>
                <Flex height='100%' width='20%' $justify='space-between' $gap='15px'>
                    <Button theme={theme} $themeval={the} $primary width='45%'  $bradius='10px' $border='1px rgb(220,127,17) solid' ><Text $primary color={the === 'false' ? 'rgba(220,127,17, 1)' : '#8043fd'}>Edit List</Text></Button>
                    <Button theme={theme} $themeval={the} $primary $MState={modalActive} $setMState={setModalActive} $bradius='10px' width='45%' $background='rgb(220,127,17)'><Text $primary color={the === 'false' ? 'rgba(220,127,17, 1)' : '#8043fd'}>Add List</Text></Button>
                </Flex>
            </Flex>
            <Flex $gap='10px'>
                <Text size='16px'>{name}</Text>
                <Text size='16px'>{`>`}</Text>
                <Text color={the === 'false' ? 'rgba(220,127,17, 1)' : '#8043fd'} size='16px'>{task}</Text>
            </Flex>
            <TaskListItems theme={theme} $themeval={the} tasks={currentTasks} />
            <Modal $MState={modalActive} $setMState={setModalActive}>
                <Flex direction='column' height='20%' $justify='space-between' width='90%'>
                    <input type="text" placeholder="Введите задачу" onChange={(e) => setTaskName(e.target.value)} value={taskName} />
                </Flex>
                <Flex height='10%' width='90%' $justify='flex-end'>
                    <Button theme={theme} $themeval={the} onClick={ClickAddModal} $primary $bradius='10px' width='25%' $background='rgb(220,127,17)'><Text $primary size='16px' color='white'>Добавить</Text></Button>
                </Flex>
            </Modal>
        </StaledTask>
    )
}

export default Page