function buildFilterMap(collection, source) {
    var my_map = new Map();
    var index = 0;
    for (var newobject in collection) {
        var collectedObject = collection[newobject];
        var selectedLookup = source;
        for (var propertyLookup in selectedLookup) {
            if (collectedObject.hasOwnProperty(propertyLookup)) {
                if (selectedLookup[propertyLookup] === collectedObject[propertyLookup]) {
                    my_map.set(index, collection[index]);
                }
            } else {
                my_map.delete(index);
                break;
            }

        }
        index++;
    }
    return Array.from(my_map.values());
}
function whatIsInAName(collection, source) {
    collection = [{"a": 1, "b": 2}, {"a": 1}, {"a": 1, "b": 2, "c": 2}];
    source = {"a": 1, "c": 2};
    var arr = [];
    arr = buildFilterMap(collection, source);
}
/**
 * myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
 myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".
 myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".
 myReplace("His name is Tom", "Tom", "john") should return "His name is John".
 myReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms".
 * @param str
 * @param before
 * @param after
 * @returns {*}
 */
function myReplace(str, before, after) {
    var chr = before.charAt(0);
    var firstCharCaps = /[A-Z]|[\u0080-\u024F]/.test(chr) && chr === chr.toUpperCase();
    if (firstCharCaps)
        after = after.charAt(0).toUpperCase() + after.slice(1).toLowerCase();
    var myMap = new Map();
    var res = str.split(" ");
    for (var i = 0; i < res.length; i++) {
        myMap.set(res[i], res[i]);
    }
    myMap.set(before, after);
    var arr = [];
    myMap.forEach(function (value, key) {
        arr.push(value);
    });
    str = arr.join(' ').trim();
    console.log(str);
}

/**
 * translatePigLatin("california") should return "aliforniacay californiacay".
 * translatePigLatin("paragraphs") should return "aragraphspay".
 * translatePigLatin("glove") should return "oveglay".
 * translatePigLatin("algorithm") should return "algorithmway".
 * translatePigLatin("eight") should return "eightway".
 */
function arrayTranslatePigLatin() {
    ["california", "paragraphs", "glove", "algorithm", "eight"].every(translatePigLatin);

}

function translatePigLatin(str) {
    var my_map = new Map();
    my_map.set("A", "A");
    my_map.set("E", "E");
    my_map.set("I", "I");
    my_map.set("O", "O");
    my_map.set("U", "U");
    var determineIndex = function (inputstr) {
        for (var i = 0; i < inputstr.length; i++) {
            if (my_map.get(inputstr.charAt(i).toUpperCase()) !== undefined)
                return i;
        }
        return 0;
    };
    if (my_map.get(str.charAt(0).toUpperCase()) !== undefined) {
        str = str + 'way';
    } else {
        var idx = determineIndex(str);
        var firstCut = str.substr(0, idx) + 'ay';
        var secondCut = str.substr(idx);
        var thirstr = secondCut + firstCut;
        str = thirstr;
    }
    return str;

}

/**
 * pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
 * TCGA =AT TA CG GC
 * pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
 *
 * pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
 * CTCTA
 *
 */
function pairElement(str) {
    var my_map = []
    for (var i = 0; i < str.length; i++) {
        switch (str.charAt(i)) {
            case 'A':
                var arr = [str.charAt(i), "T"];
                my_map[i] = arr;
                break;
            case 'T':
                var arr = [str.charAt(i), "A"];
                my_map[i] = arr;
                break;
            case 'C':
                var arr = [str.charAt(i), "G"];
                my_map[i] = arr;
                break;
            case 'G':
                var arr = [str.charAt(i), "C"];
                my_map[i] = arr;
                break;
            default:
                console.log('default');
        }
    }
    return my_map;
}

pairElement("GCG");
/**
 * fearNotLetter("abce") should return "d".
 * fearNotLetter("abcdefghjklmno") should return "i".
 * fearNotLetter("bcd") should return undefined.
 * fearNotLetter("yz") should return undefined.
 */

