import Chronograph from '../src/chronograph';

describe('Verify Chronograph class', () => {

    it('Is able to calculate and return elapsed time in seconds', done => {
        let chronograph = new Chronograph();
        setTimeout(() => {
            expect(chronograph.getElapsedTime()).toBeGreaterThanOrEqual(3000);
            expect(chronograph.getElapsedTime()).toBeLessThan(3099)
            done();
        }, 3000)
    });

    it('Is able to set start time and return elapse time from that moment', done => {
        let chronograph = new Chronograph();
        setTimeout(() => {
            chronograph.setStartTime(Date.now());
            setTimeout(() => {
                expect(chronograph.getElapsedTime()).toBeGreaterThanOrEqual(2000);
                expect(chronograph.getElapsedTime()).toBeLessThan(2099)
                done();
            }, 2000);
        }, 1000);
    });

    it('Is able to set time in the past and return time elapsed from that moment', () => {
        let chronograph = new Chronograph();
        let setDate = new Date("1 July 2019 07:45:00 GMT")
        chronograph.setStartTime(setDate.getTime());
        expect(Math.floor(chronograph.getElapsedTime() / 1000)).toBe(Math.floor((Date.now() - setDate.getTime()) / 1000));
    });

    it('Is able to set time in the future and return time to that moment in negative number', () => {
        let chronograph = new Chronograph();
        let setDate = new Date("Wed, 4 July 2019 07:45:00 GMT")
        chronograph.setStartTime(setDate.getTime());
        expect(Math.floor(chronograph.getElapsedTime() / 1000)).toBe(Math.floor((Date.now() - setDate.getTime()) / 1000));
    });

    it('Return today date separated by "/"', () => {
        let chronograph = new Chronograph();
        console.log(chronograph.getTodayDate('-'));
    })
});