import React, { Component } from "react";
import CodeParser from './CodeParser'
import TextareaAutosize from 'react-autosize-textarea';

class Code extends Component {

    constructor(props){
        super(props);

        this.state = { code: '', message: 'Escreva o código na caixa de texto para verificar a compilação.', error: [] }

        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(e){
        let a = CodeParser(e.target.value)
        if(a.status ==  '') a.status = 'Escreva o código na caixa de texto para verificar a compilação.'
        this.setState({ ...this.state, code: e.target.value, message: a.status, error: a.error })
    }


    render(){
        return (
            <div className="codeMain">
                <div className="header">
                <h1 className="text-center text-primary">AAI - Compilador</h1>
                <form>
                    <TextareaAutosize  onChange={(e) => this.handleChange(e)}>
                    </TextareaAutosize>
                </form>
                </div>
                <div>
                    {this.state.message}
                </div>
                <div>
                    <ul className="theList">
                        {this.state.error.map(el => <li>{el}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Code;