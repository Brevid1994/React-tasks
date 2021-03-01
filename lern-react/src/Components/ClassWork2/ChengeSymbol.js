// Создать компонент с внутренним состоянием - чекбокс - изначально он показывает крестик.
// По клику на крестик он подменяется на галочку
// По клику на галочку она подменяется на крестик

import React from 'react'

class ChengeSymbol extends React.Component {
  
  state = {
    symbol: 'X'
  };

  changeSymbols = () => {
    
    const nextValue = this.state.symbol === 'X' ? 'V' : 'X'
    this.setState({ symbol: nextValue});
  }


  render(){
    return (
    <div>
      <div onClick={this.changeSymbols}>{this.state.symbol}</div>
      </div>
    )
  }
}

export default ChengeSymbol;