/**
 * Tablo icin hesaplamalari yapan class.
 */
class Calculation {
    constructor() {
        this.manager = new Manager();
        this.line = new Line();
    }

    /**
     * Geriye kalan Anchovyleri döndürür.
     */
    calculateAnchovies() {
        return this.line.anchovyLine.length;
    }

    /**
     * Geriye kalan Catleri döndürür.
     */
    calculateCats() {
        return this.line.catLine.length;
    }

    /**
     * Geriye kalan Crowlari döndürür.
     */
    calculateCrow() {
        return this.line.crowLine.length;
    }

    /**
     * Tedavi edilen Anchovy oranini hesaplar.
     */
    percentageOfAnchovies() {
        return Math.floor(((this.manager.NiyaziAnchovyCounter + this.manager.EleniAncohvyCounter) * 100) / (this.calculateAnchovies() + this.manager.NiyaziAnchovyCounter + this.manager.EleniAncohvyCounter))
    }

    /**
     * Tedavi edilen Cat oranini hesaplar.
     */
    percentageOfCats() {
        return Math.floor(((this.manager.NiyaziCatCounter + this.manager.CabbarCatCounter) * 100) / (this.calculateCats() + this.manager.NiyaziCatCounter + this.manager.CabbarCatCounter));
    }

    /**
     * Tedavi edilen Crow oranini hesaplar.
     */
    percentageOfCrows() {
        return Math.floor(((this.manager.YaseminCrowCounter) * 100) / (this.calculateCrow() + this.manager.YaseminCrowCounter));
    }
}