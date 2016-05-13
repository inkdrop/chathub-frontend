import React from 'react'
import {SHORE} from '../constants/gradient_classes'


class Card extends React.Component {

  render(){
    const gradientClass = this.props.gradient ? this.props.gradient: SHORE

    return (
      <div className="ch-card">
        <div className={'ch-card-header ' + gradientClass}>
          <span className="ch-card-header-content">
            {this.props.header}
          </span>
        </div>
        <div className="ch-card-body">
          <span className="ch-card-body-content">
            {this.props.content}
          </span>
        </div>
      </div>
    )
  }

}

export default Card
