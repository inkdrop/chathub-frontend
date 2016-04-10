import React from 'react'
import Button from '../Button'
import { storiesOf } from '@kadira/storybook'


storiesOf('Button', module)
    .add('default', () => {
        return (
            <Button label="Button" />
        )
    })
    .add('white', () => {
        const style = {
            backgroundColor: '#333',
            padding: '10px'
        }
        return (
            <div style={style}>
                <Button className="ch-btn-white" label="Button" />
            </div>
        )
    })
