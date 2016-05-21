import React from 'react'
import Button from 'componentsRoot/Button'


class ButtonGithub extends React.Component {

  render(){
    const iconGithub = <i className="icon-github-alt" />

    return(
      <Button label="get started" className={this.props.className} icon={iconGithub}/>
    )
  }

}

export default ButtonGithub
