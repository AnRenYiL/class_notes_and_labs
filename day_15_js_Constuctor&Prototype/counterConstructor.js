function Counter(tick) {
    this.count = 0;
    this.tick = tick;

}
Counter.prototype.inc = () => {
    this.count += this.tick;
    return this;
};
Counter.prototype.setTick = (tick) => {
    this.tick = tick;
    return this;
};
Counter.prototype.dec = () => {
    this.count -= this.tick;
    return this;
};
Counter.prototype.now = () => {
    return this.count;
};
const counter = new Counter(1);
const counterTwo = new Counter(2);