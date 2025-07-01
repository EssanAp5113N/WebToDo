'use client'

import styled from "styled-components"
import React, { useEffect } from "react"
import Link from "next/link"
import Text from "@/app/components/Text"
import Img from "@/app/components/Img"
import Flex from "@/app/components/Flex"
import Button from "@/app/components/Button"
import Title from "@/app/components/Title"
import TaskGroups from "@/app/components/TaskGroups"
import Modal from "@/app/components/Modal"
import { useState } from "react"
import TextData from "../../../app/datatest.json"


const StaledGroup = styled.div`
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
    const [taskListName, setTaskListName] = useState('')
    const [taskListCI, setTaskListCI] = useState(TextData.tasklists)
    const [currentCategory, setCurrentCategory] = useState(() => {
        const el = JSON.parse(localStorage.getItem('currentCategory'))
        return el || []
    })
    const [currentTaskList, setCurrentTaskList] = useState([])

    useEffect(() => {
        let list = []
        taskListCI.forEach(function(item, i, arr){
                if (item.category_id === currentCategory.id){
                    list.push(item)
                }
            })
        setCurrentTaskList(list)
    }, [])
    
    
    
    const ClickAddModal = () => {
        currentTaskList.push({id: currentTaskList.length + 1, title: taskListName, category_id: currentCategory.id, total_tasks: 1, done_tasks: 1})      
        setModalActive(false)
        setTaskListName('')
        setTaskListCI('')
    } 
    
    const ClickBack = () => {
        setCurrentCategory([])
        localStorage.removeItem('currentCategory')
    }


    const resolvedParams = React.use(params)
    const t = resolvedParams.name
    const title = t.replaceAll(/%20/g, " ");

    return(
        <StaledGroup>
            <Link href='http://localhost:3000' onClick={ClickBack}>
                <Flex $alignI='center' $gap='8px'>
                    <Text size='17px' color='rgb(220,127,17)'>Go Back</Text> 
                </Flex>
            </Link>
            <Flex $justify='space-between' height='10%'>
                <Title size='50px'>{title}</Title>
                <Button $primary $MState={modalActive} $setMState={setModalActive} $bradius='10px' width='13%' $background='rgb(220,127,17)'><Text $primary size='16px' color='white'>Creat List</Text></Button>
            </Flex>
            <Flex height='12%' width='20%' $justify='space-between' $gap='15px'>
                <Button $bradius='10px' width='45%'  $background='rgba(220,127,17, 0.2)' ><Text color='rgb(219, 129, 20)'>All</Text></Button>
                <Button $bradius='10px' width='45%'><Text>Completed</Text></Button>
            </Flex>
            <TaskGroups $taskList={currentTaskList} title={title}/>
            <Modal $MState={modalActive} $setMState={setModalActive}>
                <Flex direction='column' height='20%' $justify='space-between' width='90%'>
                    <input type="text" placeholder="Введите название листа задач" onChange={(e) => setTaskListName(e.target.value)} value={taskListName} />
                    <input type="text" placeholder="Выберите релевантность" onChange={(e) => setTaskListCI(e.target.value)} value={''} />
                </Flex>
                <Flex height='10%' width='90%' $justify='flex-end'>
                    <Button onClick={ClickAddModal} $primary $bradius='10px' width='25%' $background='rgb(220,127,17)'><Text $primary size='16px' color='white'>Добавить</Text></Button>
                </Flex>
            </Modal>
        </StaledGroup>
    )
}

export default Page