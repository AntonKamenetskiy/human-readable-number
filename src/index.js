module.exports = function toReadable (number) {
    if (isNaN(number)) return;
    let numStr = number.toString();
    let numStrLen = numStr.length;
    let ones = '';
    let tens = '';
    let hundreds = '';
    let readableArr = new Array (
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
        'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty' 
        );
    let tensArr = new Array (
        'zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy',
        'eighty', 'ninety'
        )
        if (numStrLen >= 2) {
            let tensStr = numStr[numStrLen - 2] + numStr[numStrLen - 1];
            if (tensStr !== '00') {
                if (Number(tensStr) < 21) {
                    tens = readableArr[(numStr[numStrLen - 2] === '0' ? '' : numStr[numStrLen - 2]) + numStr[numStrLen - 1]];
                }
                else {
                    if (numStr[numStrLen - 1] !== '0') {
                        ones = readableArr[numStr[numStrLen - 1]];
                        tens = tensArr[numStr[numStrLen - 2]] + ' ' + ones;
                    }
                    else {
                        tens = tensArr[numStr[numStrLen - 2]];
                    }
                }
            }
            if (numStrLen === 3) {
                hundreds = readableArr[numStr[0]];
                if (tens) {
                    return hundreds + ' hundred ' + tens;
                }
                else {
                    return hundreds + ' hundred';
                }
            }
            return tens;
        }
        else {
            return readableArr[number];
        }
    }
