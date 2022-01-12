import styled from "styled-components"

import { AiFillCloseCircle } from "react-icons/ai"

export const CardContainer = styled.section`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  background-color: #f5f5f5;
  color: #222;
  border-radius: 8px;
  position: relative;
  flex: 1;
  min-width: 300px;
  max-width: 500px;
  min-height: 200px;
  padding: '20px';
`

export const CloseIcon = styled(AiFillCloseCircle)`
  position: absolute;
  cursor: pointer;
  right: 10px;
  top: 10px;
`