function fearNotLetter(str) {
    var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v'
        , 'w', 'x', 'y', 'z']

    function firstCharIndex(inputChar) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === inputChar) {
                if (i > 0) {
                    return i--;
                } else
                    return 0;
            } else
                return -1
        }
    }

    var firstChar = firstCharIndex(str.charAt(0));
    if (firstChar < 0)
        str = 'undefined';
    else {
        var temparr = [];
        for (var firstcharidx = 0; firstcharidx < str.length; firstcharidx++) {
            temparr.push(arr[firstcharidx]);
        }
        for (var k = 0; k < temparr.length; k++) {
            if (temparr[k] !== str[k]) {
                return temparr[k];
            }
        }
    }
    return str;
}

/**
 * booWho(true) should return true.
 * booWho(false) should return true.
 * booWho([1, 2, 3]) should return false.
 * booWho([].slice) should return false.
 * booWho({ "a": 1 }) should return false.
 * booWho(1) should return false.
 * booWho(NaN) should return false.
 * booWho("a") should return false.
 * booWho("true") should return false.
 * booWho("false") should return false.
 */
function booWho(bool) {
    // What is the new fad diet for ghost developers? The Boolean.
    if (bool === true || bool === false) {
        return true
    }
    else {
        return false
    }
}
/**
 * uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
 * uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
 * uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
 * uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
 */
function uniteUnique(arr) {
    var my_map = new Map();
    for (var i = 0; i < arguments.length; i++) {
        var arrs = arguments[i];
        for (var j = 0; j < arrs.length; j++) {
            my_map.set(arrs[j], arrs[j]);
        }
    }
    return Array.from(my_map);
}


/**
 * convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
 * convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
 * convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
 * convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
 * convertHTML("Shindler's List") should return Shindler&​apos;s List.
 * convertHTML("<>") should return &​lt;&​gt;.
 * convertHTML("abc") should return abc.
 */
function convertHTML(str) {
    // &colon;&rpar;
    var my_map = new Map();
    my_map.set('&', '&​amp;');
    my_map.set('<', '&​lt;');
    my_map.set('>', '&​gt;');
    my_map.set('"', '&​quot;');
    my_map.set('\'', '&​apos;');
    my_map.set('<>', '&​lt;&​gt;');
    for (var i = 0; i < str.length; i++) {
        var selected = my_map.get(str.charAt(i));
        if (my_map.has(str.charAt(i)))
            str = str.replace(str.charAt(i), selected);

    }
    console.log(str);
    return str;
}

/**
 * spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
 * spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
 * spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
 * spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
 * spinalCase("AllThe-small Things") should return "all-the-small-things"
 */

function spinalCase(str) {
    var strArray = ["thisIsSpinalTap", "This Is Spinal Tap", "thisIsSpinalTap", "The_Andy_Griffith_Show", "Teletubbies say Eh-oh", "AllThe-small Things"];
    var newStr = [];
    var len = 0;
    for (var i = 0; i < strArray.length; i++) {
        str = strArray[i];
        for (var charVal = 0; charVal < str.length; charVal++) {
            if (str[charVal] === str[charVal].toUpperCase()) {
                var tempstr = (str.substring(len, charVal)).replace(/([^a-z0-9]+)/gi, '').trim().toLowerCase();
                if (tempstr.length > 0)
                    newStr.push(tempstr);
                len = charVal;
            }
        }
        if (len !== str.length) {
            var tempstrinloop = (str.substring(len, charVal)).replace(/([^a-z0-9]+)/gi, '').trim().toLowerCase();
            if (tempstrinloop.length > 0)
                newStr.push(tempstrinloop);
            len = str.length;
        }
        str = '';

        for (var newStrarr = 0; newStrarr < newStr.length; newStrarr++) {
            if (newStr[newStrarr].length > 0)
                str = str + ' ' + newStr[newStrarr];
        }
        str = str.substring(1, str.length);
        console.log("The str is " + str.replace(/([^a-z0-9]+)/gi, '-').toLowerCase());

    }
    return str.replace(/([^a-z0-9]+)/gi, '-').toLowerCase();
}
function sumFibs(num) {
    var firstCountNumber = 0;
    var secondCountNumber = 1;
    var sum = 0;
    var compileArr = [0, 1];
    for (var i = 0; i <= num; i++) {
        sum = firstCountNumber + secondCountNumber;
        firstCountNumber = secondCountNumber;
        secondCountNumber = sum;
        if (sum % 2 !== 0 && sum <= num)
            compileArr.push(sum);
    }
    sum = 0;
    for (var sumidx = 0; sumidx < compileArr.length; sumidx++) {
        sum = sum + compileArr[sumidx];
    }
    console.log("Final sum is " + sum);
    return sum;
}
function checkOddNumSum(arr, sumVal) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
/**
 * sumPrimes(10) should return 17.
 * sumPrimes(977) should return 73156
 * @param num
 * @returns {*}
 */
