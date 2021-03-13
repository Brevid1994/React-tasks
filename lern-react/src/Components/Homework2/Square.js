// Передаем пропсы

import React from 'react'


class Square extends React.Component {
    render(){
        return(
            <div className = 'square-block'>
                <span className= {this.props.cssClass }>
                    { this.props.label }
                </span>
            </div>
        )}
}

export default Square;