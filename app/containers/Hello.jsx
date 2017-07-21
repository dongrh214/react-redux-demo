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
                <Name name={this.props.name}/>
                <hr/>
                <Age age={this.props.age}/>
                <hr/>
                <Button title="修改姓名" action={this.props.userinfoActions.updateName}/>
                <Button title="修改年龄" action={this.props.userinfoActions.updateAge}/>
            </div>
        )
    }
    componentDidMount() {
        console.log(this.props)
    }
}

function mapStateToProps(state) {

    console.log('state:',state);
    return {
        name: state.personName.name,
        age: state.personAge.age
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