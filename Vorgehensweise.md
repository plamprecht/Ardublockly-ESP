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

## ============ Neue Blöcke ===================
WIFI Block:
- Connect to WIFI https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#tks793
- Eigenen WIFI Access Point starten: Kein Multithreading, daher nur 1:1 Peer-to-Peer Verbindung möglich, daher nicht sinnvoll für MQTT Netwerk mit Broker + Subscribers etc.
- Start WIFI AccessPoint https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#73tuha
	https://circuits4you.com/2019/01/05/connecting-esp32-to-wifi-network/
	https://randomnerdtutorials.com/esp32-access-point-ap-web-server/
	https://www.esp8266.com/viewtopic.php?f=6&t=15349	

MQTT: https://techtutorialsx.com/2017/04/24/esp32-publishing-messages-to-mqtt-topic/
https://randomnerdtutorials.com/esp32-mqtt-publish-subscribe-arduino-ide/
- Connect https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#bpc4ac
	v2 https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#ee8b7r
- Publish (FINAL mit Variablen) https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#o6n57q
- Subscribe:
-- MQTT Subscribe Function: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#bevtot
-- MQTT Subscribe: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#rsbkfu
-- MQTT Subscribe Get Content: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#ekiz2e

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
L298N_setup: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#3jw82g
L298N_move: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#ycoyuh

Pulse Width Modulation:
PWM_setup: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#st26y3
PWM_to_pin: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#q58vf4
PWM_set_dutycycle: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#hg6c8y

String Compare:
https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#9jgya9

Text cut Delimiter: 
Initialize + First Part: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#gpphsu
Next: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#nrb2b7

EEPROM:
https://randomnerdtutorials.com/esp32-flash-memory/
Write: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#roeyeh
Read: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#mx6g5y

OLED Display:
https://techtutorialsx.com/2017/12/02/esp32-arduino-interacting-with-a-ssd1306-oled-display/
Display Initialize: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#gy5hvc
Display Text: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#ohsm8q
Display Clear: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#mcs58p

TFT eSPI Display (eSPI Library):
Display Initialize: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#q4pf2m
Fill Color: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#sdeisd
Text and Background Color: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#wr6p89
Rotation: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#q2o3cu
Display Text: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#rt3rda

Gyro Sensor MPU-6050:
http://www.brokking.net/imu.html

Sensitivitiy Einstellung: https://github.com/VRomanov89/EEEnthusiast/blob/master/MPU-6050%20Implementation/MPU6050_Implementation/MPU6050_Implementation.ino
Register Map: https://invensense.tdk.com/wp-content/uploads/2015/02/MPU-6000-Register-Map1.pdf
Datenblatt: https://invensense.tdk.com/wp-content/uploads/2015/02/MPU-6000-Datasheet1.pdf
Serial Plotter: http://www.toptechboy.com/arduino/9-axis-imu-lesson-4-plotting-serial-data-from-arduino-with-control-of-axis-scale/
Serial Plotter Download: https://hackaday.io/project/5334-serialplot-realtime-plotting-software
http://www.toptechboy.com/arduino/9-axis-imu-lesson-10-making-a-tilt-compensated-compass-with-arduino/
Kalibrieren statisch: https://learn.adafruit.com/adxl345-digital-accelerometer/programming
Kalibrieren statisch: https://learn.adafruit.com/calibrating-sensors/two-point-calibration
Roll Pitch Axis Image: https://protosupplies.com/product/mpu-6050-gy-521-3-axis-accel-gryo-sensor-module/

Initialize and Calibrate: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#3oozjv
Calc Angles: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#b3hevi
Measure: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#izq5vz
Store Raw: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#wbu72y

Variables:
Define: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#jw66y5
Set: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#q6fpkz


Build Version + EXE File erstellen - Ardublockly kompilieren: https://github.com/carlosperate/ardublockly/wiki/Building-Ardublockly#download-the-source-code

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
