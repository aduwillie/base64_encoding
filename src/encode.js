const { BASE_64_CHARS } = require('./constants');

const encode = (plainText) => {
    let text = plainText;
    let result = ''; 
    var paddingStr = ''; 
    var padCount = text.length % 3;

    if (padCount > 0) {
        for (; padCount < 3; padCount++) {
            paddingStr += '=';
            text += '\0';
        }
    }

    for (let i = 0; i < text.length; i += 3) {
        if (i > 0 && (i / 3 * 4) % 76 === 0) {
            result += '\r\n';
        }

        let n = (text.charCodeAt(i) << 16) + (text.charCodeAt(i + 1) << 8) + text.charCodeAt(i + 2);
        n = [(n >>> 18) & 63, (n >>> 12) & 63, (n >>> 6) & 63, n & 63];

        result += BASE_64_CHARS[n[0]] + BASE_64_CHARS[n[1]] + BASE_64_CHARS[n[2]] + BASE_64_CHARS[n[3]];
    }

    return result.substring(0, result.length - paddingStr.length) + paddingStr;
};

module.exports = encode;
