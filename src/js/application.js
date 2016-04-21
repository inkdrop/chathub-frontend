import React from 'react'
import ReactDom from 'react-dom'
import Card from './components/Card'
import Button from './components/Button'
import {BLURRY_BEACH, DRACULA} from './constants/gradient_classes'


const iconGithub = <i className="icon-github-alt" />
ReactDom.render(<Button label="get started" className="ch-btn-white" icon={iconGithub}/>, document.getElementById('Button-get-started'))

const card1Text = 'Sign up with your Github account'
const card2Text = 'Your organizations become groups'
const card3Text = 'And your repos become channels'
ReactDom.render(<Card content={card1Text} />, document.getElementById('Card-1'))
ReactDom.render(<Card content={card2Text} gradient={DRACULA} />, document.getElementById('Card-2'))
ReactDom.render(<Card content={card3Text} gradient={BLURRY_BEACH} />, document.getElementById('Card-3'))
