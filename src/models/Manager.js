class Manager{
    constructor(){
        this.line = new Line();
        this.startToSimulation();
    }

    startToSimulation(){
        this.line.addAnchovyToArray();
        this.line.addCatToArray();
        this.line.addCrowToArray();
    }
}