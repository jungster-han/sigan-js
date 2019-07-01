export default class Chronograph {
    startTime: Date;

    constructor(startTime) {
        this.startTime = startTime;
    }

    getElapsedTime() {
        if (this.startTime == null) {
            throw 'Start time is not set'
        } else {
            Date.now() - this.startTime.getTime();
        }
    }

    setStartTime(startTime: Date) {
        this.startTime = startTime;
    }

}