function sumAllPrimes(num) {
    var summed = 0;
    var toSumUpArr = [0];
    for (var i = 2; i <= num; i++) {
        if (isPrime(i)) {
            summed = summed + i;
            toSumUpArr.push(i);
        }
    }
    console.log(toSumUpArr);
    return summed;
}
function isPrime(num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num !== 1;
}

/**
 binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") should   return "Aren't bonfires fun!?"
 binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") should return "I love FreeCodeCamp!"
 */
function binaryAgent(str) {
    var data = str;
    var dataArr = data.split(' ');
    var finalArr = [];
    for (var lt = 0; lt < dataArr.length; lt++) {
        finalArr.push(String.fromCharCode(parseInt(dataArr[lt], 2)));
    }

    console.log(finalArr.join(''));
    return finalArr.join('');
}

/**
 steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
 steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
 steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
 steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
 */
function steamrollArray() {
    var arr = [[["a"]], [["b"]]];
    var finalArr = [];
    if (Array.isArray(arr))
        console.log("OK Array");
    for (var i = 0; i < arr.length; i++) {
        if (!checkArray(arr[i]))
            finalArr.push(arr[i]);
    }
    return arr;
}
function checkArray(arr) {
    return Array.isArray(arr)

}

/**

 // Example inventory lists
 var curInv = [
 [21, "Bowling Ball"],
 [2, "Dirty Sock"],
 [1, "Hair Pin"],
 [5, "Microphone"]
 ];

 var newInv = [
 [2, "Hair Pin"],
 [3, "Half-Eaten Apple"],
 [67, "Bowling Ball"],
 [7, "Toothpaste"]
 ];

 updateInventory(curInv, newInv);

 */


function updateInventory() {
    var curInv = [
        [21, "Bowling Ball"],
        [2, "Dirty Sock"],
        [1, "Hair Pin"],
        [5, "Microphone"]
    ];

    var newInv = [
        [2, "Hair Pin"],
        [3, "Half-Eaten Apple"],
        [67, "Bowling Ball"],
        [7, "Toothpaste"]
    ];
    var arr1 = curInv;
    var arr2 = newInv;
    var arr1Map = new Map();
    var arr2Map = new Map();
    var arr3Map = new Map();
    for (var j = 0; j < arr1.length; j++) {
        var data1 = arr1[j][1];
        var data2 = arr1[j][0];
        arr1Map.set(data1, data2);
        arr3Map.set(data1, data2);
    }

    for (var i = 0; i < arr2.length; i++) {
        var keyVal = arr2[i][0];
        var keyData = arr1Map.get(arr2[i][1]);
        var sumVal;
        if (keyData != 'undefined') {

            sumVal = keyVal + keyData;
            arr3Map.set(arr2[i][1], sumVal);
            arr2Map.set(sumVal, arr2[i][1]);
        } else {
            arr3Map.set(arr2[i][1], keyVal);
            arr2Map.set(keyVal, arr2[i][1]);
        }

    }

    var dataInf = Array.from(arr3Map);
    for (var k = 0; k < dataInf.length; k++) {
        arr1.push(dataInf[k][1], dataInf[k][0]);
    }
    return dataInf;


}

/**
 * smallestCommons([1, 5]) should return a number.
 * smallestCommons([1, 5]) should return 60.
 * smallestCommons([5, 1]) should return 60.
 * smallestCommons([1, 13]) should return 360360.
 * smallestCommons([23, 18]) should return 6056820.
 */

