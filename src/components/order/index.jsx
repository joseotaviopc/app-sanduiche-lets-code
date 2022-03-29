import React, { Component } from 'react'
import MenuOption from '../menuOption'
import { Link } from "react-router-dom";
import './styles.css'

class Order extends Component {
  constructor(props){
    super(props)
  }
  
  render() {
    const { currentOrder, saladOrder, complementOrder, onclick, step } = this.props
    const sumItens = currentOrder?.reduce((acc, item) => acc + item.price, 0) + saladOrder?.reduce((acc, item) => acc + item.price, 0) + complementOrder?.reduce((acc, item) => acc + item.price, 0)

    const btnOptions = {
      name: "Prosseguir",
      finish: "Finalizar"
    }
    // console.log("Step:",step,"currentOrder:",currentOrder)
    return (
      <div className='order-container'>
        <div className='order-header'>
          <h2>Ingredientes Selecionados</h2>
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
        </div>
        <div className="order-footer">
          <h2 style={{
            alignSelf: 'center',
            justifyItems: 'flex-end'
            }}
          >
            Total: {sumItens?.toFixed(2).replace('.',',') || `R$ 0,00`}
          </h2>
          { step === 3 && 
              <MenuOption 
                title={btnOptions}
                bgcolor="rgba(198, 40, 40, .5)"
                onClick={onclick}
              />
          }
          { step === 4 &&
              <Link to="/checkout">
                <MenuOption 
                  title={btnOptions}
                  bgcolor="rgba(198, 40, 40, .5)"
                  onClick={onclick}
                />
              </Link>
          }
        </div>
      </div>
    )
  }
}

export default Order