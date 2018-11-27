import React, { Component } from "react";
import CodeParser from './CodeParser'
import TextareaAutosize from 'react-autosize-textarea';
import fumec from './fumec.jpg'

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
                    <img src={fumec}   />
                    <h1 className="text-center text-primary">Disciplina - Compiladores</h1>
                </div>
                <div>
                    <p className="text-center text-primary">Trabalho AutoInstrucional<br /> 
                    Construção da parte frontend de um compilador simples.<br />
                    Alunos: Arleen, Gabriel, Fernando, Dayana<br />
                    Professor: Jõao Aramuni</p>
                    <form className="theForm">
                        <TextareaAutosize  onChange={(e) => this.handleChange(e)}>
                        </TextareaAutosize>
                    </form>
                </div>
                <div className="result">
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