// function smallestCommons(min, max) {
//     function range(min, max) {
//         var arr = [];
//         for (var i = min; i <= max; i++) {
//             arr.push(i);
//         }
//         return arr;
//     }
//
//     function gcd(a, b) {
//         return !b ? a : gcd(b, a % b);
//     }
//
//     function lcm(a, b) {
//         return (a * b) / gcd(a, b);
//     }
//
//     var multiple = min;
//     range(min, max).forEach(function (n) {
//         multiple = lcm(multiple, n);
//     });
//
//     return multiple;
// }
function dropElements() {
    calledElement([1, 2, 3, 4], function (n) {
        return n > 5;
    });

}

/**
 * dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2]
 *
 */
function calledElement(arr, func) {
    var newArray = [];
    var idx = arr.find(func);
    if (idx === undefined)
        return newArray;
    else {
        var retIdx = arr.indexOf(idx);

        for (var x = retIdx; x < arr.length; x++)
            newArray.push(arr[x]);
        return newArray;
    }
}
function smallestCommons(arr) {
    // Sort array from greater to lowest
    // This line of code was from Adam Doyle (http://github.com/Adoyle2014)
    arr.sort(function (a, b) {
        return b - a;
    });

    // Create new array and add all values from greater to smaller from the original array.
    var newArr = [];
    for (var i = arr[0]; i >= arr[1]; i--) {
        newArr.push(i);
    }

    // Variables needed declared outside the loops.
    var quot = 0;
    var loop = 1;
    var n;

    // run code while n is not the same as the array lenght.
    do {
        quot = newArr[0] * loop * newArr[1];
        for (n = 2; n < newArr.length; n++) {
            if (quot % newArr[n] !== 0) {
                break;
            }
        }

        loop++;
    } while (n !== newArr.length);

    return quot;
}


var Person = function (firstAndLast) {
    var firstAndLastVar = firstAndLast;
    this.getFullName = function () {
        return firstAndLastVar;
    };
    this.getFirstName = function () {
        var arrayOfStrings = firstAndLastVar.split(' ');
        firstAndLastVar = arrayOfStrings.join(' ');
        return arrayOfStrings[0];
    };
    this.getLastName = function () {
        var arrayOfStrings = firstAndLastVar.split(' ');
        firstAndLastVar = arrayOfStrings.join(' ');
        return arrayOfStrings[1];
    };
    this.setFirstName = function (firstName) {
        var arrayOfStrings = firstAndLastVar.split(' ');
        arrayOfStrings[0] = firstName;
        firstAndLastVar = arrayOfStrings.join(' ');
    };
    this.setLastName = function (lastName) {
        var arrayOfStrings = firstAndLastVar.split(' ');
        arrayOfStrings[1] = lastName;
        firstAndLastVar = arrayOfStrings.join(' ');
    };

    this.setFullName = function (firstAndLast) {
        firstAndLastVar = firstAndLast;
    };
    return this;
}
/*
 * truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
 * truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return true.
 * truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return false.
 * truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age") should return false.
 * truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat") should return false
 * truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat") should return true
 * truthCheck([{"single": "yes"}], "single") should return true
 * truthCheck([{"single": ""}, {"single": "double"}], "single") should return false
 * truthCheck([{"single": "double"}, {"single": undefined}], "single") should return false
 * truthCheck([{"single": "double"}, {"single": NaN}], "single") should return false
 *
 */
function truthCheck() {
    var data = [
        {"user": "Tinky-Winky", "sex": "male"},
        {"user": "Dipsy", "sex": "male"},
        {"user": "Laa-Laa", "sex": "female"},
        {"user": "Po", "sex": "female"}];
    var falsedata = [{"user": "Tinky-Winky", "sex": "male", "age": 0}, {
        "user": "Dipsy",
        "sex": "male",
        "age": 3
    }, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}];
    var looker = "age";
    for (key in falsedata) {
        if (falsedata.hasOwnProperty(key)) {
            var tempLookup = falsedata[key][looker];
            if (tempLookup)
                console.log(falsedata[key][looker]);
            else
                console.log("No Cool");
        }
    }
}
/*addTogether(2, 3) should return 5.
 addTogether(2)(3) should return 5.
 addTogether("http://bit.ly/IqT6zt") should return undefined.
 addTogether(2, "3") should return undefined.
 addTogether(2)([3]) should return undefined.
 */
