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
            <div onClick = { this.makeTextItalic } className = { this.state.decoration ? 'standart' : 'italic' } >
                qwerty
            </div> 

    )
}

}

export default Italic;