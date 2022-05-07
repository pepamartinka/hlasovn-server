radio.setGroup(202)
// stisknutím loga povoluju/zakazuju hlasování
// při stisku tlacitek AB najednou zobrazím výsledky
// při stisku tlacitka A vynuluju výsledky
let pocetA = 0
let pocetB = 0
let pocetC = 0
let pocetD = 0
let enable = 1
input.onLogoEvent(TouchButtonEvent.Pressed, function on_logo_event_pressed() {
    
    if (enable == 1) {
        radio.sendValue("zapnuto", 1)
        enable = 0
    } else {
        radio.sendValue("vypnuto", 0)
        enable = 1
    }
    
    if (enable == 1) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Yes)
    }
    
})
let vysledek = 0
if (enable == 1) {
    radio.onReceivedValue(function on_received_value(name: string, value: number) {
        
        if (name == "vote" && value == 1) {
            vysledek = 1
        }
        
        if (name == "vote" && value == 2) {
            vysledek = 2
        }
        
        if (name == "vote" && value == 3) {
            vysledek = 3
        }
        
        if (name == "vote" && value == 4) {
            vysledek = 4
        }
        
    })
} else {
    if (vysledek == 1) {
        pocetA += 1
    } else if (vysledek == 2) {
        pocetB += 1
    } else if (vysledek == 3) {
        pocetC += 1
    } else if (vysledek == 4) {
        pocetD += 1
    }
    
    radio.sendValue("uspesne", 5)
}

input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    basic.showString(" A=")
    basic.showNumber(pocetA)
    basic.showString(" B=")
    basic.showNumber(pocetB)
    basic.showString(" C=")
    basic.showNumber(pocetC)
    basic.showString(" D=")
    basic.showNumber(pocetD)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    pocetA = 0
    pocetB = 0
    pocetC = 0
    pocetD = 0
})