function addTogether() {
    return false;
}
/**
 * sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5]
 * sym([1, 2, 3], [5, 2, 1, 4])
 * sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5]
 * sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should contain only three elements.
 * sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5].
 * sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should contain only three elements.
 * sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should return [2, 3, 4, 6, 7].
 * sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should contain only five elements.
 * sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should return [1, 2, 4, 5, 6, 7, 8, 9].
 * sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should contain only eight elements.
 *
 * @param args
 * @returns {*}
 * [1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5] should return [2, 3, 4, 6, 7]
 */
sym = function () {
    var d = [1, 2, 3];
    var a = [5, 2, 1, 4];
    sym1([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);//[2, 3, 4, 6, 7]
}


function sym1(args) {
    var len = arguments.length;
    var returnVar = [];
    for (var itrts = 0; itrts < len; itrts++) {
        var argarray= arguments[itrts];
        var uniqueArray = argarray.filter(function(item, pos, self) {
            return self.indexOf(item) == pos;
        })
        returnVar= printTwoArrays(returnVar, uniqueArray);
    }
    return returnVar;

}
printTwoArrays = function (args) {
    var myMap = new Map();
    var returnArray=[];
    var firstLoop = arguments[0];
    var secondLoop = arguments[1];
    var removeMap = new Map();
    for (var firstLoopIdx = 0; firstLoopIdx < firstLoop.length; firstLoopIdx++) {
        if (!myMap.has(firstLoop[firstLoopIdx]))
            myMap.set(firstLoop[firstLoopIdx], firstLoop[firstLoopIdx]);
    }
    for (var secondLoopIdx = 0; secondLoopIdx < secondLoop.length; secondLoopIdx++) {
        if (myMap.has(secondLoop[secondLoopIdx]))
            removeMap.set(secondLoop[secondLoopIdx], secondLoop[secondLoopIdx]);
        else
            myMap.set(secondLoop[secondLoopIdx], secondLoop[secondLoopIdx]);
    }
    myMap.forEach(function (value, key) {
        console.log("My Map " + value);
    });
    removeMap.forEach(function (value, key) {
        console.log("Remove Map " + value);
    });
    removeMap.forEach(function (value, key) {
        if (myMap.has(key)) {
            myMap.delete(key);
        }
    });
    myMap.forEach(function (value, key) {
        console.log(key + ' = ' + value);
        returnArray.push(key);
    });
    return returnArray;
}

/*
 steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
 steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
 steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
 steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
 */
function steamrollArray() {
    var initArr = [[["a"]], [["b"]]];
    var veryFlatArr = flatten(initArr);
    console.log(flatten(initArr));
    // var initArr = [[["a"]], [["b"]]];
    var flatArr = [];
    for (var i = 0; i < initArr.length; i++) {
        var returnVal = iterateArray(initArr[i]);
        console.log("Got returned with " + returnVal);
        if (Array.isArray(returnVal)) {
            for (var j = 0; j < returnVal.length; j++) {
                if (flatArr.indexOf(returnVal[j]) == -1) {
                    flatArr.push(returnVal[j]);
                }
            }
        } else if (flatArr.indexOf(returnVal) == -1) {
            flatArr.push(returnVal);
        }
    }
    var returnFinalAtr = [];
    for (var finalitr = 0; finalitr < flatArr.length; finalitr++) {
        if (!Array.isArray(flatArr[finalitr]))
            returnFinalAtr.push(flatArr[finalitr]);
    }
    console.log('The length is' + returnFinalAtr);
    return [];
}
function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
}
function iterateArray(vardata) {
    var newFlatArr = [];
    if (Array.isArray(vardata)) {
        for (var k = 0; k < vardata.length; k++) {
            if (!vardata[k].length === 1) {
                iterateArray(vardata[k]);
            } else {
                newFlatArr.push(vardata[k]);
            }
            iterateArray(vardata[k]);
        }
    }
    newFlatArr.push(vardata);
    return newFlatArr;
}

