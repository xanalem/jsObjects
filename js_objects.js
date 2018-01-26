function Cube(length, mass) {
    this.length = length;
    this.mass = mass;
    this.volume = Math.pow(length, 3);
    this.density = this.mass / this.volume;
    this.surfaceArea = Math.pow(length, 2) * length * 2;

}


//----------------------------------------------------------//

function Person(firstName, lastName, bday) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.bday = new Date(bday);
    this.sayHi = sayHi;
    this.age = age;
    this.getSign = getSign;
}

function sayHi() {
    var today = new Date();
    var hour = today.getHours();
    var day = today.getDay();
    if (hour < 10) {
        if (day == 0 || day == 6) {
            return "Go back to sleep! Its the weekend!";
        } else if (day == 1) {
            return "Ugh, its a Monday monring!";
        } else {
            return "Good Morning!";
        }
    } else if (hour < 18) {
        if (day == 0 || day == 6) {
            return "Hope you are having a great weekend!";
        } else {
            return "Good Day!";
        }
    } else {
        if (day == 0) {
            return "Enjoy your evening...tomorrow is Monday!"
        } else {
            return "Good Evening!";
        }
    }
}

function age() {
    var today = new Date();
    var birth = new Date(this.bday);
    var years = Math.floor((today.getTime() - birth.getTime()) / 31536000000);
    return years;
}


function getSign() {
    var birth = new Date(this.bday);
    var year = birth.getFullYear();
    //91.6% of the time, it works everytime

    if (year % 12 === 0) {
        return "Monkey 猴!";
    } else if (year % 12 === 1) {
        return "Rooster 雞!";
    } else if (year % 12 === 2) {
        return "Dog 狗!";
    } else if (year % 12 === 3) {
        return "Boar 豬!";
    } else if (year % 12 === 4) {
        return "Rat 鼠!";
    } else if (year % 12 === 5) {
        return "Ox 牛!";
    } else if (year % 12 === 6) {
        return "Tiger 虎!";
    } else if (year % 12 === 7) {
        return "Rabbit 兔!";
    } else if (year % 12 === 8) {
        return "Dragon 龍!";
    } else if (year % 12 === 9) {
        return "Snake 蛇!";
    } else if (year % 12 === 10) {
        return "Horse 馬!";
    } else {
        return "Ram 羊!";
    }
}

//----------------------------------------------------------//

function Pet(name, species) {
    this.name = name;
    this.species = species.toLowerCase();
    this.sleepy = 0;
    this.hunger = 0;
    this.awake = true;
    this.speak = speak;
    this.eat = eat;
    this.nap = nap;
    this.wakeUp = wakeUp;
    this.shake = shake;
    this.rollOver = rollOver;
    this.fetch = fetch;

    function speak() {
        if (this.species == "dog") {
            this.hunger = this.hunger + 1;
            this.sleepy = this.sleepy + 1;
            return "Woof! That means I love you!";
        } else if (this.species == "cat") {
            this.hunger = this.hunger + 1;
            this.sleepy = this.sleepy + 1;
            return "Ugh. meow.";
        }
    }


    function eat() {
        if (this.species == "cat") {
            this.hunger = 0;
            this.sleepy = this.sleepy + 1;
            return "Ugh. I guess I'll eat this.";
        } else if (this.species == "dog") {
            this.eat = 0;
            this.sleepy = this.sleepy + 1;
            return "Nom nom nom nom. Yum, thank you for this delicious food! I love you!";
        }

    }

    function nap() {
        this.sleepy = 0;
        this.awake = false;
        return "Zzzz...";
    }

    function wakeUp() {
        if (this.species == "cat") {
            this.awake = true;
            this.sleepy = 0;
            this.hunger = 4;
            return "Ugh, I'm awake now. Is there anything to eat around here?";
        } else if (this.species == "dog") {
            this.awake = true;
            this.sleepy = 0;
            this.hunger = 4;
            return "I'm awake! Let's eat and then play! I love you!";
        }

    }

    function shake() {

        if (this.awake == false) {
            return "Zzzz..."
        } else if (this.species == "dog" && this.sleepy < 5 && this.hunger < 4) {
            this.hunger = this.hunger + 1;
            this.sleepy = this.sleepy + 1;
            return "Nice to meet you!I love you!";
        } else if (this.species == dog && this.sleepy >= 5) {
            return "Yawn. Let's play after a nap. I love you!";
        } else if (this.species == "dog" && this.hunger >= 4) {
            return "I'm hungry! Let's eat first. I love you!";
        } else if (this.species == "cat" && this.sleepy < 5 && this.hunger < 4) {
            return "Ugh. I'm a cat. I never shake";
        } else if (this.species == "cat" && this.sleepy >= 5) {
            return "Ugh. I need a 12 hour nap first.";
        } else if (this.species == "cat" && this.hunger >= 4) {
            return "Ugh. Feed me before I 'll even think about it.";
        }

    }

    function rollOver() {

        if (this.awake == false) {
            return "Zzzz..."
        } else if (this.species == "dog" && this.sleepy < 5 && this.hunger < 4) {
            this.hunger = this.hunger + 1;
            this.sleepy = this.sleepy + 1;
            return "Rolling! Now what? I love you!";
        } else if (this.species == "dog" && this.sleepy >= 5) {
            return "Yawn. Let's play after a nap. I love you!";
        } else if (this.species == "dog" && this.hunger >= 4) {
            return "I'm hungry! Let's eat first. I love you!";
        } else if (this.species == "cat" && this.sleepy < 5 && this.hunger < 4) {
            return "Ugh. I'm a cat. I only roll over if I want to.";
        } else if (this.species == "cat" && this.sleepy >= 5) {
            return "Ugh. I need a 12 hour nap first.";
        } else if (this.species == "cat" && this.hunger >= 4) {
            return "Ugh. Feed me before I 'll even think about it.";
        }

    }

    function fetch() {

        if (this.awake == false) {
            return "Zzzz...";
        } else if (this.species == "dog" && this.hunger < 4 && this.sleepy < 5) {
            this.hunger = this.hunger + 1;
            this.sleepy = this.sleepy + 1;
            return "Must get the stick! I love you!";
        } else if (this.species == "cat" && this.hunger < 4 && this.sleepy < 5) {
            return "Ugh. I'm a cat. I don't fetch.";
        } else if (this.species == "cat" && this.hunger >= 4) {
            return "Ugh. Feed me before I'll even think about it.";
        } else if (this.species == "dog" && this.hunger >= 4) {
            return "I'm hungry! Let's eat first. I love you!";
        } else if (this.species == "cat" && this.sleepy >= 5) {
            return "Ugh. I need a 12 hour nap first.";
        } else if (this.species == "dog" && this.sleepy >= 5) {
            return "Yawn. Let's play after a nap. I love you!";
        }
    }
}
