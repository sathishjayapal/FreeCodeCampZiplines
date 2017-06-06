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

