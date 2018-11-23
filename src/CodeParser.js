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

    lines.forEach(line => {
        
        for(let i=0; i<line.length; i++){
            let x = line.charAt(i);

            if(isSpace(x)) state = 0
            else if(x == '/') state = 1
            else if(isLetter(x)) state = 5
            else state = -1

            switch(state){
                case 0:
                    if(isSpace(x)) state = 0
                    else if(x == '/') state = 1
                    else if(isLetter(x)) state = 5
                    else state = -1
                    message = 'Compilação OK'
                break;

                case 1:
                    message = '/ verificada'
                break;

                case 5:
                    message = 'letra verificada'
                break;

                case -1:
                    message = 'Erro Compilação'
                break
            }

            if(state == -1) break
        }
    })

    return message
}


//message += `posição ${i} e char ${line.charAt(i)} é letra ${isLetter(line.charAt(i))} e é número ${isNumber(line.charAt(i))}     | | | `
//console.log(isSpace(line.charAt))