pocetA=0
pocetB=0
pocetC=0
pocetD=0

def on_received_value(name, value):
    global pocetA, pocetB, pocetC, pocetD
    if name == "vote" and value == 1:
        pocetA +=1
        basic.show_string("A")

    if name == "vote" and value == 2:
        pocetB+=1
radio.on_received_value(on_received_value)

