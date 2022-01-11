import styled, { keyframes } from "styled-components";

export const Title = styled.h1`
  color: ${({theme}) => theme.colors.black};
` 

const rotate = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`

export const Container = styled.main`
  height: 100vh;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    max-width: 500px;
    animation: 20s infinite ${rotate} linear;
  }

  p {
    max-width: 500px;
    text-align: center;

    a {
      font-weight: 500;;
    }
  }
 `

export const ContainerButtons = styled.section`
  display: flex;
  gap: 20px;
`

