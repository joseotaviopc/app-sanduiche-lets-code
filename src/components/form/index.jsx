import React, { Component } from 'react'
import MenuOption from '../menuOption'
import './styles.css'

class Form extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const { btnOptions } = this.props
    console.log(btnOptions);
    return (
      <div className='order-container'>
        <div className='order-header'>
          <h2>Insira os dados do pagamento:</h2>
          <form>
            <div className='order-form-group'>
              <div className='order-form-item'>
                <label htmlFor='name'>Nome:</label>
                <input type='text' id='name' placeholder='Seu nome completo'/>
              </div>
              <div className='order-form-item'>
                <label htmlFor='card'>Número do cartão:</label>
                <input type='number' id='card' placeholder='Somente números'/>
              </div>
              <div className='order-form-item'>
                <label htmlFor="birthdate">Data de Nascimento:</label>
                <input type='number' id='birthdate' placeholder='Somente números'/>
              </div>
              <div className='order-form-item'>
                <label htmlFor='cvv'>CVV:</label>
                <input type='number' id='cvv' placeholder='3 dígitos'/>
              </div>
              <div className='order-form-item'>
                <label htmlFor='CPF'>CPF:</label>
                <input type='number' id='CPF' placeholder='Somente números'/>
              </div>
            </div>
          </form>
        </div>
        <div className="order-footer">
         
          <MenuOption 
            title={btnOptions}
            bgcolor="rgba(198, 40, 40, .5)"
            onClick={null}
          />
        </div>
      </div>
    )
  }
}

export default Form