import React from 'react'

class Ingridients extends React.Component {
  

    state = {
      items: false,
      ingridients: ['apple', 'orange', 'ananas', 'banana'],
      quantity: 0,
    }
  
    startLoading = () => {
      this.setState ( {items: !this.state.items } )
    }

    addIngridient = () => {
      this.setState( {quantity: this.state.quantity + 1 })

    }

    deleteIngridient = () => {
      this.setState( {quantity: this.state.quantity - 1 })
    }
  
    render(){
      return (
        !this.state.items ? (
          <div onClick = { this.startLoading }>Ingridients ^ </div>
        ) : (
          <div >
          { this.state.ingridients.map( (ingridients) => {
            return( 
              <li> { ingridients } 
                <div key={ingridients._id}>
                  <button onClick = { this.addIngridient }>+</button>
                  { this.state.quantity }
                  <button onClick = { this.deleteIngridient }>-</button>
                </div>
              </li>
            )
          })}
          <p onClick = { this.startLoading }>Close</p>
          </div>
        )
      )
    }
  
  }

  export default Ingridients;