Array.prototype.myFilter = function(callback, thisArg) {
    const filteredArr = [];
    
    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            if (callback.call(thisArg, this[i], i, this)) {
                filteredArr.push(this[i]);
            }
        }
    }

    return filteredArr;
}

const arr = [1, 4, 2, 6, 0];
console.log(arr.myFilter(num => num > 3));