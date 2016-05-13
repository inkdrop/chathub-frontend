import React from 'react'
import Card from './Card'


class CardLandingPage extends React.Component {

  render(){
    const headerContent = this._getHeaderContent()
    const bodyContent = this._getBodyContent()

    return (
      <Card header={headerContent} content={bodyContent} gradient={this.props.gradient} />
    )
  }

  _getBodyContent(){
    return (
      <div className="card-body-wrapper">
        <div className="card-number">{this.props.number}</div>
        <div>{this.props.text}</div>
      </div>
    )
  }

  _getHeaderContent(){
    return (
      <i className={this.props.icon + ' ch-header-icon sombra-texto'}></i>
    )
  }

}

export default CardLandingPage
