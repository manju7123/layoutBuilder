import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="body-navbar-card">
              <h1 className="body-title">Left Navbar Menu </h1>
              <ul className="list-items">
                <li className="item">Item 1</li>
                <li className="item">Item 2</li>
                <li className="item">Item 3</li>
                <li className="item">Item 4</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="body-card">
              <h1 className="body-title"> Content </h1>
              <p className="content-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="body-navbar-card">
              <h1 className="body-title"> Right Navbar </h1>
              <div className="ad">
                <p className="item">Ad 1</p>
              </div>
              <div className="ad">
                <p className="item">Ad 2</p>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
