/**
 * Rastgele deger döndüren class.
 */
class Utility {
    constructor() {}

    /**
     * Rastgele yas döndürür.
     */
    generateRandomAge() {
        return Math.ceil(Math.random() * 10);
    }

    /**
     * Rastgele sahte isim döndürür. Fake API araciligiyla alir.
     */
    generateRandomName() {
        return faker.name.findName();
    }
}