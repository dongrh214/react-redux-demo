import React from 'react'

class B extends React.Component {
    render() {
        return (
            <p>{this.props.userinfo.age}</p>
        )
    }
}

export default B