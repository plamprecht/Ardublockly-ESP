/**
 * WLAN GENERATOR!
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

goog.provide('Blockly.Arduino.sensors');

goog.require('Blockly.Arduino');


Blockly.Arduino['bme280_initialize'] = function(block) {
  // Start I2C Bus and check if Sensor is able to initialize. If not found stay in the loop with 2 seconds delay till next try
  var setupCode_start_check_sensor = "Wire.begin();\n  ";
  setupCode_start_check_sensor += "while(!bme.begin())\n  {\n    Serial.println(\"Could not find BME280 or BMP280 sensor! Loop - Checking again in 2 seconds!\");\n    delay(2000);\n  }\n";
  
  // If Sensor was found check if it's a BME280 or a BMP280 and print it to Serial
  var setupCode_detect_sensor_type = "switch(bme.chipModel())\n  {\n    ";
  setupCode_detect_sensor_type += "case BME280::ChipModel_BME280:\n      ";
  setupCode_detect_sensor_type += "Serial.println(\"Found BME280 sensor!\");\n      ";
  setupCode_detect_sensor_type += "break;\n    ";
  setupCode_detect_sensor_type += "case BME280::ChipModel_BMP280:\n      ";
  setupCode_detect_sensor_type += "Serial.println(\"Found BMP280 sensor! No Humidity available.\");\n      ";
  setupCode_detect_sensor_type += "break;\n    ";  
  setupCode_detect_sensor_type += "default:\n      ";
  setupCode_detect_sensor_type += "Serial.println(\"Found UNKNOWN sensor! Error!\");\n  }";
  
  Blockly.Arduino.addInclude('I2C_Wire', '#include <Wire.h>');
  Blockly.Arduino.addInclude('BME280I2C', '#include <BME280I2C.h>'); //To include this Library the "BME280" Library by Tylor Glenn needs to be installed in the Arduino IDE!
  Blockly.Arduino.addSetup("bme280_start_check_sensor", setupCode_start_check_sensor, true);
  Blockly.Arduino.addSetup("bme280_detect_sensor_type", setupCode_detect_sensor_type, true);
  
  //var code = 'Temp Unit: '+ dropdown_temp_unit + '\nPress Unit: '+ dropdown_press_unit + '\n';
  return "";
};

Blockly.Arduino['bme280_measure'] = function(block) {
  var variable_temperature = Blockly.Arduino.valueToCode(block, 'temperature', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_temp_unit = block.getFieldValue('Temp_unit');
  var variable_humidity = Blockly.Arduino.valueToCode(block, 'humidity', Blockly.Arduino.ORDER_ATOMIC);
  var variable_pressure = Blockly.Arduino.valueToCode(block, 'pressure', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_press_unit = block.getFieldValue('Press_unit');

  //Define Sensor with the BME280I2C Data Type from the Library
  Blockly.Arduino.addVariable("BME280", "BME280I2C bme;", true);
  
  //variables are defined automatically by Ardublockly (unfortunately as void)
  //now measurement units are set, then measurment takes place with storing into variables
  var code = "BME280::TempUnit tempUnit(BME280::TempUnit_" + dropdown_temp_unit + ");\n";
  code += "BME280::PresUnit presUnit(BME280::PresUnit_" + dropdown_press_unit + ");\n";
  code += "bme.read(" + variable_pressure + ", " + variable_temperature + ", " + variable_humidity + ", tempUnit, presUnit);\n";

  return code;
};