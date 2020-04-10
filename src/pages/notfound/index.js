import React, { Component } from 'react'
import { Card } from 'antd'
import logo from '../../assets/logo.png'
import './notfound.less'

class NotFound extends Component {
  navigateToPath = (e) => {
    this.props.history.push(e.target.dataset.path)
  }
  goBack = () => {
    this.props.history.goBack()
  }

  render() {
    return (
      <div className="notfound-container">
        <div className="notfound-card">
          <Card data-test="notfound-card">
            <img className="logo" src={logo} alt="Logo" />

            <h1 className="sorry">SORRY</h1>
            <p>We can't seem to find the page you're looking for.</p>
            <p>Error code: 404 Page Not Found</p>
            <p>Here are some helpful links instead:</p>
            <ul className="helpful-link">
              <li>
                <p
                  data-test="link-home"
                  className="link-text"
                  data-path="/"
                  onClick={this.navigateToPath}
                >
                  Home
                </p>
              </li>
              <li>
                <p
                  data-test="link-sign-in"
                  className="link-text"
                  data-path="/menu"
                  onClick={this.navigateToPath}
                >
                  See Menu
                </p>
              </li>
              <li>
                <p
                  data-test="link-go-back"
                  className="link-text"
                  onClick={this.goBack}
                >
                  Go Back
                </p>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    )
  }
}

export default NotFound
