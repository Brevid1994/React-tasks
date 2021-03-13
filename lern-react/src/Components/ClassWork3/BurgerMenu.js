import React from 'react'

class Ingridients extends React.Component {
  

  state = {
    items: false,
    ingridients: ['apple', 'orange', 'ananas', 'banana'],
  }
  
  startLoading = () => {
    this.setState ( {items: !this.state.items } )
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
                <div>
                <p className = 'burger-menu-item'> { item } </p>
                <Counter/>
                </div>
              )})}
          </div>
        )}
      </div>
    )
  }
}

class Counter extends React.Component {

  state = {
    count: 0
  }

  addIngridient = () => {
    this.setState( {count: this.state.count + 1 })
  }

  deleteIngridient = () => {
    this.setState( {count: this.state.count - 1 })
  }

  render(){
    return(
      <div>
        <button onClick = { this.addIngridient }>+</button>
        { this.state.count }
        <button onClick = { this.deleteIngridient }>-</button>
      </div>
    )
  }
}

export default Ingridients;