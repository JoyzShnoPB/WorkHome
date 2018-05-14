function Base () {
    this.numbers = [];
 }
 
 Base.prototype = {
    addNumbers: function(number) {
        this.numbers.push(number);
    }
 }
 
let ele = new Base ();
ele.addNumbers(12);
ele.addNumbers(15);
alert(ele.numbers);

