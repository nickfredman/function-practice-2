// Number 1
var getName = function(object) {
    return object.name;
}

console.log(getName({name: 'Luisa', age: 25}));

// Number 2
var totalLetters = function(strings) {
    return strings.join("").length;
}

console.log(totalLetters(['javascript', 'is', 'awesome']));
console.log(totalLetters(['what', 'happened', 'to', 'my', 'function']));

// Number 3
var keyValue = function(arg1, arg2) {
    var newObj = {};
    newObj[arg1] = arg2;
    return newObj;
}

console.log(keyValue('city', 'Denver'));

// Number 4
var negativeIndex = function(arr, negNum) {
    var length = arr.length - Math.abs(negNum);
    return arr[length];
}

console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -2));
console.log(negativeIndex(['jerry', 'sarah', 'sally'], -1));

// Number 5
var removeM = function(string) {
    function noM(element) {
        return element != "m";
    }
    var splitString = string.split('');
    var filtered = splitString.filter(noM);
    return filtered.join('');
}

console.log(removeM('family'));
console.log(removeM('memory'));

// Number 6
var printObject = function(arg) {
    var keyList = Object.keys(arg);
    // var answer = [];
    for (var i = 0; i < keyList.length; i++){
         console.log(keyList[i] + " is " + arg[keyList[i]]);
    }
}

printObject({ a: 10, b: 20, c: 30 });
printObject({ firstName: 'pork', lastName: 'chops' });

// Number 7
var vowels = function(string) {
    var newArr = string.split("");
    function returnVowel(element) {
        return element === "a" || element === "e" || element === "i" || element === "o" || element === "u";
    };

    var vowelList = newArr.filter(returnVowel);
    return vowelList;
}

console.log(vowels('alabama'));
console.log(vowels('What lets in youth?'));

// Number 8
var twins = function(arr) {
    // var solution = true;
    for(var i = 0; i < arr.length; i = i + 2) {
        if(arr[i] !== arr[i+1]) { return false }
    }
    return true;
};

console.log(twins(['a', 'a', 'b', 'b', 'c', 'c']));
console.log(twins(['a', 'a', 'b', 'z']));
console.log(twins(['a', 'a', 'b']));
console.log(twins(['a', 'a', 'b', undefined]));

// Number 9
var or = function(arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i]) { return true }
    }
    return false;
};

console.log(or([false, false, true, false]));
console.log(or([false, false, false]));
console.log(or([]));

// Number 10
var unique = function(arr) {
    function dupe(element, i, arr) {
        return arr.indexOf(element) === i;
    }
    return arr.filter(dupe);
};

console.log(unique(['a', 'b', 'a', 'c', 'd', 'd']));
console.log(unique(['todd', 'avery', 'maria', 'avery']));