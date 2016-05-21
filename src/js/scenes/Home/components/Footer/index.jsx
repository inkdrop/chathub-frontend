import React from 'react'


class Footer extends React.Component {

  render(){
    return(
      <div className="section landing-footer">
        <div className="container">
          <div className="columns is-mobile is-multiline">
            <div className="column is-12-mobile footer-links">
              <ul>
                <li><a>about us</a></li>
                <li><a>privacy</a></li>
                <li><a>contact</a></li>
              </ul>
            </div>

            <div className="column app-name-bottom">
              <div className="app-name">chathub</div>
            </div>

            <div className="column is-12-mobile social-links">
              <ul>
                <li><i className="icon-facebook-square"></i></li>
                <li><i className="icon-twitter-square"></i></li>
                <li><i className="icon-google-plus-square"></i></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Footer
