(function () {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };

    Array.prototype.skip = function (n) {
        // this.splice(0, n);
        // return this;
        let result = [];
        for(let i = n; i < this.length; i++){
            result.push(this[i]);
        }
        return result;
    };

    Array.prototype.take = function (n) {
        this.splice(n, this.length - 1);
        return this;
    };

    Array.prototype.sum = function () {
        const reducer = (previousValue, currentValue) => previousValue + currentValue;
        return this.reduce(reducer);
    };

    Array.prototype.average = function () {
        return this.sum() / this.length;
    };
})()
const arr = [1, 5, 7, 9, 15];

console.log('original array [1 ,5, 7, 9, 15] with last() func ---> ' + arr.last());
console.log('original array [1 ,5, 7, 9, 15] with skip(n) func ---> ' + arr.skip(2));

const newArr = [1, 3, 5, 7, 9, 11, 13, 15];

console.log('original array [1, 3, 5, 7, 9, 11, 13, 15] with take(n) func ---> ' + newArr.take(4));
console.log('original array [1, 3, 5, 7] with sum() func ---> ' + newArr.sum());
console.log('original array [1, 3, 5, 7] with average() func ---> ' + newArr.average());