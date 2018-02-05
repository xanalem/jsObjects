QUnit.test("Test the Cube.", function (assert) {
    var myCube = new Cube(10, 10);
    assert.equal(myCube.length, 10, "Created a cube.");
    assert.equal(myCube.volume, 1000, "Cube has correct volume.");
    assert.equal(myCube.density, .01, "Cube has correct density.");
    assert.equal(myCube.surfaceArea, 600, "Cube surface area is correct.");
    //assert.equal(myCube.volume(), 1000, "Cube has correct volume.");
    //assert.equal(myCube.density(), .01, "Cube has correct density.");
    //assert.equal(myCube.surfaceArea(), 600, "Cube surface area is correct.");
})

QUnit.test("Test the Person.", function (assert) {
    var peep = new Person("Bob", "Smith", "11/15/1971");
    assert.deepEqual((peep.firstName || peep.firstname || peep.first_name), "Bob", "Created a Person.");
    assert.ok(peep.sayHi(), "Person can sayHi.");
    assert.deepEqual(peep.getSign(), ("Scorpio" || "scorpio"), "Person has the correct zodiac sign!");
    assert.deepEqual(peep.age(), 46, "Person has correct age.");
})

QUnit.test("Test a Pet that is a Dog.", function (assert) {
    var myPet = new Pet("Sparky", "Dog");
    assert.deepEqual(myPet.species, "Dog", "Success - Created a Pet whose species is Dog.");
    assert.deepEqual(myPet.speak(), "Woof! That means I love you!", "Success - Dog can speak!");
    assert.equal(myPet.hunger, 1, "Success - Dog gets hungry after speaking");
    assert.equal(myPet.sleepy, 1, "Success - Dog gets sleepy after speaking");
    assert.deepEqual(myPet.eat(), "Nom nom nom nom. Yum, thank you for this delicious food! I love you!", "Success - Dog says: Nom nom nom nom. Yum, thank you for this delicious food! I love you!");
    assert.equal(myPet.hunger, 0, "Success - Dog is no longer hungry after eating.");
    assert.equal(myPet.sleepy, 2, "Success - Dog is now more tired after eating.");
    assert.deepEqual(myPet.nap(), "Zzzz...", "Success - Dog can take a nap.");
    assert.equal(myPet.awake, false, "Success - Dog is not awake when napping");
    assert.deepEqual(myPet.wakeUp(), "I'm awake! Let's eat and then play! I love you!", "Success - Dog has woken up!");
    assert.equal(myPet.sleepy, 0, "Success - Dog is no longer sleepy after nap.");
    assert.equal(myPet.hunger, 4, "Success - Dog is super hungry (4) after nap.");
})

QUnit.test("Test a Pet that is a Cat.", function (assert) {
    var myPet = new Pet("Fluffy", "Cat");
    assert.deepEqual(myPet.species, "Cat", "Success - Created a Pet whose species is Cat.");
    assert.deepEqual(myPet.speak(), "Ugh. Meow.", "Cat can speak.");
    assert.equal(myPet.hunger, 1, "Success - Cat is hungry after speaking.");
    assert.equal(myPet.sleepy, 1, "Success - Cat is more sleepy after speaking");
    assert.deepEqual(myPet.eat(), "Ugh, I guess I'll eat this.", "Success - Cat can eat!");
    assert.equal(myPet.hunger, 0, "Success - Cat is no longer hungry after eating.");
    assert.equal(myPet.sleepy, 2, "Success - Cat is now more tired after eating.");
    assert.deepEqual(myPet.nap(), "Zzzz...", "Success - Cat cat sleep.");
    assert.equal(myPet.awake, false, "Success - Cat is not awake when napping");
    assert.deepEqual(myPet.wakeUp(), "Ugh, I'm awake now. Is there anything to eat around here?", "Success - Cat has woken up!");
    assert.equal(myPet.sleepy, 0, "Success - Cat is no longer sleepy after a nap.");
    assert.equal(myPet.hunger, 4, "Success - Cat is super hungry (4) after a nap.");
})

