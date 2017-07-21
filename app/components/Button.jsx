import React from 'react'

class C extends React.Component {
    render() {
        return (
            <div>
                <button style={{padding:'10px',backgroundColor:'green',color:'white'}} onClick={this.changeUserInfo.bind(this)}>修改</button>
            </div>
        )
    }
    changeUserInfo() {
        const actions = this.props.actions;
        actions.updateCityName({
            name: 'lisi',
            age: '88'
        })
    }
}

export default C