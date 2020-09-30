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

goog.provide('Blockly.Arduino.motordriver');

goog.require('Blockly.Arduino');

Blockly.Arduino['l298n_setup'] = function(block) {
  var MotorA_enA = block.getFieldValue('MotorA_enA');
  var MotorA_in1 = block.getFieldValue('MotorA_in1');
  var MotorA_in2 = block.getFieldValue('MotorA_in2');
  var MotorB_in3 = block.getFieldValue('MotorB_in3');
  var MotorB_in4 = block.getFieldValue('MotorB_in4');
  var MotorB_enB = block.getFieldValue('MotorB_enB');
  
  //Define all PINs for the Motor Driver and declare them as Output PINs
  Blockly.Arduino.addVariable("MotorA_enA", "int PIN_MotorA_enA = " + MotorA_enA + ";", true);
  Blockly.Arduino.reservePin(block, MotorA_enA, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');
  Blockly.Arduino.addSetup('io_' + MotorA_enA, 'pinMode(PIN_MotorA_enA, OUTPUT);', false);
  
  Blockly.Arduino.addVariable("MotorA_in1", "int PIN_MotorA_in1 = " + MotorA_in1 + ";", true);
  Blockly.Arduino.reservePin(block, MotorA_in1, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');
  Blockly.Arduino.addSetup('io_' + MotorA_in1, 'pinMode(PIN_MotorA_in1, OUTPUT);', false);
  
  Blockly.Arduino.addVariable("MotorA_in2", "int PIN_MotorA_in2 = " + MotorA_in2 + ";", true);
  Blockly.Arduino.reservePin(block, MotorA_in2, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');
  Blockly.Arduino.addSetup('io_' + MotorA_in2, 'pinMode(PIN_MotorA_in2, OUTPUT);', false);
  
  Blockly.Arduino.addVariable("MotorB_in3", "int PIN_MotorB_in3 = " + MotorB_in3 + ";", true);
  Blockly.Arduino.reservePin(block, MotorB_in3, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');
  Blockly.Arduino.addSetup('io_' + MotorB_in3, 'pinMode(PIN_MotorB_in3, OUTPUT);', false);
  
  Blockly.Arduino.addVariable("MotorB_in4", "int PIN_MotorB_in4 = " + MotorB_in4 + ";", true);
  Blockly.Arduino.reservePin(block, MotorB_in4, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');
  Blockly.Arduino.addSetup('io_' + MotorB_in4, 'pinMode(PIN_MotorB_in4, OUTPUT);', false);
  
  Blockly.Arduino.addVariable("MotorB_enB", "int PIN_MotorB_enB = " + MotorB_enB + ";", true);
  Blockly.Arduino.reservePin(block, MotorB_enB, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');
  Blockly.Arduino.addSetup('io_' + MotorB_enB, 'pinMode(PIN_MotorB_enB, OUTPUT);', false);  
  
  return '';
};

Blockly.Arduino['l298n_move'] = function(block) {
  var motor_select = block.getFieldValue('motor_select');
  var movement = block.getFieldValue('movement');
  var code = '';
  
  if(motor_select == "MotorA")
  {
	  if(movement == "stop")
	  {
		  code = "digitalWrite(PIN_MotorA_in1, LOW);\n";
		  code += "digitalWrite(PIN_MotorA_in2, LOW);\n";
		  code += "Serial.println(\"Motor A stopped!\");\n";
	  }
	  if(movement == "forward")
	  {
		  code = "digitalWrite(PIN_MotorA_in1, HIGH);\n";
		  code += "digitalWrite(PIN_MotorA_in2, LOW);\n";
		  code += "Serial.println(\"Motor A forward!\");\n";
	  }
	  if(movement == "backward")
	  {
		  code = "digitalWrite(PIN_MotorA_in1, LOW);\n";
		  code += "digitalWrite(PIN_MotorA_in2, HIGH);\n";
		  code += "Serial.println(\"Motor A backward!\");\n";
	  }
  }
  else if(motor_select == "MotorB")
  {
  	  if(movement == "stop")
	  {
		  code = "digitalWrite(PIN_MotorB_in3, LOW);\n";
		  code += "digitalWrite(PIN_MotorB_in4, LOW);\n";
		  code += "Serial.println(\"Motor B stopped!\");\n";
	  }
	  if(movement == "forward")
	  {
		  code = "digitalWrite(PIN_MotorB_in3, HIGH);\n";
		  code += "digitalWrite(PIN_MotorB_in4, LOW);\n";
		  code += "Serial.println(\"Motor B forward!\");\n";
	  }
	  if(movement == "backward")
	  {
		  code = "digitalWrite(PIN_MotorB_in3, LOW);\n";
		  code += "digitalWrite(PIN_MotorB_in4, HIGH);\n";
		  code += "Serial.println(\"Motor B backward!\");\n";
	  }
  }
  
  return code;
};