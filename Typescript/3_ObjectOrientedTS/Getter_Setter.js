// tsc -t es5 Getter_Setter.ts
var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (theAge) {
            if (theAge <= 0 || theAge >= 200) {
                throw new Error('The age is invalid');
            }
            this._age = theAge;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (theFirstName) {
            if (!theFirstName) {
                throw new Error('Invalid first name.');
            }
            this._firstName = theFirstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (theLastName) {
            if (!theLastName) {
                throw new Error('Invalid last name.');
            }
            this._lastName = theLastName;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.getAge = function () {
        return this._age;
    };
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var personObj = new Person();
personObj.age = 110;
console.log(personObj.getAge());
personObj.firstName = 'abc';
personObj.lastName = 'xyz';
console.log(personObj.getFullName());
