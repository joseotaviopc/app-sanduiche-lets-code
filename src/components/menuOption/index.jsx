import React, { Component } from 'react'
import './styles.css'

class MenuOption extends Component {
  constructor(props){
    super(props)
  }
  
  render() {
    const { title, bgcolor, onClick } = this.props

    return (
      <button
        className='menu-option'
        style={{
          backgroundColor: bgcolor,
          alignSelf: 'center',
        }}
        onClick={ onClick }
      >
        {title.name || title}
      </button>
    )
  }
}

export default MenuOption