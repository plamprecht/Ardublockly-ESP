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

Blockly.Arduino['i2c_scanner'] = function(block) {
  var setupCode_i2c_start = "Wire.begin();";
  
  var function_i2c_scanner = "void i2c_scan() {\n  ";
  function_i2c_scanner += "byte error, address = 0;\n  ";
  function_i2c_scanner += "int count_devices = 0;\n  ";
  function_i2c_scanner += "Serial.println(\"I2C Scan Results:\");\n  ";
  function_i2c_scanner += "for (address = 1; address < 127; address++){\n    ";
  function_i2c_scanner += "Wire.beginTransmission(address);\n    ";
  function_i2c_scanner += "error = Wire.endTransmission();\n    ";
  function_i2c_scanner += "if(error == 0){\n      ";
  function_i2c_scanner += "Serial.print(\"I2C device found at address 0\");\n      ";
  function_i2c_scanner += "(address < 16) ? Serial.print(\"x0\") : Serial.print(\"x\");\n      ";
  function_i2c_scanner += "Serial.println(address, HEX);\n      ";
  function_i2c_scanner += "count_devices++;\n    }\n    ";
  function_i2c_scanner += "if(error == 4){\n      ";
  function_i2c_scanner += "Serial.print(\"ERROR \");\n      ";
  function_i2c_scanner += "Serial.print(error, HEX);\n      ";
  function_i2c_scanner += "Serial.print(\" at address 0\");\n      ";
  function_i2c_scanner += "(address < 16) ? Serial.print(\"x0\") : Serial.print(\"x\");\n      ";
  function_i2c_scanner += "Serial.println(address, HEX);\n    }\n  }\n  ";
  function_i2c_scanner += "(count_devices == 0) ? Serial.println(\"No I2C devices found!\\n\") : Serial.println(\"\");\n";  
  function_i2c_scanner += "}";
  
  var setupCode_i2c_scan_start = "i2c_scan();\n";
  
  Blockly.Arduino.addInclude('I2C_Wire', '#include <Wire.h>');
  Blockly.Arduino.addSetup("I2C_start", setupCode_i2c_start, true);
  Blockly.Arduino.addSetup("I2C_scan_start", setupCode_i2c_scan_start, true);
  Blockly.Arduino.addFunction("I2C_scanner", function_i2c_scanner);
  
  return '';
};

Blockly.Arduino['bme280_initialize'] = function(block) {
  //Define Sensor with the BME280I2C Data Type from the Library
  Blockly.Arduino.addVariable("BME280", "BME280I2C bme;", true);

  // Start I2C Bus and check if Sensor is able to initialize. If not found stay in the loop with 2 seconds delay till next try
  var setupCode_i2c_start = "Wire.begin();";
  var setupCode_check_sensor = "while(!bme.begin())\n  {\n    Serial.println(\"Could not find BME280 or BMP280 sensor! Loop - Checking again in 2 seconds!\");\n    delay(2000);\n  }\n";
    
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
  Blockly.Arduino.addSetup("I2C_start", setupCode_i2c_start, true);
  Blockly.Arduino.addSetup("bme280_check_sensor", setupCode_check_sensor, true);
  Blockly.Arduino.addSetup("bme280_detect_sensor_type", setupCode_detect_sensor_type, true);
  
  //var code = 'Temp Unit: '+ dropdown_temp_unit + '\nPress Unit: '+ dropdown_press_unit + '\n';
  return '';
};

