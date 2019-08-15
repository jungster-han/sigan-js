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

    getTodayDate(format: String) {
        let today = new Date();
        var dd = String(today.getDate()).length > 1 ? String(today.getDate()) : '0' + String(today.getDate());
        var mm = String(today.getMonth() + 1).length > 1 ? String(today.getMonth() + 1) : '0' + String(today.getMonth() + 1)
        var yyyy = today.getFullYear();

        return mm + format + dd + format + yyyy;

    }

    getStartTime() {
        return this.startTime;
    }

    setStartTime(startTime: number) {
        this.startTime = startTime;
        return this;
    }

    saveElapsedTime() {
        this.savedTimeList.push(this.getElapsedTime());
    }

    static new() {
        return new Chronograph();
    }

}