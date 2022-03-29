import React, { Component } from 'react'
import Hamburguer from '../../assets/hamburguer.svg'
import './styles.css'

class Menu extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const { className } = this.props

    return (
      <div className={`menu-container ${className}`}>
        <img 
          src={Hamburguer} 
          alt="Ilustração de um hamburguer, recheado de carne, queijo, cebola, tomate e alface"
          className='menu-image' />
          {this.props.children}
      </div>
    )
  }
}

export default Menu