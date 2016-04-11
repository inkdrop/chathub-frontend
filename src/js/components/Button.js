import React from 'react'


class Button extends React.Component {

    render(){
        return (
            <button className={'ch-btn ' + this.props.className}>
                <i className="icon-github-square"></i>{this.props.label}
            </button>
        )
    }

}

export default Button
