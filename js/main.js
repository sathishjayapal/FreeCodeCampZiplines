function whatIsInAName(collection, source) {
    collection = [{first: "Romeo", last: "Montague"}, {first: "Mercutio", last: null}];
    source = {first: "Tybalt", last: "Capulet"};
    for (var newobject in collection) {
        var collectedObject= collection[newobject];
        for (var name in collectedObject) {
            if (collectedObject.hasOwnProperty(name)) {
                console.log('this is fog (' +
                    name + ') for sure. Value: ' + collectedObject[name]);
            }
            else {
                console.log(name); // toString or something else
            }
        }
    }
}

