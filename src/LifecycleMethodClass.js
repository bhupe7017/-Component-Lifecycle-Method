import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class LifecycleMethodClass extends Component {

    constructor(){
        super()
        this.state={
            count:0
        }
    }

    componentDidMount(){
        console.log('component did mount called')
    }
    componentDidUpdate(){
        console.log('componenet did update called')
    }

    render() {
        return (
            <div>
                <h1>class component for comparison {this.state.count}</h1>
                <button onClick={()=>{this.setState({count:this.state.count+1})}}>Click To Increase</button>
            </div>
        )
    }
}
