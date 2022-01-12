import { Button } from "components"

interface ModalProps {
  title?: string
  description?: string
  onToggle: () => void
}

const Modal: React.FC<ModalProps> = ({title, description, onToggle}) => {
  return (
   <div style={
      {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: '#000',
        opacity: 0.8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
        }}>
      <div style={
        {
          backgroundColor: "#f5f5f5",
          color: '#000',
          padding: '30px',
          borderRadius: '15px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }
      }>
        <h1>{title}</h1>
        <p style={
          {
            textAlign: 'left',
            maxWidth: '500px'
          }
        }>
          {description}
        </p>
        <div>
          <Button onClick={onToggle} color="primary">Fechar</Button>
        </div>
      </div>
    </div>
  )
}

export default Modal

