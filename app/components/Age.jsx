import React from 'react'

class Age extends React.Component {
    render() {
        return (
            <p>年龄：{this.props.userinfo.age}</p>
        )
    }
}

export default Age