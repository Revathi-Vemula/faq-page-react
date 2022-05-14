import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="app-container">
      <div className="faq-container">
        <h1 className="heading">FAQs</h1>
        <ul className="faq-list-container">
          {faqsList.map(eachFaq => (
            <FaqItem faqDetails={eachFaq} key={eachFaq.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
