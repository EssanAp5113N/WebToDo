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



const Page = ({params}) => {
    const [modalActive, setModalActive] = useState(false)
    const [taskName, setTaskName] = useState('')
    const [currentTasks, setCurrentTasks] = useState(() => {
            const el = JSON.parse(localStorage.getItem('currentTaskList'))
            return el.task || []
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
                    <Text size='17px' color='rgb(220,127,17)'>Go Back</Text> 
                </Flex>
            </Link>
            <Flex $justify='space-between' height='10%'>
                <Title size='50px'>{task}</Title>
                <Flex height='100%' width='20%' $justify='space-between' $gap='15px'>
                    <Button $primary width='45%'  $bradius='10px' $border='1px rgb(220,127,17) solid' ><Text $primary color='rgb(219, 129, 20)'>Edit List</Text></Button>
                    <Button $primary $MState={modalActive} $setMState={setModalActive} $bradius='10px' width='45%' $background='rgb(220,127,17)'><Text $primary color='rgb(219, 129, 20)'>Add List</Text></Button>
                </Flex>
            </Flex>
            <Flex $gap='10px'>
                <Text size='16px'>{name}</Text>
                <Text size='16px'>{`>`}</Text>
                <Text color='rgb(220,127,17)' size='16px'>{task}</Text>
            </Flex>
            <TaskListItems tasks={currentTasks} />
            <Modal $MState={modalActive} $setMState={setModalActive}>
                <Flex direction='column' height='20%' $justify='space-between' width='90%'>
                    <input type="text" placeholder="Введите задачу" onChange={(e) => setTaskName(e.target.value)} value={taskName} />
                </Flex>
                <Flex height='10%' width='90%' $justify='flex-end'>
                    <Button onClick={ClickAddModal} $primary $bradius='10px' width='25%' $background='rgb(220,127,17)'><Text $primary size='16px' color='white'>Добавить</Text></Button>
                </Flex>
            </Modal>
        </StaledTask>
    )
}

export default Page