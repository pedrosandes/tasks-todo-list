import * as S from "./styles"
import { Button } from "components"


interface ModalProps {
  title?: string
  description?: string
  onToggle: () => void
  isOpen: boolean
}

const Modal: React.FC<ModalProps> = ({title, description, onToggle, isOpen}) => {

  /***********
   * Se o isOpen for false ele retorna null(não renderiza nada)
   * Se o isOpen for true ele renderiza o componente com os dados passados
   * por props.
   */
  if(!isOpen) return null

  return (
    <S.Container>
      <S.Content>
        <h1>{title}</h1>
        <p>
          {description}
        </p>
        <div>
          <Button onClick={onToggle} color="primary">Fechar</Button>
        </div>
      </S.Content>
    </S.Container>

  )
}

export default Modal

