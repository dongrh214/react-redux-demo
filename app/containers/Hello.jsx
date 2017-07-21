import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as userinfoActions from '../actions/userinfo'

import Name from '../components/Name'
import Age from '../components/Age'
import Button from '../components/Button'

class Hello extends React.Component {
    render() {
        return (
            <div>
                <p>hello world</p>
                <br/>
                <br/>
                <Name userinfo={this.props.userinfo}/>
                <hr/>
                <Age userinfo={this.props.userinfo}/>
                <hr/>
                <Button title="修改姓名" action={this.props.userinfoActions.updateName}/>
                <Button title="修改年龄" action={this.props.userinfoActions.updateAge}/>
            </div>
        )
    }
    componentDidMount() {
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userinfoActions: bindActionCreators(userinfoActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Hello)