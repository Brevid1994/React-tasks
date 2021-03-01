import React from 'react'

class Ingridients extends React.Component {
  

    state = {
      items: false,
      ingridients: [1, 2, 3, 4]
    }
  
    startLoading = () => {
      this.setState ( {items: !this.state.items } )

    }
  
    render(){
      return (
        !this.state.items ? (
          <div onClick = { this.startLoading }>Ingridients ^ </div>
        ) : (
          <div onClick = { this.startLoading } >Close ^
          { this.state.ingridients.map( (ingridients) => {
              return <li> { ingridients } </li>
          })}
          </div>
        )
      )
    }
  
  }

  export default Ingridients;