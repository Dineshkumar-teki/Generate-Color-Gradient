// Write your code here
import {TabItemBtn} from './styledComponents'

const GradientDirectionItem = props => {
  const {eachTabItem, activeTabItem, switchTabItem} = props
  const {directionId, value, displayText} = eachTabItem

  const changeTab = () => {
    switchTabItem(directionId, value)
  }

  return (
    <li>
      <TabItemBtn activeTabItem={activeTabItem} onClick={changeTab}>
        {displayText}
      </TabItemBtn>
    </li>
  )
}

export default GradientDirectionItem
