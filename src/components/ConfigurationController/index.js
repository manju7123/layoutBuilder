import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onShowContent = () => {
        onToggleShowContent()
      }

      const onShowLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onShowRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <nav className="nav-container">
          <h1 className="nav-title"> Layout </h1>
          <ul className="nav-ul">
            <li className="nav-li">
              <input
                className="nav-input"
                id="Content"
                type="checkbox"
                checked={showContent}
                onChange={onShowContent}
              />
              <label htmlFor="Content" className="nav-label">
                Content
              </label>
            </li>
            <li className="nav-li">
              <input
                className="nav-input"
                id="LeftNavbar"
                type="checkbox"
                checked={showLeftNavbar}
                onChange={onShowLeftNavbar}
              />
              <label htmlFor="LeftNavbar" className="nav-label">
                Left Navbar
              </label>
            </li>
            <li className="nav-li">
              <input
                className="nav-input"
                id="RightNavbar"
                type="checkbox"
                checked={showRightNavbar}
                onChange={onShowRightNavbar}
              />
              <label htmlFor="RightNavbar" className="nav-label">
                Right Navbar
              </label>
            </li>
          </ul>
        </nav>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
