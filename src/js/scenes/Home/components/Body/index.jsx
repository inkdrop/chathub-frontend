import React from 'react'
import CardHome from './components/CardHome'
import ButtonGithub from '../ButtonGithub'
import macbookImage from 'images/macbook-pro-mockup.png'
import {BLURRY_BEACH, DRACULA} from 'constants/gradient_classes'


class Body extends React.Component {

  render(){
    const iconGithub = <i className="icon-github-alt" />

    return(
      <div className="section">
        <div className="container">
          <span className="intro-message">A fresh new way for you to keep in touch with your github teams</span>

          <div className="columns cards-wrapper">
            <div className="column">
              <CardHome text='Sign up with your Github account' number="1" icon="icon-github-square" />
            </div>
            <div className="column">
              <CardHome text='Your organizations become groups' number="2" gradient={DRACULA} icon="icon-share-alt" />
            </div>
            <div className="column">
              <CardHome text='And your repos become channels' number="3" gradient={BLURRY_BEACH} icon="icon-comments" />
            </div>
          </div>

          <div className="intro-message">Clean and familiar UI to make you feel right at home</div>

          <div className="macbook-wrapper padding-left-right">
            <img src={macbookImage} />
          </div>

          <div className="intro-message">Get started right now, it's simple and free</div>

          <div className="get-started-bottom">
            <ButtonGithub />
          </div>
        </div>
      </div>
    )
  }

}

export default Body
