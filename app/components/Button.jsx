import React from 'react'

class Button extends React.Component {
    render() {
        return (
             <button style={{padding:'10px',backgroundColor:'green',color:'white'}}  onClick={this.props.action}>{ this.props.title }</button>
        )
    }
}

export default Button