import React, { Component } from "react";
import CodeParser from './CodeParser'

class Code extends Component {

    constructor(props){
        super(props);

        this.state = { code: '', message: 'testezinho' }

        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(e){
        let a = CodeParser(e.target.value)
        if(a ==  '') a = 'Spending My Time'
        this.setState({ ...this.state, code: e.target.value, message: a })
    }


    render(){
        return (
            <div className="codeMain">
                <div className="header">
                <h1 class="text-center text-primary">AAI - Compilador</h1>
                <form onSubmit>
                    <textarea rows="10" cols="40" onChange={(e) => this.handleChange(e)}>
                    </textarea>
                </form>
                {this.state.message}
                </div>
            </div>
        )
    }
}

export default Code;