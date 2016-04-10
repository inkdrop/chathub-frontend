import React from 'react'
import Hello from '../Hello'
import { storiesOf, action } from '@kadira/storybook'

storiesOf('Hello', module)
    .add('test', () => {
        return (<Hello />)
    })
