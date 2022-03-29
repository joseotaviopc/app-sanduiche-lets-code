import React, { Component } from 'react'
import '../../App.css'
import './styles.css'
import Form from '../../components/form'

import Header from '../../components/header'
import Menu from '../../components/menu'
import MenuTitle from '../../components/menuTitle'

class Checkout extends Component {
  constructor(props){
    super(props)
    this.state = {
      headerTitle: 'Pague Seu Sanduíche',
      btnOptions: {
        finish: "Finalizar"
      }
    }
  }
  

  render() {
    const { headerTitle, btnOptions } = this.state
    const { order } = JSON.parse(localStorage.getItem('order'))
    // console.log(order.currentOrder, order.saladOrder, order.complementOrder)
    const { currentOrder, saladOrder, complementOrder } = order
    const sumItens = currentOrder?.reduce((acc, item) => acc + item.price, 0) + saladOrder?.reduce((acc, item) => acc + item.price, 0) + complementOrder?.reduce((acc, item) => acc + item.price, 0)

    return (
      <div className="app-wrapper">
        <Header title={headerTitle} />
        <div className="app-content">
          <Menu 
            className="menu-checkout"
          >
            <MenuTitle
              title={ 'Obrigado pela preferência' }
            />
            <div className="menu-checkout-content">
              <h2>Resumo do Pedido</h2>
              <ul style={{listStyle: "none"}}>
                <li>
                  { currentOrder[0] 
                  ? `Pão: ${currentOrder[0].option}`
                  : ""
                  }
                </li>
                <li>
                  { currentOrder[1] 
                  ? `Carne: ${currentOrder[1].option}`
                  : ""
                  }
                </li>
                <li>
                  { currentOrder[2] 
                  ? `Queijo: ${currentOrder[2].option}`
                  : ""
                }
                </li>
                <li>
                  { saladOrder[0]
                  ? `Saladas: ${saladOrder.map((item) => ` ${item.option}`)}`
                  : ""
                  }
                </li>
                <li>
                  { complementOrder[0]
                  ? `Complementos: ${complementOrder.map((item) => ` ${item.option}`)}`
                  : ""
                  }
                </li>
              </ul>
              <h2 style={{
                alignSelf: 'center',
                justifyItems: 'flex-end'
                }}
              >
                Total: {sumItens?.toFixed(2).replace('.',',') || `R$ 0,00`}
              </h2>
            </div>
          </Menu>
          <Form btnOptions={btnOptions.finish}/>
        </div>
      </div>
    )
  }
}

export default Checkout