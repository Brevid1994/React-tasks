// Работаем с setState

import React from 'react'

class Italic extends React.Component {

    state = {
        decoration: false,
    }

    makeTextItalic = () => {
        this.setState ( {decoration: !this.state.decoration} )
    }

    render(){
        return(
            <div className = 'italic-block'>
                <div onClick = { this.makeTextItalic } className = { this.state.decoration ? 'standart' : 'italic' }>Some text</div> 
            </div>
        )}
}

export default Italic;