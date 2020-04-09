function validAnagram(origin, source) {
    if (origin.length != source.length) {
        return false
    }
    var _origin = {}
    var _source = {}

    for (let letter of origin) {
        if (_origin[letter]) {
            _origin[letter] += 1;
        } else {
            _origin[letter] = 1;
        }
    }

    for (let letter of source) {
        if (_source[letter]) {
            _source[letter] += 1;
        } else {
            _source[letter] = 1;
        }
    }


    for (let letter in _origin) {
        if (!_source[letter]) {
            return false;
        }
        if (_source[letter] != _origin[letter]) {
            return false;
        }
    }
    return true;
}

// console.log(validAnagram("", ""));
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("anagram", "nagaram"));