import React from 'react'
import ReactDom from 'react-dom'
import CardLandingPage from './components/CardLandingPage'
import Button from './components/Button'
import {BLURRY_BEACH, DRACULA} from './constants/gradient_classes'


const iconGithub = <i className="icon-github-alt" />
ReactDom.render(<Button label="get started" className="ch-btn-white" icon={iconGithub}/>, document.getElementById('Button-get-started'))

const card1Text = 'Sign up with your Github account'
const card2Text = 'Your organizations become groups'
const card3Text = 'And your repos become channels'
ReactDom.render(<CardLandingPage text={card1Text} number="1" />, document.getElementById('Card-1'))
ReactDom.render(<CardLandingPage text={card2Text} number="2" gradient={DRACULA} />, document.getElementById('Card-2'))
ReactDom.render(<CardLandingPage text={card3Text} number="3" gradient={BLURRY_BEACH} />, document.getElementById('Card-3'))
