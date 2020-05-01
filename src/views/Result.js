/**
 * Sonuclari ekrana yazdiran class.
 */
class Result {
    constructor() {
        this.line = new Line();
        this.manager = new Manager();
        this.resultView = document.querySelector("#result-view");
        this.refreshButton = document.querySelector("#refresh");
        this.calculation = new Calculation();
        this.addToDom();
        this.addListenerButton();
    }

    /**
     * Sonuclari tablolar halinde sayfaya yazdirir.
     */
    addToDom() {
        let sum = this.calculation.calculateAnchovies() + this.calculation.calculateCats() +
            this.calculation.calculateCrow() + this.manager.NiyaziAnchovyCounter +
            this.manager.NiyaziCatCounter + this.manager.YaseminCrowCounter + this.manager.CabbarCatCounter +
            this.manager.EleniAncohvyCounter;
        let sumNiyazi = this.manager.NiyaziAnchovyCounter + this.manager.NiyaziCatCounter;
        let countNiyazi = (this.manager.NiyaziAnchovyCounter * 40) + (this.manager.NiyaziCatCounter * 100);
        let table = `<table class="table table-bordered table-hover">`
        table += `<thead class="thead-dark">
                    <th>How many pet apply for treatment?</th>
                </thead>`
        table += `  <tr>
                    <td>${sum}</td>
                    </tr>
                    `
        table += `</table>`
        table += `<table class="table table-bordered table-hover">`
        table += `<thead class="thead-dark">
                <th>Doktors</th>
                <th>How many pets have been cured?</th>
                <th>How much income is generated?</th>
                </thead>`
        table += `  <tr>
                <td>Niyazi Gül</td>
                <td>${sumNiyazi}</td>
                <td>${countNiyazi}$</td>
                </tr>
                <tr>
                <td>Yasemin</td>
                <td>${this.manager.YaseminCrowCounter}</td>
                <td>${this.manager.YaseminCrowCounter*150}$</td>
                </tr>
                <tr>
                <td>Cabbar</td>
                <td>${this.manager.CabbarCatCounter}</td>
                <td>${this.manager.CabbarCatCounter*100}$</td>
                </tr>
                <tr>
                <td>Eleni</td>
                <td>${this.manager.EleniAncohvyCounter}</td>
                <td>${this.manager.EleniAncohvyCounter*40}$</td>
                </tr>`
        table += `</table>`
        table += `<table class="table table-bordered table-hover">`
        table += `<thead class="thead-dark">
                    <th colspan=2>Untreated Pets</th>
                    <th>Percentage of treated</th>
                </thead>`
        table += `<tr>
                    <td>Anchovy</td>
                    <td>${this.calculation.calculateAnchovies()}</td>
                    <td>%${this.calculation.percentageOfAnchovies()}</td>
                </tr>
                <tr>
                    <td>Cat</td>
                    <td>${this.calculation.calculateCats()}</td>
                    <td>%${this.calculation.percentageOfCats()}</td>
                </tr>   
                <tr>
                    <td>Crow</td>
                    <td>${this.calculation.calculateCrow()}</td>
                    <td>%${this.calculation.percentageOfCrows()}</td>
                </tr>`
        table += `</table>`
        this.resultView.innerHTML = table;
    }

    /**
     * Sayfa yenilemesi ve simülasyon tekrari icin EventListner olusturur.
     */
    addListenerButton() {
        this.refreshButton.addEventListener('click', () => {
            location.reload()
        })
    }
}