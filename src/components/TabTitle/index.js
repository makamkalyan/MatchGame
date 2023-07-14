import './index.css'

const TabTitle = props => {
  const {details, isTrue, onTabListId} = props
  const {tabId, displayText} = details
  const active = isTrue ? 'activeColor' : ''
  const passId = () => {
    onTabListId(tabId)
  }

  return (
    <li className="li">
      <button className={`button ${active}`} type="button" onClick={passId}>
        {displayText}
      </button>
    </li>
  )
}
export default TabTitle
