radio.set_group(202)

#stisknutím loga povoluju/zakazuju hlasování
#při stisku tlacitek AB najednou zobrazím výsledky
#při stisku tlacitka A vynuluju výsledky

pocetA=0
pocetB=0
pocetC=0
pocetD=0

enable=1
def on_logo_event_pressed():
    global enable
    if enable==1:
        radio.send_value("zapnuto", 1)
        enable=0
    else:
        radio.send_value("vypnuto", 0)
        enable=1
    if enable==1:
            basic.show_icon(IconNames.NO)
    else: basic.show_icon(IconNames.YES)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_event_pressed)


vysledek=0
if enable==1:
    def on_received_value(name, value):
        global vysledek
        if name == "vote" and value == 1:
            vysledek=1
        if name == "vote" and value == 2:
            vysledek=2
        if name == "vote" and value == 3:
            vysledek=3
        if name == "vote" and value == 4:
            vysledek=4
    radio.on_received_value(on_received_value)
else:
    if vysledek==1:
        pocetA+=1
    elif vysledek==2:
        pocetB+=1
    elif vysledek==3:
        pocetC+=1
    elif vysledek==4:
        pocetD+=1
    radio.send_value("uspesne", 5)

def on_button_pressed_ab():
    global pocetA,pocetB,pocetC,pocetD
    basic.show_string(" A=")
    basic.show_number(pocetA)
    basic.show_string(" B=")
    basic.show_number(pocetB)
    basic.show_string(" C=")
    basic.show_number(pocetC)
    basic.show_string(" D=")
    basic.show_number(pocetD)
    basic.clear_screen()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_a():
    global pocetA,pocetB,pocetC,pocetD
    pocetA=0
    pocetB=0
    pocetC=0
    pocetD=0
input.on_button_pressed(Button.A, on_button_pressed_a)



