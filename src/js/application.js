import React from 'react'
import ReactDom from 'react-dom'
import CardLandingPage from './components/CardLandingPage'
import Button from './components/Button'
import {BLURRY_BEACH, DRACULA} from './constants/gradient_classes'


const iconGithub = <i className="icon-github-alt" />
ReactDom.render(<Button label="get started" className="ch-btn-white" icon={iconGithub}/>, document.getElementById('Button-get-started'))
ReactDom.render(<Button label="get started" className="ch-btn" icon={iconGithub}/>, document.getElementById('Button-get-started-bottom'))

const card1Text = 'Sign up with your Github account'
const card2Text = 'Your organizations become groups'
const card3Text = 'And your repos become channels'
ReactDom.render(<CardLandingPage text={card1Text} number="1" icon="icon-github-square" />, document.getElementById('Card-1'))
ReactDom.render(<CardLandingPage text={card2Text} number="2" gradient={DRACULA} icon="icon-share-alt" />, document.getElementById('Card-2'))
ReactDom.render(<CardLandingPage text={card3Text} number="3" gradient={BLURRY_BEACH} icon="icon-comments" />, document.getElementById('Card-3'))
