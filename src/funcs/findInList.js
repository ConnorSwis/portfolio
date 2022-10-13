function findInList(key, value, list) {
    for (var item in list) {
        if (item[key] === value) {
            return item;
        }
    }
}

export default findInList;