import React from 'react'

class Loading extends React.Component {
  

    state = {
      load: true,
    }
  
    startLoading = () => {
      this.setState ( {load: !this.state.load } ) 
    }
  
    render(){
      return (
        <div className = 'spiner-block'>
          {!this.state.load ? (
          <div onClick = { this.startLoading } className='loader loader-animated' ></div>
          ) : (
          <button onClick = { this.startLoading } className='button'>LOAD</button>
          )}
        </div>

      )
    }
  
  }

  export default Loading;