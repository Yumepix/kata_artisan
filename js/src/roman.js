class Roman {
    decode(romanNumber) {
        let result = 0;
        let previous_char = 0;
        for (let i = 0; i < romanNumber.length; i++){
            const current_char = this.decodeSingleChar(romanNumber.charAt(i));

            if (current_char > previous_char) {
                result += (current_char - previous_char) - previous_char;
            }else{
                result += current_char;
            }

            previous_char = current_char;
        }
        return result;
    }

    decodeSingleChar(romanNumber) {
        switch (romanNumber) {
            case 'I':
                return 1
            case 'V':
                return 5
            case 'X':
                return 10
            case 'L':
                return 50
            case 'C':
                return 100
            case 'D':
                return 500
            case 'M':
                return 1000
        }
    }
}

module.exports = Roman;