Blockly.Arduino['bme280_measure'] = function(block) {
  var variable_temperature = Blockly.Arduino.valueToCode(block, 'temperature', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_temp_unit = block.getFieldValue('Temp_unit');
  var variable_humidity = Blockly.Arduino.valueToCode(block, 'humidity', Blockly.Arduino.ORDER_ATOMIC);
  var variable_pressure = Blockly.Arduino.valueToCode(block, 'pressure', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_press_unit = block.getFieldValue('Press_unit');
  
  //variables are defined automatically by Ardublockly (unfortunately as void)
  //now measurement units are set, then measurment takes place with storing into variables
  var code = "BME280::TempUnit tempUnit(BME280::TempUnit_" + dropdown_temp_unit + ");\n";
  code += "BME280::PresUnit presUnit(BME280::PresUnit_" + dropdown_press_unit + ");\n";
  code += "bme.read(" + variable_pressure + ", " + variable_temperature + ", " + variable_humidity + ", tempUnit, presUnit);\n";

  return code;
};

Blockly.Arduino['mpu6050_initialize'] = function(block) {
  var dropdown_set_accelerometer = block.getFieldValue('set_accelerometer');
  var dropdown_set_gyroscope = block.getFieldValue('set_gyroscope');
  var number_set_calibration = block.getFieldValue('set_calibration');
  
  //Define global variables
  Blockly.Arduino.addVariable("MPU6050_sensor_values", "int16_t mpu6050_gyro_x = 0, mpu6050_gyro_y = 0, mpu6050_gyro_z = 0, mpu6050_temp_raw = 0, mpu6050_acc_x = 0, mpu6050_acc_y = 0, mpu6050_acc_z = 0;", true);
  Blockly.Arduino.addVariable("MPU6050_sensor_offsets", "int mpu6050_gyro_offset_x = 0, mpu6050_gyro_offset_y = 0, mpu6050_gyro_offset_z = 0, mpu6050_acc_init_x = 0, mpu6050_acc_init_y = 0, mpu6050_acc_init_z = 0;", true);
  Blockly.Arduino.addVariable("MPU6050_sensor_angles", "float mpu6050_acc_init_pitch_angle = 0, mpu6050_acc_init_roll_angle = 0, mpu6050_acc_pitch_angle = 0, mpu6050_acc_roll_angle = 0, mpu6050_gyro_pitch_angle = 0, mpu6050_gyro_roll_angle = 0, mpu6050_gyro_yaw_angle = 0;", true);
  switch(dropdown_set_gyroscope){
	  case "0":
		Blockly.Arduino.addVariable("MPU6050_gyro_scale", "float mpu6050_GYRO_SCALE = 131.0;", true);
		break;
	  case "1":
		Blockly.Arduino.addVariable("MPU6050_gyro_scale", "float mpu6050_GYRO_SCALE = 65.5;", true);
		break;
	  case "2":
		Blockly.Arduino.addVariable("MPU6050_gyro_scale", "float mpu6050_GYRO_SCALE = 32.8;", true);
		break;
	  case "3":
		Blockly.Arduino.addVariable("MPU6050_gyro_scale", "float mpu6050_GYRO_SCALE = 16.4;", true);
  }
  Blockly.Arduino.addVariable("MPU6050_gyro_start", "unsigned long mpu6050_start_time = 0;", true);
  
  //Function to setup the MPU6050
  var function_mpu6050_setup = "void MPU6050_setup(){\n  ";
  function_mpu6050_setup += "Wire.beginTransmission(0x68);\n  "; //This is the I2C address of the MPU (b1101000/b1101001 for AC0 low/high datasheet sec. 9.2)
  function_mpu6050_setup += "Wire.write(0x6B);\n  "; //Accessing the register 6B - Power Management (Sec. 4.28)
  function_mpu6050_setup += "Wire.write(0x00);\n  "; //Setting SLEEP register to 0. (Required; see Note on p. 9)
  function_mpu6050_setup += "Wire.endTransmission();\n  ";
  function_mpu6050_setup += "Wire.beginTransmission(0x68);\n  "; //I2C address of the MPU
  function_mpu6050_setup += "Wire.write(0x1B);\n  "; //Accessing the register 1B - Gyroscope Configuration (Sec. 4.6) 
  switch(dropdown_set_gyroscope){		//Setting the gyro to scale (00 = ±250dps, 01= ±500dps, 10 = ±1000dps, 11 = ±2000dps)
	  case "0":
		function_mpu6050_setup += "Wire.write(0b00000);\n  ";
		break;
	  case "1":
		function_mpu6050_setup += "Wire.write(0b01000);\n  ";
		break;
	  case "2":
		function_mpu6050_setup += "Wire.write(0b10000);\n  ";
		break;
	  case "3":
		function_mpu6050_setup += "Wire.write(0b11000);\n  ";
  }
  function_mpu6050_setup += "Wire.endTransmission();\n  ";
  function_mpu6050_setup += "Wire.beginTransmission(0x68);\n  "; //I2C address of the MPU     
  function_mpu6050_setup += "Wire.write(0x1C);\n  "; //Accessing the register 1C - Acccelerometer Configuration (Sec. 4.7) 
  switch(dropdown_set_accelerometer){		//Setting the accel to +/- 8g (±2g (00), ±4g (01), ±8g (10), ±16g (11))
	  case "0":
		function_mpu6050_setup += "Wire.write(0b00000);\n  ";
		break;
	  case "1":
		function_mpu6050_setup += "Wire.write(0b01000);\n  ";
		break;
	  case "2":
		function_mpu6050_setup += "Wire.write(0b10000);\n  ";
		break;
	  case "3":
		function_mpu6050_setup += "Wire.write(0b11000);\n  ";
  }
  function_mpu6050_setup += "Wire.endTransmission();\n}\n";
  
  //Function to read values from the MPU6050 and correct the directly by using offsets from calibration
  var function_MPU6050_measure = "void MPU6050_measure(){\n  ";
  function_MPU6050_measure += "Wire.beginTransmission(0x68);\n  "; //Start communicating with the MPU-6050
  function_MPU6050_measure += "Wire.write(0x3B);\n  "; //Send Starting register for Accel Readings
  function_MPU6050_measure += "Wire.endTransmission();\n  "; //End the transmission
  function_MPU6050_measure += "Wire.requestFrom(0x68,14);\n  "; //Request 14 bytes from the MPU-6050
  function_MPU6050_measure += "while(Wire.available() < 14);\n  "; //Wait until all the bytes are received
  function_MPU6050_measure += "mpu6050_acc_x = Wire.read()<<8|Wire.read();\n  "; //Add the low and high byte to the acc variables
  function_MPU6050_measure += "mpu6050_acc_y = Wire.read()<<8|Wire.read();\n  "; 
  function_MPU6050_measure += "mpu6050_acc_z = Wire.read()<<8|Wire.read();\n  "; 
  function_MPU6050_measure += "mpu6050_temp_raw = Wire.read()<<8|Wire.read();\n  "; //Add the low and high byte to the temperature variable
  function_MPU6050_measure += "mpu6050_gyro_x = Wire.read()<<8|Wire.read();\n  "; //Add the low and high byte to the gyro variables
  function_MPU6050_measure += "mpu6050_gyro_y = Wire.read()<<8|Wire.read();\n  "; 
  function_MPU6050_measure += "mpu6050_gyro_z = Wire.read()<<8|Wire.read();\n\n  ";
  function_MPU6050_measure += "mpu6050_gyro_x -= mpu6050_gyro_offset_x;\n  "; //include Gyro Offsets - Accelerameter has no offsets as it could have been started in uneven places
  function_MPU6050_measure += "mpu6050_gyro_y -= mpu6050_gyro_offset_y;\n  "; 
  function_MPU6050_measure += "mpu6050_gyro_z -= mpu6050_gyro_offset_z;\n\n  "; 
  function_MPU6050_measure += "(abs(mpu6050_gyro_x) < mpu6050_GYRO_SCALE) ? mpu6050_gyro_x = 0 : true;\n  "; //implementing gyro measurment error filter - minimum gyro move 1°/sec
  function_MPU6050_measure += "(abs(mpu6050_gyro_y) < mpu6050_GYRO_SCALE) ? mpu6050_gyro_y = 0 : true;\n  ";
  function_MPU6050_measure += "(abs(mpu6050_gyro_z) < mpu6050_GYRO_SCALE) ? mpu6050_gyro_z = 0 : true;\n}\n";

  
  //Function to calibrate the MPU6050 and calculate the gyro offsets and accelerameter inital values
  var function_mpu6050_calibrate = "void MPU6050_calibrate(){\n  ";
  function_mpu6050_calibrate += "long sum_mpu6050_gyro_x = 0, sum_mpu6050_gyro_y = 0, sum_mpu6050_gyro_z = 0, sum_mpu6050_acc_x = 0, sum_mpu6050_acc_y = 0, sum_mpu6050_acc_z = 0;\n\n  ";
  function_mpu6050_calibrate += "long calibration = 0;\n  ";
  function_mpu6050_calibrate += "Serial.println(\"Starting MPU6050 calibration in 5 seconds. Don't move during calibration.\");\n  ";
  function_mpu6050_calibrate += "delay(5000);\n  ";
  function_mpu6050_calibrate += "Serial.println(\"Starting MPU6050 calibration now...\");\n  ";
  function_mpu6050_calibrate += "for (calibration = 0; calibration < " + number_set_calibration + "; calibration++){\n    ";
  function_mpu6050_calibrate += "MPU6050_measure();\n    "; //Read the raw acc and gyro and temp data from the MPU-6050
  function_mpu6050_calibrate += "sum_mpu6050_gyro_x += mpu6050_gyro_x;\n    "; //Add the gyro x/y/z-axis measurements to the sum variable to calculate the offset later on
  function_mpu6050_calibrate += "sum_mpu6050_gyro_y += mpu6050_gyro_y;\n    "; 
  function_mpu6050_calibrate += "sum_mpu6050_gyro_z += mpu6050_gyro_z;\n    ";
  function_mpu6050_calibrate += "sum_mpu6050_acc_x += mpu6050_acc_x;\n    "; //Add the acc x/y/z-axis measurements to the sum variable to calculate the init value later on to provide it to the gyro as starting position
  function_mpu6050_calibrate += "sum_mpu6050_acc_y += mpu6050_acc_y;\n    ";
  function_mpu6050_calibrate += "sum_mpu6050_acc_z += mpu6050_acc_z;\n  }\n  ";
  function_mpu6050_calibrate += "Serial.println(\"Finished MPU6050 calibration!\");\n\n  ";
  function_mpu6050_calibrate += "mpu6050_gyro_offset_x = int(sum_mpu6050_gyro_x / calibration);\n  "; //calc gyro offsets - divide by nr of calibration cycles
  function_mpu6050_calibrate += "mpu6050_gyro_offset_y = int(sum_mpu6050_gyro_y / calibration);\n  ";
  function_mpu6050_calibrate += "mpu6050_gyro_offset_z = int(sum_mpu6050_gyro_z / calibration);\n  ";
  function_mpu6050_calibrate += "mpu6050_acc_init_x = int(sum_mpu6050_acc_x / calibration);\n  "; //calc average initial value for Accelerameter
  function_mpu6050_calibrate += "mpu6050_acc_init_y = int(sum_mpu6050_acc_y / calibration);\n  ";
  function_mpu6050_calibrate += "mpu6050_acc_init_z = int(sum_mpu6050_acc_z / calibration);\n\n  ";
  function_mpu6050_calibrate += "mpu6050_acc_init_pitch_angle = atan2(mpu6050_acc_init_x, mpu6050_acc_init_z)*360/(2*PI);\n  "; //calc initial Accelerameter Angles
  function_mpu6050_calibrate += "mpu6050_acc_init_roll_angle = atan2(mpu6050_acc_init_y, mpu6050_acc_init_z)*360/(2*PI);\n  ";
  function_mpu6050_calibrate += "mpu6050_gyro_pitch_angle += mpu6050_acc_init_pitch_angle;\n  "; //add initial Accelerameter Angles to Gyro result for proper initial Gyro Angle
  function_mpu6050_calibrate += "mpu6050_gyro_roll_angle += mpu6050_acc_init_roll_angle;\n\n  ";
  function_mpu6050_calibrate += "mpu6050_start_time = millis();\n}\n"; //start timer for Gyro Measurement
  
  // Start I2C Bus and execute the declared setup and calibrate functions
  var setupCode_i2c_start = "Wire.begin();";
  
  var setupCode_mpu6050_initialize = "MPU6050_setup();\n  ";
  setupCode_mpu6050_initialize += "MPU6050_calibrate();";

  Blockly.Arduino.addInclude('math', '#include <math.h>');
  Blockly.Arduino.addInclude('I2C_Wire', '#include <Wire.h>');
  Blockly.Arduino.addSetup("I2C_start", setupCode_i2c_start, true);
  Blockly.Arduino.addSetup("MPU6050_initialize", setupCode_mpu6050_initialize, true);
  Blockly.Arduino.addFunction("MPU6050_setup", function_mpu6050_setup);
  Blockly.Arduino.addFunction("MPU6050_measure", function_MPU6050_measure);
  Blockly.Arduino.addFunction("MPU6050_calibrate", function_mpu6050_calibrate);
  
  return '';
};

Blockly.Arduino['mpu6050_calc_angles'] = function(block) {
  var number_set_gyro_trust = block.getFieldValue('set_gyro_trust');
  var variable_acc_pitch_angle = Blockly.Arduino.valueToCode(block, 'acc_pitch_angle', Blockly.Arduino.ORDER_ATOMIC);
  var variable_acc_roll_angle = Blockly.Arduino.valueToCode(block, 'acc_roll_angle', Blockly.Arduino.ORDER_ATOMIC);
  var variable_gyro_pitch_angle = Blockly.Arduino.valueToCode(block, 'gyro_pitch_angle', Blockly.Arduino.ORDER_ATOMIC);
  var variable_gyro_roll_angle = Blockly.Arduino.valueToCode(block, 'gyro_roll_angle', Blockly.Arduino.ORDER_ATOMIC);
  var variable_gyro_yaw_angle = Blockly.Arduino.valueToCode(block, 'gyro_yaw_angle', Blockly.Arduino.ORDER_ATOMIC);
  
  var function_mpu6050_calc_angles = "void MPU6050_calc_angles(float mpu6050_GYRO_TRUST){\n  ";
  function_mpu6050_calc_angles += "float elapsed_sec = 0;\n  ";
  function_mpu6050_calc_angles += "mpu6050_GYRO_TRUST /= 100;\n  ";
  function_mpu6050_calc_angles += "float mpu6050_ACC_TRUST = 1 - mpu6050_GYRO_TRUST;\n\n  ";
  function_mpu6050_calc_angles += "mpu6050_acc_pitch_angle = atan2(mpu6050_acc_x, mpu6050_acc_z)*360/(2*PI);\n  "; //arctan calculates radians therefor converting to degrees
  function_mpu6050_calc_angles += "mpu6050_acc_roll_angle = atan2(mpu6050_acc_y, mpu6050_acc_z)*360/(2*PI);\n\n  "; //arctan calculates radians therefor converting to degrees
  function_mpu6050_calc_angles += "elapsed_sec = float(millis() - mpu6050_start_time)/1000;\n  "; //divide by 1000 to convert milliseconds to seconds
  function_mpu6050_calc_angles += "mpu6050_start_time = millis();\n  "; //Set Start time to start the new cycle
  function_mpu6050_calc_angles += "mpu6050_gyro_pitch_angle -= mpu6050_gyro_y * elapsed_sec / mpu6050_GYRO_SCALE;\n  "; //Old Angle - (Speed in Degrees/s * seconds / scale) = Minuse to set same sign as at accelerameter
  function_mpu6050_calc_angles += "mpu6050_gyro_roll_angle += mpu6050_gyro_x * elapsed_sec / mpu6050_GYRO_SCALE;\n  "; //Old Angle + (Speed in Degrees/s * seconds / scale)
  function_mpu6050_calc_angles += "mpu6050_gyro_yaw_angle += mpu6050_gyro_z * elapsed_sec / mpu6050_GYRO_SCALE;\n\n  "; //Old Angle + (Speed in Degrees/s * seconds / scale)
  function_mpu6050_calc_angles += "mpu6050_gyro_pitch_angle += mpu6050_gyro_roll_angle * sin(mpu6050_gyro_z * elapsed_sec / mpu6050_GYRO_SCALE * (2*PI) / 360);\n  "; //If there was a yaw turn around the z axis the pitch angle will change according to the Roll Angle times the SIN Function of the turning axis (which takes it's value in radians)
  function_mpu6050_calc_angles += "mpu6050_gyro_roll_angle -= mpu6050_gyro_pitch_angle * sin(mpu6050_gyro_z * elapsed_sec / mpu6050_GYRO_SCALE * (2*PI) / 360);\n  "; //If there was a yaw turn around the z axis the roll angle will change according to the Pitch Angle multiplied by the SIN Function of the turning axis (which takes it's value in radians)
  function_mpu6050_calc_angles += "mpu6050_gyro_pitch_angle = (mpu6050_gyro_pitch_angle * mpu6050_GYRO_TRUST) + (mpu6050_acc_pitch_angle * mpu6050_ACC_TRUST);\n  "; //include Gyro Trust into angles to eliminate drift
  function_mpu6050_calc_angles += "mpu6050_gyro_roll_angle = (mpu6050_gyro_roll_angle * mpu6050_GYRO_TRUST) + (mpu6050_acc_roll_angle * mpu6050_ACC_TRUST);\n\n"; //include Gyro Trust into angles to eliminate drift
  if(variable_acc_pitch_angle != "")
	  function_mpu6050_calc_angles += "  " + variable_acc_pitch_angle + " = mpu6050_acc_pitch_angle;\n";
  if(variable_acc_roll_angle!= "")
	  function_mpu6050_calc_angles += "  " + variable_acc_roll_angle + " = mpu6050_acc_roll_angle;\n";
  if(variable_gyro_pitch_angle!= "")
	  function_mpu6050_calc_angles += "  " + variable_gyro_pitch_angle + " = mpu6050_gyro_pitch_angle;\n";
  if(variable_gyro_roll_angle!= "")
	  function_mpu6050_calc_angles += "  " + variable_gyro_roll_angle + " = mpu6050_gyro_roll_angle;\n";
  if(variable_gyro_yaw_angle != "")
	  function_mpu6050_calc_angles += "  " + variable_gyro_yaw_angle + " = mpu6050_gyro_yaw_angle;\n";
  
  function_mpu6050_calc_angles += "}\n";
  
  var code = "MPU6050_calc_angles(" + number_set_gyro_trust + ");\n";
  
  Blockly.Arduino.addInclude('math', '#include <math.h>');
  Blockly.Arduino.addFunction("MPU6050_calc_angles", function_mpu6050_calc_angles);  
  
  return code;
};

Blockly.Arduino['mpu6050_measure'] = function(block) {
  var code = "MPU6050_measure();\n";
  return code;
};

Blockly.Arduino['mpu6050_store_raw'] = function(block) {
  var variable_acc_x = Blockly.Arduino.valueToCode(block, 'acc_x', Blockly.Arduino.ORDER_ATOMIC);
  var variable_acc_y = Blockly.Arduino.valueToCode(block, 'acc_y', Blockly.Arduino.ORDER_ATOMIC);
  var variable_acc_z = Blockly.Arduino.valueToCode(block, 'acc_z', Blockly.Arduino.ORDER_ATOMIC);
  var variable_gyro_x = Blockly.Arduino.valueToCode(block, 'gyro_x', Blockly.Arduino.ORDER_ATOMIC);
  var variable_gyro_y = Blockly.Arduino.valueToCode(block, 'gyro_y', Blockly.Arduino.ORDER_ATOMIC);
  var variable_gyro_z = Blockly.Arduino.valueToCode(block, 'gyro_z', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_set_temperature = block.getFieldValue('set_temperature');
  var variable_temperature = Blockly.Arduino.valueToCode(block, 'temperature', Blockly.Arduino.ORDER_ATOMIC);
  var code = "";
  
  if(variable_acc_x != "")
	  code += variable_acc_x + " = mpu6050_acc_x;\n";
  if(variable_acc_y != "")
	  code += variable_acc_y + " = mpu6050_acc_y;\n";
  if(variable_acc_z != "")
	  code += variable_acc_z + " = mpu6050_acc_z;\n";
  if(variable_gyro_x != "")
	  code += variable_gyro_x + " = mpu6050_gyro_x;\n";
  if(variable_gyro_y != "")
	  code += variable_gyro_y + " = mpu6050_gyro_y;\n";
  if(variable_gyro_z != "")
	  code += variable_gyro_z + " = mpu6050_gyro_z;\n";
  
  if(dropdown_set_temperature == "Celsius" && variable_temperature != "")
  {
	  code += variable_temperature + " = (mpu6050_temp_raw + (340*40) - 521) / 340.0;\n"; //Calc temp from raw Value to Degrees. According to datasheet 1 Degree = 340 LBS starting at -40°C and Offset at 35° is -521 LBS. Total +40°C to get to 0 = 340 * 40 = 13600 add the Offset of -521 = 13079
  }
  else if(dropdown_set_temperature == "Fahrenheit" && variable_temperature != "")
  {
	  code += variable_temperature + " = (((mpu6050_temp_raw + (340*40) - 521) / 340.0)* 9 / 5) + 32;\n"; //Same calculation liek for Celisus applies, then convert to Fahrenheit
  }
  
  Blockly.Arduino.addInclude('math', '#include <math.h>');
  
  return code;
};









