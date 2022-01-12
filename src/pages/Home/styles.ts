import styled from "styled-components";

export const Title = styled.h1`
  color: ${({theme}) => theme.colors.black};
`

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  padding: 15px;
 `

export const ContainerButtons = styled.section`
  display: flex;
  gap: 14px;
  flex-direction: column;
  margin-bottom: 20px;
  width: 480px;

  @media screen and (max-width: 720px) {
    width: 100%;
    max-width: 500px;
  }
`

export const Input = styled.input`
  outline: none;
  padding-left: 10px;
  height: 40px;
  border-radius: 8px;
  border: none;
`

export const Tasks = styled.section`
 display: flex;
 gap: 20px;
 flex-wrap: wrap ;
 align-self: flex-start;

 @media screen and (max-width: 720px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`

