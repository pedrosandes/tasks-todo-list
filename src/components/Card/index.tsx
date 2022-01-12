import * as S from "./styles"

interface IItem {
  id: number
  nameTask: string
  descriptionTask: string
  onDel: (id: number) => void
}

const Card: React.FC<IItem> = ({id, nameTask, descriptionTask, onDel}) => {
  return (
    <S.CardContainer>
      <div>
        <p>{nameTask}</p>
        <S.CloseIcon
          onClick={() => onDel(id)}
          size="20px"
        />
      </div>
      <p>{descriptionTask}</p>
    </S.CardContainer>
  )
}

export default Card
