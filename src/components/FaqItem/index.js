import {Component} from 'react'
import './index.css'

const plusIconImgUrl =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusIconImgUrl =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isAnsActive: false}

  toggleActiveButton = () => {
    this.setState(prevState => ({isAnsActive: !prevState.isAnsActive}))
  }

  renderActiveButtonImage = () => {
    const {isAnsActive} = this.state
    const altText = isAnsActive ? 'minus' : 'plus'
    const iconUrl = isAnsActive ? minusIconImgUrl : plusIconImgUrl

    return (
      <button type="button" className="btn" onClick={this.toggleActiveButton}>
        <img src={iconUrl} className="icon" alt={altText} />
      </button>
    )
  }

  renderAnswer = () => {
    const {isAnsActive} = this.state
    const {faqDetails} = this.props
    const {answerText} = faqDetails

    if (isAnsActive) {
      return (
        <div>
          <hr className="separator" />
          <p className="answer-text">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails

    return (
      <li className="faq-item">
        <div className="question-container">
          <h1 className="question-text">{questionText}</h1>
          {this.renderActiveButtonImage()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
