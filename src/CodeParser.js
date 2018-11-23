// import React, { Component } from "react";

// class CodeParser extends Component {
//     constructor(props){
//         super(props)
//         this.state = { message: 'ainda n' }

//         this.handleMessage = this.handleMessage.bind(this)
//         this.handleCode = this.handleCode.bind(this)
//     }

//     render(){
//         let code = this.props.code;
//         this.handleCode(code);

//         return(
//             <div>
//                 <p>{this.state.message}</p>
//             </div>
//         )
//     }

//     handleMessage(e){
//         //this.setState( {...this.state, message: e })
//         this.state.message = e
//     }

//     handleCode(code){
//         if(code == '1'){
//             this.handleMessage('número 1')
//         } else {
//             this.handleMessage('n é número 1')
//         }
//     }
// }

// export default CodeParser

export default (code) => {
    if(code == '1'){
        return 'número 1' + a
    } else {
        return 'n é número 1' + a
    }
}

let a = 3