/**
 * WLAN Block!
 *
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for ESP WIFI library.
 * Code generator for the WIFI Connection setup.
 * Please Setup Serial before this Block to see all the status messages
 */
 
'use strict';

goog.provide('Blockly.Blocks.sensors');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['i2c_scanner'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("I2C Scanner  -")
        .appendField("Detecting all devices connected via the I2C Bus");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("This is a I2C Scanner to help you to check which I2C devices you have connected successfully to the system");
 this.setHelpUrl("https://playground.arduino.cc/Main/I2cScanner/");
  }
};

Blockly.Blocks['bme280_initialize'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Initialize BME280 or BMP280 Sensor with I2C Bus");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("IMPORTANT: Install the \"BME280\" Library by Tylor Glenn in your Arduino IDE!");
 this.setHelpUrl("https://platformio.org/lib/show/901/BME280");
  }
};

Blockly.Blocks['bme280_measure'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("BME280 / BMP280 Measuring:");
    this.appendValueInput("temperature")
        .setCheck(null)
        .appendField("Measure temperature in")
        .appendField(new Blockly.FieldDropdown([["Celsius °C","Celsius"], ["Fahrenheit °F","Fahrenheit"]]), "Temp_unit")
        .appendField("and store in variable");
    this.appendValueInput("humidity")
        .setCheck(null)
        .appendField("Measure humidity in  % relative air humidity")
        .appendField("and store in variable");
    this.appendValueInput("pressure")
        .setCheck(null)
        .appendField("Measure air pressure in")
        .appendField(new Blockly.FieldDropdown([["Hecto Pascal (hPa)","hPa"], ["Pascal (Pa)","Pa"]]), "Press_unit")
        .appendField("and store in variable");
    this.appendDummyInput();
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Before you can use this block you need to place the \"BME280 / BMP280 Initialize\" block into your program");
 this.setHelpUrl("https://platformio.org/lib/show/901/BME280");
  }
};

Blockly.Blocks['mpu6050_initialize'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Initialize MPU6050 Sensor with I2C Bus");
    this.appendDummyInput()
        .appendField("Set Accelerometer maximum G-Force to")
        .appendField(new Blockly.FieldDropdown([["+- 2 g","0"], ["+- 4 g","1"], ["+- 8 g","2"], ["+- 16 g","3"]]), "set_accelerometer");
    this.appendDummyInput()
        .appendField("Set Gyroscope maximum rotation to")
        .appendField(new Blockly.FieldDropdown([["+- 250 °/s","0"], ["+- 500 °/s","1"], ["+- 1000 °/s","2"], ["+- 2000 °/s","3"]]), "set_gyroscope");
    this.appendDummyInput()
        .appendField("Number of calibration measurements")
        .appendField(new Blockly.FieldNumber(2000, 0), "set_calibration");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("Initialize the gyroscrope, accelerometer and temperature sensor. Directly read from I2C - no additional library needed");
 this.setHelpUrl("http://www.toptechboy.com/arduino/9-axis-imu-lesson-6-determine-tilt-from-3-axis-accelerometer/");
  }
};

Blockly.Blocks['mpu6050_calc_angles'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MPU6050 calc tilt angles from measured values");
    this.appendDummyInput()
        .appendField("Trust in Gyro (to minimize drift)")
        .appendField(new Blockly.FieldNumber(99.8, 0, 100, 2), "set_gyro_trust")
        .appendField("%");
    this.appendValueInput("acc_pitch_angle")
        .setCheck(null)
        .appendField("Accelerameter Pitch Angle");
    this.appendValueInput("acc_roll_angle")
        .setCheck(null)
        .appendField("Accelerameter Roll Angle");
    this.appendValueInput("gyro_pitch_angle")
        .setCheck(null)
        .appendField("Gyroscope Pitch Angle");
    this.appendValueInput("gyro_roll_angle")
        .setCheck(null)
        .appendField("Gyroscope Roll Angle");
    this.appendValueInput("gyro_yaw_angle")
        .setCheck(null)
        .appendField("Gyroscope Yaw Angle");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("Calculates the tilt angles from the previously read raw values from the MPU6050. \"MPU6050 Read\" block needs to be executed before this block.");
 this.setHelpUrl("http://www.toptechboy.com/arduino/9-axis-imu-lesson-6-determine-tilt-from-3-axis-accelerometer/");
  }
};

Blockly.Blocks['mpu6050_measure'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MPU6050 Measuring")
        .appendField("sensor values");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("Execute measurement on MPU6050 and retrieve the current gyroscrope, accelerometer and temperature values");
 this.setHelpUrl("http://www.toptechboy.com/arduino/9-axis-imu-lesson-6-determine-tilt-from-3-axis-accelerometer/");
  }
};

Blockly.Blocks['mpu6050_store_raw'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MPU6050 store raw values:"); 
    this.appendValueInput("acc_x")
        .setCheck(null)
        .appendField("Variable for")
        .appendField("Accelerameter X");
    this.appendValueInput("acc_y")
        .setCheck(null)
        .appendField("Variable for")
        .appendField("Accelerameter Y");
    this.appendValueInput("acc_z")
        .setCheck(null)
        .appendField("Variable for")
        .appendField("Accelerameter Z");
    this.appendValueInput("gyro_x")
        .setCheck(null)
        .appendField("Variable for")
        .appendField("Gyroscrope X");
    this.appendValueInput("gyro_y")
        .setCheck(null)
        .appendField("Variable for")
        .appendField("Gyroscrope Y");
    this.appendValueInput("gyro_z")
        .setCheck(null)
        .appendField("Variable for")
        .appendField("Gyroscrope Z");
	this.appendValueInput("temperature")
        .setCheck(null)
        .appendField("Variable for")
        .appendField("Temperature in")
        .appendField(new Blockly.FieldDropdown([["Celsius °C","Celsius"], ["Fahrenheit °F","Fahrenheit"]]), "set_temperature");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("Initialize the gyroscrope, accelerometer and temperature sensor. Directly read from I2C - no additional library needed");
 this.setHelpUrl("http://www.toptechboy.com/arduino/9-axis-imu-lesson-6-determine-tilt-from-3-axis-accelerometer/");
  }
};