class Utility{
    constructor(){}

    generateRandomAge() {
        return Math.ceil(Math.random() * 10);
    }

    generateRandomName() {
        return faker.name.findName();
    }
}