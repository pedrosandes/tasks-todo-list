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
  height: 100%;
 `

export const ContainerButtons = styled.section`
  display: flex;
  gap: 14px;
  flex-direction: column;
  margin-bottom: 20px;
  max-width: 500px;
  width: 100%;
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
 flex-direction: column;
 gap: 20px;
 max-width: 500px;
 width: 100%;
`

export const Task = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  color: ${({theme}) => theme.colors.black};
  cursor: pointer;
`
export const Name = styled.div`
  width: 100%;
  padding: 10px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background-color: ${({theme}) => theme.colors.white};
`

export const Close = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({theme}) => theme.colors.blue};
  padding: 10px;
  height: 39.4px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`

