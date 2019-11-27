## ============ Arduino IDE installieren ===================

https://www.arduino.cc/en/Main/Software

ESP32 hinzufügen

OLED Library hinzufügen

Ardublockly installieren
https://github.com/carlosperate/ardublockly/wiki/Installing-Ardublockly


## ============ Board ===================

Neues Board in Ardublockly hinzufügen
https://github.com/carlosperate/ardublockly/wiki/Add-New-Arduino-Board

--> Analog Digital Converter 2 kann nicht verwendet werden wenn WIFI in Verwendung
	+ einige NUR INPUT Pins - also nur GPIO 32 + GPIO 33 als Analog Pins definiert
--> GPIO - NUR INPUT PINS oder Boot failed if pulled high .. ausgelassen
--> zusätzlich zu den bestehenden kategorien die Kategorie "Touch" für Touch-PINS hinzugefügt	

EDIT: Found it - Of course I needed to Install Python and open Ardublockly via the start.py first.
As soon as I did that was available when I started Ardublockly via "arduexec\ardublockly"

War compressed Blockly - auskommentiert in index.html und einkommentiert von den uncompressed config files

## ============ Blöcke ===================

Ardublockly Blöcke erstellen
https://github.com/carlosperate/ardublockly/wiki/Create-Blocks
https://blockly-demo.appspot.com/static/demos/blockfactory/index.html
Info über Code Bedeutung: https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks

## ============ Meine Blöcke ===================

WIFI Block:
- Connect to WIFI https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#tks793
- Eigenen WIFI Access Point starten: Kein Multithreading, daher nur 1:1 Peer-to-Peer Verbindung möglich, daher nicht sinnvoll für MQTT Netwerk mit Broker + Subscribers etc.
- Start WIFI AccessPoint https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#73tuha
	https://circuits4you.com/2019/01/05/connecting-esp32-to-wifi-network/
	https://randomnerdtutorials.com/esp32-access-point-ap-web-server/

MQTT: https://techtutorialsx.com/2017/04/24/esp32-publishing-messages-to-mqtt-topic/
https://randomnerdtutorials.com/esp32-mqtt-publish-subscribe-arduino-ide/
- Connect https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#usf2cg
- Publish (FINAL mit Variablen) https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#o6n57q
- Subscribe:
-- MQTT Subscribe Function: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#bevtot
-- MQTT Subscribe: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#rsbkfu

Webserver:
https://lastminuteengineers.com/creating-esp32-web-server-arduino-ide/
https://github.com/zhouhan0126/WebServer-esp32/blob/master/examples/HttpBasicAuth/HttpBasicAuth.ino
Webserver_Start: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#nrrynw
Handle_URL: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#q4xzwr
Handle_URL_with_Authentication: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#jt64vt
Handle_URL_NotFound: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#o9ghkb
Server Send: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#2k6yqu

BME280 / BMP280:
Initialize: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#tay3jk
Measuring: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#3f8ppd
Anmerkung: Man könnte auch HÖHE anhand von Luftdruck berechnen und ausgeben - bewusst nicht, da Berechnungen selbst durch Blöcke gemacht werden können. (z.B. als Funktion)

I2C Scanner:
Block: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#6t9orw

Motor Driver L298N:
L298N_setup: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#ek2d8s
L298N_move: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#ycoyuh

Pulse Width Modulation:
PWM_setup: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#st26y3
PWM_to_pin: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#q58vf4
PWM_set_dutycycle: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#hg6c8y

String Compare:
https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#7mz5nq

Text cut Delimiter: 
Initialize + First Part: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#gpphsu
Next: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#nrb2b7

EEPROM
Write: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#roeyeh
Read: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#mx6g5y

OLED Display:
Display Text: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#ohsm8q
Display Clear: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#mcs58p


Build Version + EXE File erstellen - Ardublockly kompilieren: https://github.com/carlosperate/ardublockly/wiki/Building-Ardublockly#download-the-source-code


## ========== Neue Code Generierungs Funktion =============

\\192.168.1.2\usb hdd\Studium\8. Semester\Bachelorarbeit Informatik\Ardublockly\ardublockly_Windows32_2018-02-01_17.48_master_04fa4\blockly\generators\arduino.js

Problem besteht wenn man das Ergebnis eines Statement Inputs an 2 verschiedene Stellen schreiben will. z.B. einmal an den Ort wo der Statement Input steht UND einen Teil in die Loop Funktion (Main Programm). Das ging bisher nicht, da es keine Funktion gab wie addSetup / addFunction für die Loop Funktion. Code wird an den Anfang der Loop geschreiben.


## ============ MQTT Test ===================

Windows Install: http://www.steves-internet-guide.com/install-mosquitto-broker/
Raspberry Install: https://www.youtube.com/watch?v=OOqS8fhd6ck

Start Mosquitto Server: https://mosquitto.org/man/mosquitto-8.html

Server Starten: "Z:\Studium\8. Semester\Bachelorarbeit Informatik\MQTT\mosquitto" -v -p 1883

Mosquitto Publish: "Z:\Studium\8. Semester\Bachelorarbeit Informatik\MQTT\mosquitto_pub" -h localhost -p 1883 -t esp32-test -m "Teeest"
https://mosquitto.org/man/mosquitto_pub-1.html
https://www.switchdoc.com/2018/02/tutorial-installing-and-testing-mosquitto-mqtt-on-raspberry-pi/

Mosquitto Subscribe: "Z:\Studium\8. Semester\Bachelorarbeit Informatik\MQTT\mosquitto_sub" -h localhost -p 1883 -t esp32-test
https://mosquitto.org/man/mosquitto_sub-1.html 

User hinzufügen: mosquitto_passwd -b passwordfile [USERNAME] [PASSWORD]
User löschen: mosquitto_passwd -D passwordfile [USERNAME]

## ============ Github ===================

Git Bash öffnen und mit ls ins Verzeichnis wechseln
Dann mit "git add *" alles zur Staging adden
Dann ein "git commit -m "Message"" um alles zu bestätigen
Dann mit "git push" hochladen