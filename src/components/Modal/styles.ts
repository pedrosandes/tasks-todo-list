import styled from "styled-components"

export const Container = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.section`
  background-color: #f5f5f5;
  color: #000;
  padding: 30px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 500px;
  width: 100%;

  p {

    max-height: 400px;
    overflow-y: auto;

    ::-webkit-scrollbar {
    width: 5px;
    }

    ::-webkit-scrollbar-track {
      color: ${({theme}) => theme.colors.black};
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({theme}) => theme.colors.blue};
      border-radius: 20px;
    }
  }
`
