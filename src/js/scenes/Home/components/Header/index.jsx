import React from 'react'
import ButtonGithub from '../ButtonGithub'


class Header extends React.Component {

  render(){
    const iconGithub = <i className="icon-github-alt" />

    return (
      <div className="ch-gradient-back-to-earth">
        <header className="header chathub-header">
          <div className="container">
            <div className="header-left">
              <a className="header-item" href="/">
                <i className="icon-home"></i>
              </a>
              <a className="header-tab" href="#">about us</a>
              <a className="header-tab" href="#">privacy</a>
              <a className="header-tab" href="#">contact</a>
            </div>

            <div className="header-right header-menu">
              <span className="header-item">
                <ButtonGithub className="white" />
              </span>
            </div>
          </div>
        </header>
        <div className="chathub-header">
          <div className="container is-clearfix padding-left-right">
            <span className="logo-wrapper">
              <span className="chathub-logo sombra-texto">Chathub</span>
            </span>
            <span className="chathub-call-to-action sombra-texto">Simple Github-centric messaging platform and API for humans</span>
          </div>
        </div>
      </div>
    )
  }

}

export default Header
