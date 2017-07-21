import React from 'react'

class Name extends React.Component {
    render() {
        return (
            <p>姓名：{this.props.userinfo.name}</p>
        )
    }
}



export default Name