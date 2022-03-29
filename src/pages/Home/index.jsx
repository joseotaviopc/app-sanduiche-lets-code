import { Component } from 'react'
import '../../App.css'

import Header from '../../components/header'
import Menu from '../../components/menu'
import MenuOption from '../../components/menuOption'
import MenuTitle from '../../components/menuTitle'
import Order from '../../components/order'

const orderOptions = [
  { 
    stepTitle: 'Escolha seu Pão:',
    option: [
      { name: 'Australiano', price: 5.00},
      { name: 'Brioche', price: 4.00},
      { name: 'Gergelim', price: 3.00},
      { name: 'Sal', price: 2.50}
    ]
  },
  { 
    stepTitle: 'Escolha sua Carne:',
    option: [
      { name: 'Boi', price: 8.00},
      { name: 'Porco', price: 6.00},
      { name: 'Frango', price: 4.00},
      { name: 'Vegetariano', price: 6.00}
    ]
  },
  { 
    stepTitle: 'Escolha seu Queijo:',
    option: [
      { name: 'Molho Gorgonzola', price: 8.00},
      { name: 'Prato', price: 6.00},
      { name: 'Chedar', price: 6.00},
      { name: 'Sem queijo', price: 0.00}
    ]
  },
  { 
    stepTitle: 'Escolha suas Saladas:',
    option: [
      { name: 'Alface', price: 1.00},
      { name: 'Tomate', price: 2.00},
      { name: 'Cebola', price: 2.00},
      { name: 'Picles', price: 4.00}
    ]
  },
  { 
    stepTitle: 'Escolha seus Complementos:',
    option: [
      { name: 'Bacon', price: 4.00},
      { name: 'Cebola Caramelizada', price: 2.00},
      { name: 'Molho Especial', price: 3.00},
      { name: 'Pimenta Jalapeño', price: 3.00}
    ]
  },
]


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      step: 0,
      headerTitle: 'Monte Seu Sanduíche',
      currentOrder: [],
      saladOrder: [],
      complementOrder: [],
    }
  }

  componentDidMount(){
    // console.log('componentDidMount', this.state.headerTitle)
  }

  render() {
    const { step, currentOrder, saladOrder, complementOrder, headerTitle } = this.state
    const orderList = orderOptions[step]
    
    // console.log("currentOrder",currentOrder)
    return (
      <div className="app-wrapper">

        <Header title={headerTitle} />
        <div className="app-content">
          <Menu 
            step={step}
          >
            <MenuTitle
              title={ orderList.stepTitle }
              step={step + 1}
              />
            { orderList.option?.map((item, index) => 
                <MenuOption
                  key={index}
                  title={item}
                  onClick={(event) => {
                    if(step === 3){
                      this.setState({
                      saladOrder: [
                        ...saladOrder,
                        {option: event.target.innerText, price: item.price}]
                      })
                    } else if(step === 4){
                      this.setState({
                      complementOrder: [
                        ...complementOrder,
                        {option: event.target.innerText, price: item.price}]
                      })
                    } else {
                      this.setState({
                        currentOrder: [
                          ...currentOrder,
                          {option: event.target.innerText, price: item.price}],
                        step: step + 1,
                      })
                    }
                  }}
                />
            )}

          </Menu>
          <Order 
            currentOrder={currentOrder}
            saladOrder={saladOrder}
            complementOrder={complementOrder}
            onclick={() => {
              step === 4
              ?
              (
                localStorage.setItem(
                  'order',
                  JSON.stringify({
                    order: {
                      currentOrder,
                      saladOrder,
                      complementOrder
                    }
                })
                )
              )
              :
              this.setState({
                step: step + 1,
              })
            }}
            step={step}
          />
        </div>

      </div>
    )
  }

}

export default App
