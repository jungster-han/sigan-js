export default class Chronograph {
    private startTime: number;

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

    static new() {
        return new Chronograph();
    }

}