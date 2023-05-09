input.onButtonPressed(Button.A, function () {
    if (x > 5 && x < -5) {
        if (y > 5 && y < -5) {
        	
        } else {
            RingbitCar.brake()
        }
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "x2") {
        x = value
        if (Math.abs(x) <= 20) {
            x = 0
        }
    }
    if (name == "y2") {
        y = value
        if (Math.abs(y) <= 20) {
            y = 0
        }
    }
})
let y = 0
let x = 0
led.setBrightness(24)
radio.setGroup(1)
RingbitCar.init_wheel(AnalogPin.P0, AnalogPin.P1)
basic.forever(function () {
    RingbitCar.freestyle(x + y, y - x)
})
