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
    this.bday = bday;
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

function getSign(day, month) {
    var zodiac = ['', 'Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'];
    var last_day = ['', 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
    return (day > last_day[month]) ? zodiac[month * 1 + 1] : zodiac[month];
}
