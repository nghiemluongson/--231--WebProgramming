import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AboutUs from '../../component/AboutUs/AboutUs';

export class Info extends Component {
  static propTypes = {

  }

  render() {
    return (    
    <div className="Body">
      <div className="row">
        <AboutUs/>
        </div>
        </div>
    )
  }
}

export default Info
