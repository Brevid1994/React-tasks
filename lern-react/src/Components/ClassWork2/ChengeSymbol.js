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
    <div className = 'chenge-symbol-block'>
      <span onClick={this.changeSymbols} className = 'symbol'>{this.state.symbol}</span>
    </div>
    )
  }
}

export default ChengeSymbol;