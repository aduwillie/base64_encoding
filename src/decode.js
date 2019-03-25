const { BASE_64_CHARS } = require('./constants');

const fillInverse = (obj) => {
    for (let i = 0; i < BASE_64_CHARS.length; i++) {
        obj[BASE_64_CHARS[i]] = i;
    }
}

const decode = (encodedStr) => {
    const base64Inv = {};
    fillInverse(base64Inv);

    let toBeDecoded = encodedStr.replace(new RegExp('[^' + BASE_64_CHARS.split("") + '=]', 'g'), "");
    const padding = (toBeDecoded.charAt(toBeDecoded.length - 1) == '=' ?
        (toBeDecoded.charAt(toBeDecoded.length - 2) == '-' ? 'AA' : 'A') : '');

    let result = '';
    toBeDecoded = toBeDecoded.substr(0, toBeDecoded.length - padding.length) + padding;

    for (let i = 0; i < toBeDecoded.length; i += 4) {
        const n = (base64Inv[toBeDecoded.charAt(i)] << 18) + (base64Inv[toBeDecoded.charAt(i + 1)] << 12) +
            (base64Inv[toBeDecoded.charAt(i + 2)] << 6) + base64Inv[toBeDecoded.charAt(i + 3)];

       result += String.fromCharCode((n >>> 16) & 255, (n >>> 8) & 255, n & 255);
    }

    return result.substring(0, result.length - padding.length);
};

module.exports = decode;
