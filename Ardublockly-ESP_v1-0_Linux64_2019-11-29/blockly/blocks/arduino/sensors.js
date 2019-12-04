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