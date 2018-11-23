export default (code) => {
    let lines = code.split('\n');
    let message='';
    let state=0;

    function isLetter(str){
        let regex = /^[A-Za-z]+$/
        return str.length == 1 && regex.test(str)
    }
    
    function isNumber(str){
        let regex = /^[0-9]+$/
        return str.length == 1 && regex.test(str)
    }

    function isSpace(str){
        let regex = /^\s+$/
        return str.length == 1 && regex.test(str)
    }

    function isOp(str){
        return str == '+' || str == '-' || str == '*' || str == '='
    }

    lines.forEach(line => {
        
        // if(isSpace(line.charAt(0))) state = 0
        // else if(line.charAt(0) == '/') state = 1
        // else if(isLetter(line.charAt(0))) state = 5
        // else state = -1

        for(let i=0; i<line.length; i++){
            let x = line.charAt(i);


            switch(state){
                case 0:
                    if(isSpace(x)) state = 0
                    else if(x == '/') state = 1
                    else if(isLetter(x)) state = 5
                    else state = -1
                    message = 'Compilação OK'
                break;

                case 1:
                    if(x == '/') state = 2
                    if(x == '*') state = 3
                break;

                case 2:
                    //i = line.length
                    state = 2
                    message = 'Compilação Ok Linha'
                break;

                case 3:
                    if(x != '*') state = 3 //N precisa
                    if (x == '*') state = 4
                break;

                case 4:
                    if(x != '/' && x != '*') state = 3
                    if(x == '*') state = 4 //N Precisa
                    if(x == '/') state = 0
                break;

                case 5:
                    if (isLetter(x)) state = 5
                    else if (isNumber(x)) state = 5
                    else if (x == '/') state = 6
                    else if (isSpace(x)) state = 9
                    else if (isOp(x)) state = 10
                    else state = -1
                break;

                case 6:
                    if(x == '*') state = 7
                    else if(isSpace(x)) state = 10 //Verificar os == != 
                    else if(isLetter(x)) state = 14
                    else if(isNumber(x)) state = 15
                    else state = -1
                break;

                case 7:
                    if(x != '*') state = 7 //N precisa
                    if (x == '*') state = 8
                break;

                case 8:
                    if(x != '/' && x != '*') state = 7
                    if(x == '*') state = 8 //N Precisa
                    if(x == '/') state = 9
                break;

                case 9:
                    if(isSpace(x)) state = 9
                    else if(x == '/') state = 6
                    else if(isOp(x)) state = 10
                    else state = -1
                break;

                case 10:
                    if(isSpace(x)) state = 10
                    else if(x == '/') state = 11
                    else if(isLetter(x)) state = 14
                    else if(isNumber(x)) state = 15
                    else state = -1
                break;

                case 11:
                    if(x == '*') state = 12
                    else state = -1 //Dois operandos
                break;

                case 12:
                    if(x != '*') state = 12 //N precisa
                    if (x == '*') state = 13
                break;

                case 13:
                    if(x != '/' && x != '*') state = 12
                    if(x == '*') state = 13 //N Precisa
                    if(x == '/') state = 10
                break;

                case 14:
                    if(x == ';') state = 0
                break;

                case 15:
                    if(x == ';') state = 0
                break;

                case -1:
                    message = 'Erro Compilação'
                break;
            }

            if(state == -1) break
        }

        if(state != 0 && state != 2) message = 'Erro Compilação Final'
    })

    return message
}


//message += `posição ${i} e char ${line.charAt(i)} é letra ${isLetter(line.charAt(i))} e é número ${isNumber(line.charAt(i))}     | | | `
//console.log(isSpace(line.charAt))