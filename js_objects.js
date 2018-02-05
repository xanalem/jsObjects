function Cube(length, mass) {
    this.length = length;
    this.mass = mass;
    this.volume = Math.pow(length, 3);
    this.density = this.mass / this.volume;
    this.surfaceArea = Math.pow(length, 2) * 6;

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
    var month = birth.getMonth() + 1;
    var day = birth.getDay();

    if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
        return "Capricorn";
    } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
        return "Aquarius";
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        return "Pisces";
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
        return "Aries";
    } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
        return "Taurus";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        return "Gemini";
    } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
        return "Cancer";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
        return "Leo";
    } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
        return "Virgo";
    } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
        return "Libra";
    } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
        return "Scorpio";
    } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
        return "Sagittarius";
    }
}

//----------------------------------------------------------//

function Pet(name, species) {
    this.name = name;
    this.species = species;
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
        if (this.species == "Dog") {
            this.hunger = this.hunger + 1;
            this.sleepy = this.sleepy + 1;
            return "Woof! That means I love you!";
        } else if (this.species == "Cat") {
            this.hunger = this.hunger + 1;
            this.sleepy = this.sleepy + 1;
            return "Ugh. Meow.";
        }
    }


    function eat() {
        if (this.species == "Cat") {
            this.hunger = 0;
            this.sleepy = this.sleepy + 1;
            return "Ugh, I guess I'll eat this.";
        } else if (this.species == "Dog") {
            this.hunger = 0;
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
        if (this.species == "Cat") {
            this.awake = true;
            this.sleepy = 0;
            this.hunger = 4;
            return "Ugh, I'm awake now. Is there anything to eat around here?";
        } else if (this.species == "Dog") {
            this.awake = true;
            this.sleepy = 0;
            this.hunger = 4;
            return "I'm awake! Let's eat and then play! I love you!";
        }

    }

    function shake() {

        if (this.awake == false) {
            return "Zzzz..."
        } else if (this.species == "Dog" && this.sleepy < 5 && this.hunger < 4) {
            this.hunger = this.hunger + 1;
            this.sleepy = this.sleepy + 1;
            return "Nice to meet you!I love you!";
        } else if (this.species == Dog && this.sleepy >= 5) {
            return "Yawn. Let's play after a nap. I love you!";
        } else if (this.species == "Dog" && this.hunger >= 4) {
            return "I'm hungry! Let's eat first. I love you!";
        } else if (this.species == "Cat" && this.sleepy < 5 && this.hunger < 4) {
            return "Ugh. I'm a cat. I never shake";
        } else if (this.species == "Cat" && this.sleepy >= 5) {
            return "Ugh. I need a 12 hour nap first.";
        } else if (this.species == "Cat" && this.hunger >= 4) {
            return "Ugh. Feed me before I 'll even think about it.";
        }

    }

    function rollOver() {

        if (this.awake == false) {
            return "Zzzz..."
        } else if (this.species == "Dog" && this.sleepy < 5 && this.hunger < 4) {
            this.hunger = this.hunger + 1;
            this.sleepy = this.sleepy + 1;
            return "Rolling! Now what? I love you!";
        } else if (this.species == "Dog" && this.sleepy >= 5) {
            return "Yawn. Let's play after a nap. I love you!";
        } else if (this.species == "Dog" && this.hunger >= 4) {
            return "I'm hungry! Let's eat first. I love you!";
        } else if (this.species == "cat" && this.sleepy < 5 && this.hunger < 4) {
            return "Ugh. I'm a cat. I only roll over if I want to.";
        } else if (this.species == "Cat" && this.sleepy >= 5) {
            return "Ugh. I need a 12 hour nap first.";
        } else if (this.species == "Cat" && this.hunger >= 4) {
            return "Ugh. Feed me before I 'll even think about it.";
        }

    }

    function fetch() {

        if (this.awake == false) {
            return "Zzzz...";
        } else if (this.species == "Dog" && this.hunger < 4 && this.sleepy < 5) {
            this.hunger = this.hunger + 1;
            this.sleepy = this.sleepy + 1;
            return "Must get the stick! I love you!";
        } else if (this.species == "Cat" && this.hunger < 4 && this.sleepy < 5) {
            return "Ugh. I'm a cat. I don't fetch.";
        } else if (this.species == "Cat" && this.hunger >= 4) {
            return "Ugh. Feed me before I'll even think about it.";
        } else if (this.species == "Dog" && this.hunger >= 4) {
            return "I'm hungry! Let's eat first. I love you!";
        } else if (this.species == "Cat" && this.sleepy >= 5) {
            return "Ugh. I need a 12 hour nap first.";
        } else if (this.species == "Dog" && this.sleepy >= 5) {
            return "Yawn. Let's play after a nap. I love you!";
        }
    }
}
