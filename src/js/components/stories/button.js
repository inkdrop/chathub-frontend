import React from 'react'
import Button from 'components/Button'
import { storiesOf } from '@kadira/storybook'


storiesOf('Button', module)
  .add('default', () => {
    return (
      <Button label="Button" />
    )
  })
  .add('white with icon', () => {
    const style = {
      backgroundColor: '#00D081',
      padding: '10px'
    }
    const icon = <i className="icon-github-alt" />
    return (
      <div style={style}>
        <Button icon={icon} className="white" label="Button" />
      </div>
    )
  })
