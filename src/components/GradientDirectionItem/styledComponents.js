// Style your elements here
import styled from 'styled-components'

export const TabItemBtn = styled.button`
  background-color: #ededed;
  padding: 10px 0;
  width: 100px;
  border: 0 solid;
  outline: none;
  border-radius: 8px;
  color: #334155;
  font-weight: 600;
  opacity: ${props => (props.activeTabItem ? 1 : 0.5)};
`
