/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Code generator for Arduino Digital and Analogue input/output.
 *     Arduino built in function docs: http://arduino.cc/en/Reference/HomePage
 */
'use strict';

goog.provide('Blockly.Arduino.pwm');

goog.require('Blockly.Arduino');


/**
 * Function for 'set pin' (X) to a state (Y).
 * Arduino code: setup { pinMode(X, OUTPUT); }
 *               loop  { digitalWrite(X, Y); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */

Blockly.Arduino['pwm_setup'] = function(block) {
  var pwm_channel = block.getFieldValue('pwm_channel');
  var freq = block.getFieldValue('freq');
  var resolution = block.getFieldValue('resolution');
  
  //Configure PWM
  var setupCode_pwm = "ledcSetup(" + pwm_channel + ", " + freq + ", "+ resolution + ");";
    
  Blockly.Arduino.addSetup("pwm_setup", setupCode_pwm, true);
  
  return '';
};

Blockly.Arduino['pwm_to_pin'] = function(block) {
  var pwm_channel = block.getFieldValue('pwm_channel');
  var pwm_pin = block.getFieldValue('pwm_pin');
  
  //Attach PWM to GPIO Pin which should be PWM controlled
  var setupCode_pwm_attach = "ledcAttachPin(" + pwm_pin + ", " + pwm_channel + ");";
  
  Blockly.Arduino.addSetup("pwm_attach_"+pwm_pin, setupCode_pwm_attach, true);
  
  return '';
};

Blockly.Arduino['pwm_set_dutycycle'] = function(block) {
  var pwm_channel = block.getFieldValue('pwm_channel');
  var duty_cycle = block.getFieldValue('duty_cycle');
  
  // Set new duty cycle for PWM channel
  var code = "ledcWrite(" + pwm_channel + ", " + duty_cycle + ");";
  return code;
};
