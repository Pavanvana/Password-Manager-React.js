import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import InputItem from '../InputItem'
import './index.css'

class PasswordManager extends Component {
  state = {
    itemsList: [],
    websiteInput: '',
    username: '',
    passwordInput: '',
    searchInput: '',
    isChecked: false,
  }

  onAddPasswordList = event => {
    event.preventDefault()
    const {websiteInput, username, passwordInput} = this.state

    const newPassword = {
      id: uuidv4(),
      websiteInput,
      username,
      passwordInput,
    }
    this.setState(prevState => ({
      itemsList: [...prevState.itemsList, newPassword],
      websiteInput: '',
      username: '',
      passwordInput: '',
    }))
  }

  onChangeWebsite = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  updateSearchList = event => {
    this.setState({searchInput: event.target.value})
  }

  onChecked = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  onDeleteItem = id => {
    const {itemsList} = this.state
    const updatedList = itemsList.filter(eachItem => eachItem.id !== id)
    this.setState({itemsList: updatedList})
  }

  render() {
    const {
      itemsList,
      searchInput,
      websiteInput,
      username,
      passwordInput,
      isChecked,
    } = this.state
    const updatedList = itemsList.filter(each =>
      each.websiteInput.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const count = updatedList.length

    return (
      <div className="bg-container">
        <img
          className="logo-image"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <div className="top-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="password-manager-img"
          />
          <form className="form-container" onSubmit={this.onAddPasswordList}>
            <h1 className="password-heading">Add New Password</h1>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="input-logo"
              />
              <input
                type="text"
                placeholder="Enter Website"
                className="input-item"
                onChange={this.onChangeWebsite}
                value={websiteInput}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="input-logo"
              />
              <input
                type="text"
                placeholder="Enter Username"
                className="input-item"
                onChange={this.onChangeUsername}
                value={username}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="input-logo"
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="input-item"
                onChange={this.onChangePassword}
                value={passwordInput}
              />
            </div>
            <div className="add-button-container">
              <button type="submit" className="add-button">
                Add
              </button>
            </div>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password-manager"
            className="password-manager-img-lg"
          />
        </div>
        <div className="bottom-container">
          <div className="your-password-container">
            <div className="your-password-text-cont">
              <h1 className="your-password-heading">Your Passwords</h1>
              <p className="count">{count}</p>
            </div>
            <div className="search-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-logo"
              />
              <input
                type="search"
                placeholder="Search"
                className="search-input-item"
                onChange={this.updateSearchList}
              />
            </div>
          </div>
          <hr />
          <div className="show-password-container">
            <input
              className="checkbox"
              type="checkbox"
              id="showPassword"
              checked={isChecked}
              onChange={this.onChecked}
            />
            <label className="checkbox-label" htmlFor="showPassword">
              Show passwords
            </label>
          </div>
          {count === 0 ? (
            <div className="no-passwords-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-passwords-image"
              />

              <p className="no-password-text">No Passwords</p>
            </div>
          ) : (
            <ul className="list-items-container">
              {updatedList.map(eachPassword => (
                <InputItem
                  key={eachPassword.id}
                  itemDetails={eachPassword}
                  isChecked={isChecked}
                  onDeleteItem={this.onDeleteItem}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default PasswordManager
