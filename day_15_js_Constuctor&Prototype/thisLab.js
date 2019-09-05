function whatIsThis() {
    console.log(this);
}
const can = {
    touchThis: function () {
        console.log((this));
    },
    cantTouchThis() {
        function a() {
            console.log(this);
        }
        a();
    }
}
can.touchThis(); //obj
can.cantTouchThis(); //global
whatIsThis(); //global