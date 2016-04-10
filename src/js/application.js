import React from 'react'
import ReactDom from 'react-dom'
import Card from './components/Card'
import Button from './components/Button'

ReactDom.render(<Card/>, document.getElementById('card-container'))
ReactDom.render(<Button label="Button"/>, document.getElementById('btn-container'))
