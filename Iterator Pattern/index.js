const items = [2, true, "Joao", 3.1415926535];

function Iterator(items) {
    this.items = items;
    //this.index = 0;
    this.index = items.length - 1;
}

Iterator.prototype = {
    hasNext: function() {
        //return this.index < this.items.length;
        return this.index >= 0
    },
    next: function() {
        // return this.items[this.index++];
        return this.items[this.index--];
    },
};

const iter = new Iterator(items);

//console.log(iter.hasNext());

while (iter.hasNext()) console.log(iter.next());

//console.log(iter.hasNext());