class Year {
    constructor(year) {
        this.year = year;
    }
    isLeapYear() {
        if (this.year % 100 == 0) {
            if (this.year % 400 == 0) {
                return true;
            } else {
                return false;
            }
        } else {
            if (this.year % 4 == 0) {
                return true;
            } else {
                return false;
            }
        }
    }
}
//1999 2000 1900 2012
const check = new Year(2012);
console.log(check.isLeapYear());