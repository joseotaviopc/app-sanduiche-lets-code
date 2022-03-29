import React, { Component } from 'react'
import './styles.css'

class Header extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className='header-title'>
        {this.props.title}
      </div>
    )
  }
}

export default Header