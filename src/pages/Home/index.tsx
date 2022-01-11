import * as S from "./styles"
import { Button } from "components"

import logo from "assets/svg/logo.svg"

import { AiOutlineArrowRight } from "react-icons/ai"

const Home: React.FC = () => {

  function openLink (url: string):void  {
    window.open(url, "_blank")
  }

  return (
    <S.Container>
      <img src={logo} alt="React logo" />
      <p>
        Este é um template criado com o CRA.
        Ele trás algumas configurações padrões e organização de 
        folders prontas para serem seguidas.
      </p>

      <p>Comece a editar a página home em <code>src/pages/Home/index.tsx</code></p>

      <S.ContainerButtons>
       <Button
        endIcon={<AiOutlineArrowRight />}
        color="primary"
        size="lg"
        onClick={() => openLink("https://create-react-app.dev/")}
        >
        CRA Documentation
       </Button>

       <Button
        endIcon={<AiOutlineArrowRight />}
        color="primary"
        size="lg"
        onClick={() => openLink("https://pt-br.reactjs.org/")}
        >
        REACT Documentation
       </Button>

     </S.ContainerButtons>
    </S.Container>
  )
}

export default Home