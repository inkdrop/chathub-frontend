import React from 'react'


class Button extends React.Component {
    
    render(){
        return (
            <button className={'ch-btn ' + this.props.className}>
                {this.props.label}
            </button>
        )
    }
    
}

export default Button
