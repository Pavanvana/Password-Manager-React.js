import './index.css'

const InputItem = props => {
  const {itemDetails, isChecked, onDeleteItem} = props
  const {id, websiteInput, passwordInput, username} = itemDetails
  const initial = websiteInput[0].toUpperCase()

  const onClickDelete = () => {
    onDeleteItem(id)
  }

  return (
    <li className="list-item-container">
      <div className="initial-section">{initial}</div>
      <div className="text-cont">
        <p className="heading">{websiteInput}</p>
        <p className="para">{username}</p>
        {isChecked ? (
          <p className="para">{passwordInput}</p>
        ) : (
          <img
            className="stars"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
          />
        )}
      </div>
      <div className="button-cont">
        <button
          type="button"
          className="delete-button"
          onClick={onClickDelete}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}
export default InputItem