/**
QUnit.test("Test the shake behavior.", function (assert) {
    var myPet = new Pet("test", "Dog");
    var result = myPet.shake();
    assert.deepEqual(result, "Nice to meet you! I love you!", "Success - a dog can shake!");
    result = myPet.shake();
    result = myPet.shake();
    result = myPet.shake();
    result = myPet.shake();
    assert.deepEqual(result, "I'm hungry! Let's eat first. I love you!", "Success - a dog won't shake if it's hungry");
    myPet.hunger = 0;
    myPet.sleepy = 5;
    result = myPet.shake();
    assert.deepEqual(result, "Yawn. Let's play after a nap. I love you!", "Success - a dog won't shake if it's sleepy");
    myPet.hunger = 0;
    myPet.sleepy = 0;
    myPet.awake = false;
    result = myPet.shake();
    assert.deepEqual(result, "Zzzz...", "Success - a dog won't shake if it's sleeping" );
    myPet = new Pet("test", "Cat");
    var result = myPet.shake();
    assert.deepEqual(result, "Ugh. I'm a cat. I never shake", "Success - cats don't shake!");
    result = myPet.shake();
    result = myPet.shake();
    result = myPet.shake();
    result = myPet.shake();
    assert.deepEqual(result, "Ugh. Feed me before I'll even think about it.", "Success - a cat won't shake if it's hungry");
    myPet.hunger = 0;
    myPet.sleepy = 5;
    result = myPet.shake();
    assert.deepEqual(result, "Ugh. I need a 12 hour nap first.", "Success - a cat won't shake if it's sleepy");
    myPet.hunger = 0;
    myPet.sleepy = 0;
    myPet.awake = false;
    result = myPet.shake();
    assert.deepEqual(result, "Zzzz...", "Success - a cat won't shake if it's sleeping" );
});

QUnit.test("Test the roll over behavior.", function (assert) {
    var myPet = new Pet("test", "Dog");
    var result = myPet.rollOver();
    assert.deepEqual(result, "Rolling! Now what? I love you!", "Success - a dog can roll over!");
    result = myPet.rollOver();
    result = myPet.rollOver();
    result = myPet.rollOver();
    result = myPet.rollOver();
    assert.deepEqual(result, "I'm hungry! Let's eat first. I love you!", "Success - a dog won't roll over if it's hungry");
    myPet.hunger = 0;
    myPet.sleepy = 5;
    result = myPet.rollOver();
    assert.deepEqual(result, "Yawn. Let's play after a nap. I love you!", "Success - a dog won't roll over if it's sleepy");
    myPet.hunger = 0;
    myPet.sleepy = 0;
    myPet.awake = false;
    result = myPet.shake();
    assert.deepEqual(result, "Zzzz...", "Success - a dog won't roll over if it's sleeping" );
    myPet = new Pet("test", "Cat");
    var result = myPet.rollOver();
    assert.deepEqual(result, "Ugh. I'm a cat. I only roll over if I want to.", "Success - cats don't roll over (unless they want to)!");
    result = myPet.rollOver();
    result = myPet.rollOver();
    result = myPet.rollOver();
    result = myPet.rollOver();
    assert.deepEqual(result, "Ugh. Feed me before I'll even think about it.", "Success - a cat won't roll over if it's hungry");
    myPet.hunger = 0;
    myPet.sleepy = 5;
    result = myPet.rollOver();
    assert.deepEqual(result, "Ugh. I need a 12 hour nap first.", "Success - a cat won't roll over if it's sleepy");
    myPet.hunger = 0;
    myPet.sleepy = 0;
    myPet.awake = false;
    result = myPet.shake();
    assert.deepEqual(result, "Zzzz...", "Success - a cat won't roll over if it's sleeping" );
});

QUnit.test("Test the fetch behavior.", function (assert) {
    var myPet = new Pet("test", "Dog");
    var result = myPet.fetch();
    assert.deepEqual(result, "Must get the stick! I love you!", "Success - a dog can fetch!");
    result = myPet.fetch();
    result = myPet.fetch();
    result = myPet.fetch();
    result = myPet.fetch();
    assert.deepEqual(result, "I'm hungry! Let's eat first. I love you!", "Success - a dog won't fetch if it's hungry");
    myPet.hunger = 0;
    myPet.sleepy = 5;
    result = myPet.fetch();
    assert.deepEqual(result, "Yawn. Let's play after a nap. I love you!", "Success - a dog won't fetch if it's sleepy");
    myPet.hunger = 0;
    myPet.sleepy = 0;
    myPet.awake = false;
    result = myPet.shake();
    assert.deepEqual(result, "Zzzz...", "Success - a dog won't fetch if it's sleeping" );
    myPet = new Pet("test", "Cat");
    var result = myPet.fetch();
    assert.deepEqual(result, "Ugh. I'm a cat. I don't fetch.", "Success - cats don't fetch (unless they want to)!");
    result = myPet.fetch();
    result = myPet.fetch();
    result = myPet.fetch();
    result = myPet.fetch();
    assert.deepEqual(result, "Ugh. Feed me before I'll even think about it.", "Success - a cat won't fetch if it's hungry");
    myPet.hunger = 0;
    myPet.sleepy = 5;
    result = myPet.fetch();
    assert.deepEqual(result, "Ugh. I need a 12 hour nap first.", "Success - a cat won't fetch if it's sleepy");
    myPet.hunger = 0;
    myPet.sleepy = 0;
    myPet.awake = false;
    result = myPet.shake();
    assert.deepEqual(result, "Zzzz...", "Success - a cat won't fetch if it's sleeping" );
});
**/
