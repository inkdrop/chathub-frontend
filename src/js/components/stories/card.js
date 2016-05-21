import React from 'react'
import Card from 'components/Card'
import {BLURRY_BEACH} from 'constants/gradient_classes'
import { storiesOf, action } from '@kadira/storybook'

const styles = {
  container: {
    height: 'auto',
    display: 'block',
    marginTop: '30px'
  },
  cardWrapper: {
    width: '15%',
    margin: '0 30px'
  },
  imgStyle: {
    height: '120px'
  }
}

storiesOf('Card', module)
  .add('no content', () => {
    return (
      <div style={styles.container}>
        <div style={styles.cardWrapper}>
          <Card />
        </div>
      </div>
    )
  })
  .add('with content', () => {
    const header = (
      <img src="http://megaicons.net/static/img/icons_sizes/8/178/512/logos-github-icon.png" style={styles.imgStyle} />
    )
    const conteudo = (
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas ullamcorper efficitur. Proin id risus mattis, lobortis arcu eu, fringilla mauris. Aasasd asdasd asdasd asdasda asdasd</div>
    )

    return (
      <div style={styles.container}>
        <div style={styles.cardWrapper}>
          <Card header={header} content={conteudo} gradient={BLURRY_BEACH} />
        </div>
      </div>
    )
  })
