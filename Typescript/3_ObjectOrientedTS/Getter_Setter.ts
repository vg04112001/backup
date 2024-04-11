// tsc -t es5 Getter_Setter.ts
class Person {
    private _age: number;
    private _firstName: string;
    private _lastName: string;

    public get age() {
        return this._age;
    }

    public set age(theAge: number) {
        if (theAge <= 0 || theAge >= 200) {
            throw new Error('The age is invalid');
        }
        this._age = theAge;
    }

    public get firstName() {
        return this._firstName;
    }

    public set firstName(theFirstName: string) {
        if (!theFirstName) {
            throw new Error('Invalid first name.');
        }
        this._firstName = theFirstName;
    }

    public get lastName() {
        return this._lastName;
    }

    public set lastName(theLastName: string) {
        if (!theLastName) {
            throw new Error('Invalid last name.');
        }
        this._lastName = theLastName;
    }
    public getAge(): number {
        return this._age;
    }

    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}


var personObj=new Person();
personObj.age=110;
console.log(personObj.getAge());
personObj.firstName = 'abc';
personObj.lastName = 'xyz';
console.log(personObj.getFullName());

