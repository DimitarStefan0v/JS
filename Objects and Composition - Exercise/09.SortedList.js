function createSortedList() {
    const list = [];

    const obj = {
        add(element) {
            list.push(element);
            list.sort((a, b) => a - b);
            this.size++;
        },
        remove(index) {
            if (index >= 0 && index <= list.length - 1 && list.length > 0) {
                list.splice(index, 1);
                this.size--;
            }
        },
        get(index) {
            if (index >= 0 && index <= list.length - 1 && list.length > 0) {
                return list[index];
            }
        },
        size: 0
    };

    return obj;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));