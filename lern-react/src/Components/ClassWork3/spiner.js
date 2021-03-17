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
        !this.state.load ? (
          <div onClick = { this.startLoading } className='loader loader-animated' ></div>
        ) : (
          <button onClick = { this.startLoading } className='button'>LOAD</button>
        )
      )
    }
  
  }

  export default Loading;