const counter = {
    count: 0,
    tick: 1,
    inc() {
        this.count += this.tick;
    },
    dec() {
        this.count -= this.tick;
    },
    now() {
        return this.count;
    },
    setTick(num) {
        this.tick = num;
    }
};
counter.dec();
console.log(counter.now());
counter.inc();
console.log(counter.now());
counter.setTick(4);
counter.dec();
counter.dec();
console.log(counter.now());
counter.inc();
counter.inc();
counter.inc();
counter.inc();
counter.inc();
counter.inc();
counter.inc();
console.log(counter.now());