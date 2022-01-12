import { useState, useEffect } from "react"
import * as S from "./styles"
import { Button, Card } from "components"

import { AiOutlineArrowRight } from "react-icons/ai"

const Home: React.FC = () => {

  interface ITask {
    id: number
    name: string
    description: string
  }

  const [datas, setDatas] = useState<ITask[]>([])
  const [task, setTask] = useState({name: '', description: ''})

  function createItem(nameTask: string, descriptionTask: string) {
    if(!nameTask || !descriptionTask) return

    setTask({name: '', description: ''})
    addTask(
     {
      id: Math.floor(Math.random() * 9999),
      name: nameTask,
      description: descriptionTask
    })
  }

  function addTask(newTask: ITask){
    setDatas([...datas, newTask])
    localStorage.setItem('data', JSON.stringify([...datas, newTask]))
  }

  function delTask(id: number){
    const arrString = localStorage.getItem('data')
    const arrLocal: ITask[] = arrString ? JSON.parse(arrString) : []

    const updateTasks = arrLocal.filter(task => task.id !== id)

    localStorage.setItem('data', JSON.stringify(updateTasks))
    setDatas(updateTasks)
  }

  useEffect(() => {
    const tasksLocal = localStorage.getItem('data')
    const tasks: ITask[] = tasksLocal ? JSON.parse(tasksLocal) : []
    setDatas(tasks)
  }, [])

  return (
    <S.Container>
      <S.ContainerButtons>
      <label htmlFor="name">Nome da tarefa</label>
      <S.Input
      value={task.name}
      type="text"
      id="name"
      onChange={e => setTask({...task, name: e.target.value})}/>

      <label htmlFor="name">Descrição tarefa</label>
      <S.Input
      value={task.description}
      type="text"
      id="name"
      onChange={e => setTask({...task, description: e.target.value})}/>

       <Button
        endIcon={<AiOutlineArrowRight />}
        color="primary"
        size="lg"
        onClick={() => createItem(task.name, task.description)}
        >
       Add
       </Button>


     </S.ContainerButtons>
      <S.Tasks
        >
       {datas?.map(({id, name, description}) => {
         return (
          <Card
          key={id}
          id={id}
          nameTask={name}
          descriptionTask={description}
          onDel={() => delTask(id)}
        />
         )
       })}
      </S.Tasks>
    </S.Container>
  )
}

export default Home
