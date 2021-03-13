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
        <div className = 'burger-block'>
          {!this.state.items ? (
            <div onClick = { this.startLoading } className = 'burger-list'>Ingridients ✅ </div>
          ) : (
            <div>
              <span onClick = { this.startLoading} className = 'burger-list'>Close ❌</span>
              { this.state.ingridients.map( (item) => {
                return(
                  <p className = 'burger-menu-item'> { item } 
                    <div key = {item._id}>
                      <button onClick = { this.addIngridient }>+</button>
                      { this.state.quantity }
                      <button onClick = { this.deleteIngridient }>-</button>
                    </div>
                  </p>
                )})}
            </div>
          )}
        </div>

      )
    }
  
  }

  export default Ingridients;