// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(to ${props => props.direction}, 
  ${props => props.firstColor}, 
  ${props => props.secondColor});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`
export const MainHeading = styled.h1`
  color: white;
  font-weight: 600;
`
export const SubHeading = styled.p`
  color: white;
`
export const TabItemsContainer = styled.ul`
  display: flex;
  gap: 1rem;
  list-style-type: none;
`
export const ColorInputsContainer = styled.div`
  display: flex;
  gap: 2.5rem;
`

export const FirstColorInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const InputEle = styled.input`
  border: 1px solid silver;
  outline: none;
  width: 100%;
`
export const GenerateBtn = styled.button`
  background-color: #00c9b7;
  color: white;
  width: 120px;
  padding: 10px;
  border: 0 solid;
  outline: none;
  border-radius: 10px;
`
