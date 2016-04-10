import React from 'react'


class Card extends React.Component {
    
    render(){
        return (
            <div className="ch-card">
                <div className="ch-card-header ch-gradient-shore">
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
