import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  MainContainer,
  MainHeading,
  SubHeading,
  TabItemsContainer,
  FirstColorInput,
  ColorInputsContainer,
  InputEle,
  GenerateBtn,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    activeTabItemId: gradientDirectionsList[0].directionId,
    direction: gradientDirectionsList[0].value,
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    generateBgCond: false,
  }

  switchTabItem = (id, value) => {
    this.setState({activeTabItemId: id, direction: value})
  }

  getFirstColor = event => {
    this.setState({firstColor: event.target.value})
  }

  getSecondColor = event => {
    this.setState({secondColor: event.target.value})
  }

  generateBg = () => {
    this.setState({generateBgCond: true})
  }

  render() {
    const {
      activeTabItemId,
      firstColor,
      secondColor,
      generateBgCond,
      direction,
    } = this.state
    console.log(direction, firstColor, secondColor)
    return (
      <MainContainer
        firstColor={firstColor}
        secondColor={secondColor}
        direction={direction}
        data-testid="gradientGenerator"
      >
        <MainHeading>Generate a CSS Color Gradient</MainHeading>
        <SubHeading>Choose Direction</SubHeading>
        <TabItemsContainer>
          {gradientDirectionsList.map(eachTabItem => (
            <GradientDirectionItem
              eachTabItem={eachTabItem}
              key={eachTabItem.directionId}
              activeTabItem={eachTabItem.directionId === activeTabItemId}
              switchTabItem={this.switchTabItem}
            />
          ))}
        </TabItemsContainer>
        <SubHeading>Pick the Colors</SubHeading>
        <ColorInputsContainer>
          <FirstColorInput>
            <SubHeading>{firstColor}</SubHeading>
            <InputEle
              type="color"
              value={firstColor}
              onChange={this.getFirstColor}
            />
          </FirstColorInput>
          <FirstColorInput>
            <SubHeading>{secondColor}</SubHeading>
            <InputEle
              type="color"
              value={secondColor}
              onChange={this.getSecondColor}
            />
          </FirstColorInput>
        </ColorInputsContainer>
        <GenerateBtn onClick={this.generateBg}>Generate</GenerateBtn>
      </MainContainer>
    )
  }
}

export default GradientGenerator
