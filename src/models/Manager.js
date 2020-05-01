/**
 * Siradaki hayvanlari doktorlara veren class.
 */
class Manager {
    constructor() {
        this.line = new Line();
        this.doneArray = [];
        this.doktors = [new Doktors("Niyazi Gül", ["anchovy", "cat"], 0),
            new Doktors("Yasemin", "crow", 0),
            new Doktors("Cabbar", "cat", 0),
            new Doktors("Eleni", "anchovy", 0)
        ]
        this.NiyaziAnchovyCounter = 0;
        this.NiyaziCatCounter = 0;
        this.YaseminCrowCounter = 0;
        this.CabbarCatCounter = 0;
        this.EleniAncohvyCounter = 0;
        this.startToSimulation();
    }

    /**
     * Sirasi gelen Anchovyi Niyazi doktora muayene ettiriyor. 
     */
    takeAnchoviesForNiyazi() {
        for (let i = 0; i < this.line.anchovyLine.length; i++) {
            if (this.doktors[0].time == 180) {
                break;
            } else {
                this.doneArray.push(this.line.anchovyLine[0]);
                this.line.anchovyLine.shift();
                this.doktors[0].time = this.doktors[0].time + 2;
                this.doktors[0].time++
                this.NiyaziAnchovyCounter++;
            }
        }
        return this.NiyaziAnchovyCounter;
    }

    /**
     * Sirasi gelen Cati Niyazi doktora muayene ettiriyor.
     */
    takeCatsForNiyazi() {
        for (let i = 0; i < this.line.catLine.length; i++) {
            if (this.doktors[0].time == 180) {
                break;
            } else {
                this.doneArray.push(this.line.catLine[0]);
                this.line.catLine.shift();
                this.doktors[0].time = this.doktors[0].time + 6;
                this.doktors[0].time++
                this.NiyaziCatCounter++;
            }
        }
        return this.NiyaziCatCounter;
    }

    /**
     * Sirasi gelen Crowu Yasemin doktora muayene ettiriyor.
     */
    takeCrowsForYasemin() {
        for (let i = 0; i < this.line.crowLine.length; i++) {
            if (this.doktors[1].time == 180) {
                break;
            } else {
                this.doneArray.push(this.line.crowLine[0]);
                this.line.crowLine.shift();
                this.doktors[1].time = this.doktors[1].time + 4;
                this.doktors[1].time++
                this.YaseminCrowCounter++;
            }
        }
        return this.YaseminCrowCounter
    }

    /**
     * Sirasi gelen Cati Cabbar doktora muayene ettiriyor.
     */
    takeCatsForCabbar() {
        for (let i = 0; i < this.line.catLine.length; i++) {
            if (this.doktors[2].time == 180) {
                break;
            } else {
                this.doneArray.push(this.line.catLine[0]);
                this.line.catLine.shift();
                this.doktors[2].time = this.doktors[2].time + 6;
                this.doktors[2].time++
                this.CabbarCatCounter++;
            }
        }
        return this.CabbarCatCounter;
    }

    /**
     * Sirasi gelen Anchovyi Eleni doktora muayene ettiriyor.
     */
    takeAnchoviesForEleni() {
        for (let i = 0; i < this.line.anchovyLine.length; i++) {
            if (this.doktors[3].time == 180) {
                break;
            } else {
                this.doneArray.push(this.line.anchovyLine[0]);
                this.line.anchovyLine.shift();
                this.doktors[3].time = this.doktors[3].time + 2;
                this.doktors[3].time++
                this.EleniAncohvyCounter++
            }
        }
        return this.EleniAncohvyCounter;
    }

    /**
     * Simülasyonu baslatir.
     */
    startToSimulation() {
        this.takeAnchoviesForNiyazi();
        this.takeCatsForNiyazi();
        this.takeCrowsForYasemin();
        this.takeCatsForCabbar();
        this.takeAnchoviesForEleni();
        return this.doneArray;
    }
}