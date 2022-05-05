let pocetA = 0
let pocetB = 0
let pocetC = 0
let pocetD = 0
radio.onReceivedValue(function on_received_value(name: string, value: number) {
    
    if (name == "vote" && value == 1) {
        pocetA += 1
        basic.showString("A")
    }
    
    if (name == "vote" && value == 2) {
        pocetB += 1
    }
    
})
