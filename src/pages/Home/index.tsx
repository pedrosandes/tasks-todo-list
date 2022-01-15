import { useState, useEffect, useCallback,  } from "react"
import * as S from "./styles"
import { Button, Modal } from "components"
import { ITask } from "./interfaces"
import { AiFillCloseCircle } from "react-icons/ai"

const Home: React.FC = () => {

  /***********
   *  States - Valores que mudam/atualizam
   */
  const [datas, setDatas] = useState<ITask[]>([])
  const [task, setTask] = useState({name: '', description: ''})
  const [isOpen, setIsOpen] = useState(false)
  const [modalData, setModalData] = useState({} as ITask)

  /***********
   *  Roda apenas 1 vez quando o componente é posto na tela
   *
   *  Verifica se tem dados salvo no localStorage, se tiver pega os dados de lá
   *  e seta na lista(Array) de tasks.
   */
  useEffect(() => {
    const saveLocalTasks = localStorage.getItem('data')
    const tasks: ITask[] = saveLocalTasks ? JSON.parse(saveLocalTasks) : []
    setDatas(tasks)
  }, [])

   /***********
   *  Função que cria a task
   *  - Verifica se os campso estão vazios, se estiver não deixa criar a task
   *  - Se os campos estiverem preenchidos, criar um objeto de dados com id,
   *  name e a descrição e adiciona a task na lista(Array).
   */
  function createTask(nameTask: string, descriptionTask: string) {
    if(!nameTask || !descriptionTask) return
    setTask({name: '', description: ''})

    const task = {
      id: Math.floor(Math.random() * 9999),
      name: nameTask,
      description: descriptionTask
    }
    addTask(task)
  }

  /***********
   *
   *  Função que adiciona a task na lista (tanto no state quanto no localStorage)
   *  - o setDatas ele previne(garante que o dado de fato é o anterior)
   *  os dados antigos e altera eles.
   */
  const addTask = useCallback((newTask: ITask) => {
    setDatas(prevDatas => [...prevDatas, newTask])
    localStorage.setItem('data', JSON.stringify([...datas, newTask]))
  },[datas])

  /***********
   *
   *  Função que deleta a task da lista (tanto no state, quanto no localStorage)
   *  - Primeiro verificamos se a saveLocalTasks(Lista de tasks) existe no localStorage
   *  Se tiver seta a lista como saveLocalTasks se não, seta uma array vazia.
   *  - Criamos um filtro para capturar todas as tasks que tenham o id diferente
   *  do selecionado no caso, excluindo aquele selecionado.
   */
  const delTask = useCallback((id: number) => {
    const saveLocalTasks = localStorage.getItem('data')
    const arrLocal: ITask[] = saveLocalTasks ? JSON.parse(saveLocalTasks) : []

    const updateTasks = arrLocal.filter(task => task.id !== id)

    localStorage.setItem('data', JSON.stringify(updateTasks))
    setDatas(updateTasks)
  },[])

  /***********
   *  Função que abre o modal, setando assim os dados em um state que é passado
   *  para o modal.
   */
  function handleOpenModal(name: string, description: string):void {
    setModalData(oldData => ({...oldData, name, description}))
    setIsOpen(true)
  }

  return (
    <S.Container>
      <S.ContainerButtons>

        <label htmlFor="name">Nome da tarefa</label>
        <S.Input
          value={task.name}
          type="text"
          id="name"
          onChange={e => setTask({...task, name: e.target.value})}
        />

        <label htmlFor="description">Descrição tarefa</label>
        <S.Input
          value={task.description}
          type="text"
          id="description"
          onChange={e => setTask({...task, description: e.target.value})}
        />

        <Button
          color="primary"
          size="lg"
          fontSize="1.8rem"
          onClick={() => createTask(task.name, task.description)}
        >
        Create Task
        </Button>

     </S.ContainerButtons>

      <S.Tasks>
       {datas?.map(({id, name, description}) =>{
         return (
           <S.Task key={id}>
            <S.Name
              onClick={() => handleOpenModal(name, description)}
            >
             {name}
            </S.Name>

            <S.Close
              onClick={() => delTask(id)}
            >
              <AiFillCloseCircle color="#F5F5F5"/>
            </S.Close>
           </S.Task>
         )
       })}
      </S.Tasks>

      <Modal
        title={modalData.name}
        description={modalData.description}
        onToggle={() => setIsOpen(false)}
        isOpen={isOpen}
      />
    </S.Container>
  )
}

export default Home
