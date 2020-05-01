class Line {
    constructor() {
        this.anchovyLine = [];
        this.catLine = [];
        this.crowLine = [];
    }

    returnAnchovy(){
        return this.anchovyLine.push(new Pets(new Utility().generateRandomName(), "anchovy", new Utility().generateRandomAge(), 2, 40))
    }

    addAnchovyToArray() {
        let randomer = Math.ceil(Math.random() * 100);
        for (let i = 0; i < randomer; i++) {
            this.returnAnchovy();
        }
        console.log(this.anchovyLine)
    }

    returnCat(){
        return this.catLine.push(new Pets(new Utility().generateRandomName(), "cat", new Utility().generateRandomAge(), 6, 100));
    }

    addCatToArray(){
        let randomer = Math.ceil(Math.random() * 100);
        for (let i = 0; i < randomer; i++) {
            this.returnCat();
        }
        console.log(this.catLine)
    }

    returnCrow(){
        return this.crowLine.push(new Pets(new Utility().generateRandomName(), "crow", new Utility().generateRandomAge(), 4, 150));
    }

    addCrowToArray(){
        let randomer = Math.ceil(Math.random() * 100);
        for (let i = 0; i < randomer; i++) {
            this.returnCrow();
        }
        console.log(this.crowLine)
    }
}