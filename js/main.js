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
    var my_map= new Map()
    for(var i=0;i<str.length;i++){
        my_map.set(str[i],str[i]);
    }
   return str;
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
        console.log(temparr);
        for (var k = 0; k < temparr.length; k++) {
            if (temparr[k] !== str[k]) {
                console.log(temparr[k]);
                return temparr[k];
            }
        }
    }
    return str;
}

