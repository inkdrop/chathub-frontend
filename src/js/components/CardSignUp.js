import React from 'react'
import Card from './Card'


class CardSignUp extends React.Component {

    render(){
        const headerContent = ''
        const bodyContent = this._getBodyContent()

        return (
            <Card header={headerContent} content={bodyContent} />
        )
    }

    _getBodyContent(){
        const text = 'Sign up with your Github account'

        return (
            <div className="card-body-wrapper">
                <div className="card-number">1</div>
                <div>{text}</div>
            </div>
        )
    }

}

export default CardSignUp
