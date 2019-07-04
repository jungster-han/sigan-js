export default class Chronograph {
    private startTime: number;
    private savedTimeList: Array<number>;

    constructor() {
        this.startTime = Date.now()
    }

    getElapsedTime() {
        if (this.startTime == null) {
            throw 'Start time is not set'
        } else {
            return Date.now() - +(this.startTime);
        }
    }

    getStartTime() {
        return this.startTime;
    }

    setStartTime(startTime: number) {
        this.startTime = startTime;
        return this;
    }

    saveElapsedTime(){
        this.savedTimeList.push(this.getElapsedTime());
    }

    static new() {
        return new Chronograph();
    }

}