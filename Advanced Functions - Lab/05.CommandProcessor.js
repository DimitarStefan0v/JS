function solution() {
    let internalString = '';

    function append(string) {
        internalString += string;
    }

    function removeStart(n) {
        internalString = internalString.slice(n);
    }

    function removeEnd(n) {
        internalString = internalString.slice(0, internalString.length - n);
    }

    function print() {
        console.log(internalString);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    };
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();