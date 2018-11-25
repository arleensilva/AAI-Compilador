import React, { Component } from "react";
import CodeParser from './CodeParser'
import TextareaAutosize from 'react-autosize-textarea';

class Code extends Component {

    constructor(props){
        super(props);

        this.state = { code: '', message: 'Escreva o código na caixa de texto para verificar a compilação.' }

        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(e){
        let a = CodeParser(e.target.value)
        if(a ==  '') a = 'Escreva o código na caixa de texto para verificar a compilação.'
        this.setState({ ...this.state, code: e.target.value, message: a })
    }


    render(){
        return (
            <div className="codeMain">
                <div className="header">
                <h1 class="text-center text-primary">AAI - Compilador</h1>
                <form onSubmit>
                    <TextareaAutosize rows="3" cols="40" onChange={(e) => this.handleChange(e)}>
                    </TextareaAutosize>
                </form>
                {this.state.message}
                </div>
            </div>
        )
    }
}

export default Code;