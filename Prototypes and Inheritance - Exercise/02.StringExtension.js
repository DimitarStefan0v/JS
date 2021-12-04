(function() {
    String.prototype.ensureStart = function(str) {
        if (this.startsWith(str)) {
            return this.toString();
        }

        return str + this;
    };

    String.prototype.ensureEnd = function(str) {
        if (this.endsWith(str)) {
            return this.toString();
        }

        return this + str;
    };

    String.prototype.isEmpty = function() {
        if(this.length == 0) {
            return true;
        }

        return false;
    };
})()

let str = 'my string';
console.log(str = str.ensureStart('my'));
console.log(str = str.ensureStart('hello '));
console.log(str.isEmpty());
