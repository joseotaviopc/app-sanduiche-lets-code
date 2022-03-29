import React, { Component } from 'react'
import './styles.css'

class MenuTitle extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const { title, step } = this.props
    return (
      <h2
        className='menu-title'
      >
          { step 
            ?
            `${title} (passo ${step})`
            :
            title
          } 
      </h2>
    )
  }
}

export default MenuTitle