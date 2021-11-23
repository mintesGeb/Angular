var grade = 90;
var myName = "mintes";
var employee;
employee = {
    id: 23,
    name: "34"
};
var values = [12, 23, 45];
var fruits = ["banana", "orange", "mango"];
var mixed = ["1", 2];
console.log(mixed);
var myEmployee = {};
myEmployee = {
    name: "st"
};
function last_gen(arr) {
    return arr[arr.length - 1];
}
var myNum = last_gen([1, 2, 3]);
var mytext = last_gen(["1", "2", "3", "s"]);
console.log(myNum, mytext);
function display3(id, name) {
    console.log(typeof id + ", " + typeof name);
}
display3(1, "gashe");
var Person2 = /** @class */ (function () {
    function Person2(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    return Person2;
}());
function myPeople(myPerson) {
    console.log(myPerson.firstname, myPerson.lastname);
}
myPeople({ firstname: "1", lastname: "tolosa" });
var kp1 = {
    key: 1,
    value: "mintes"
};
var kp2 = {
    key: "s",
    value: "sdf"
};
var KeyValuepair2 = /** @class */ (function () {
    function KeyValuepair2() {
    }
    KeyValuepair2.prototype.setKeyValue = function (key, val) {
        this.key = key;
        this.val = val;
    };
    KeyValuepair2.prototype.display = function () {
        console.log(this.key, this.val);
    };
    return KeyValuepair2;
}());
var myPair1 = new KeyValuepair2();
myPair1.setKeyValue(1, "s");
myPair1.display();
var myPair2 = new KeyValuepair2();
myPair2.setKeyValue("s1", "sol");
myPair2.display();
