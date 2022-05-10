const charIsLetter = (char) => {
    if (typeof char !== 'string') {
      return false;
    }
  
    return char.toLowerCase() !== char.toUpperCase();
}

const caesarCipher = (string) => {
    let resultArray = []
    for (let i = 0; i < string.length; i++) {
        if (!charIsLetter(string[i])) {
            resultArray.push(string[i]);
            continue;
        }
        else {
            let code = string.charCodeAt(i) + 1
            if (code > 96) {
                while (code > 122) {
                    code = (code - 122) + 96
                }                
            }
            else {
                while (code > 90) {
                    code = (code - 90) + 64
                }
            }
            resultArray.push(String.fromCharCode(code));            
        }

    }
    return resultArray.join('');
}

export default caesarCipher;