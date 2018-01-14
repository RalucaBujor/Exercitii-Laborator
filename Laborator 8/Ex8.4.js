function multiplicator(element) {
    return 2 * element;
}

Array.prototype.map = function map(multiplicator) {
    for (i=0;i<this.length;i++) {
        this[i]=multiplicator(this[i]);
    }
    return this;
}

console.log([4,5,6].map(multiplicator)); 