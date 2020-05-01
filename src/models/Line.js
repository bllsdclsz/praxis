/**
 * Arraylerle sira olusturan class.
 */
class Line {
    constructor() {
        this.anchovyLine = [];
        this.catLine = [];
        this.crowLine = [];
        this.addAnchovyToArray();
        this.addCatToArray();
        this.addCrowToArray();
    }

    /**
     * Anchovy olusturur.
     */
    returnAnchovy() {
        return this.anchovyLine.push(new Pets(new Utility().generateRandomName(), "anchovy", new Utility().generateRandomAge(), 2, 40))
    }

    /**
     * Anchovyleri rastgele arraye ekler.
     */
    addAnchovyToArray() {
        let randomer = Math.ceil(Math.random() * 100);
        for (let i = 0; i < randomer; i++) {
            this.returnAnchovy();
        }
    }

    /**
     * Cat olusturur.
     */
    returnCat() {
        return this.catLine.push(new Pets(new Utility().generateRandomName(), "cat", new Utility().generateRandomAge(), 6, 100));
    }

    /**
     * Catleri rastgele arraye ekler.
     */
    addCatToArray() {
        let randomer = Math.ceil(Math.random() * 100);
        for (let i = 0; i < randomer; i++) {
            this.returnCat();
        }
    }

    /**
     * Crow olusturur.
     */
    returnCrow() {
        return this.crowLine.push(new Pets(new Utility().generateRandomName(), "crow", new Utility().generateRandomAge(), 4, 150));
    }

    /**
     * Crowlari rastgele arraye ekler.
     */
    addCrowToArray() {
        let randomer = Math.ceil(Math.random() * 100);
        for (let i = 0; i < randomer; i++) {
            this.returnCrow();
        }
    }
}