/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for Arduino Digital and Analogue input and output
 *     functions. The Arduino function syntax can be found at
 *     http://arduino.cc/en/Reference/HomePage
 *
 * TODO: maybe change this to a "PIN" BlocklyType
 */
'use strict';

goog.provide('Blockly.Blocks.pwm');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['pwm_setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Setup the new PWM Channel")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"]]), "pwm_channel");
    this.appendDummyInput()
        .appendField("Enter Frequency in Hertz")
        .appendField(new Blockly.FieldNumber(0, 0), "freq")
        .appendField("Select resolution in Bits")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"]]), "resolution");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Universal PWM Setup (e.g. for a Motor Driver, a LED, etc.)");
 this.setHelpUrl("https://randomnerdtutorials.com/esp32-pwm-arduino-ide/");
  }
};

Blockly.Blocks['pwm_to_pin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Attach the PWM Channel")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"]]), "pwm_channel")
        .appendField("to PIN")
		.appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.pwmPins), 'pwm_pin');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("If you use this Block multiple times you can use more PWM Pins with the same PWM channel (e.g. for a Motor Driver, a LED, etc.)");
 this.setHelpUrl("https://randomnerdtutorials.com/esp32-pwm-arduino-ide/");
 }
};

Blockly.Blocks['pwm_set_dutycycle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Change PWM Duty Cycle for PWM Channel")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"]]), "pwm_channel")
        .appendField("set new Duty Cycle")
        .appendField(new Blockly.FieldNumber(0, 0), "duty_cycle");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("\"PWM_setup\" Block required before setting a Duty Cycle on a PWM Channel. Calculate the Duty Cycle from the PWM Resolution Bits (2 bit = 0-3, 8 bit = 0-255, etc.)");
 this.setHelpUrl("https://randomnerdtutorials.com/esp32-pwm-arduino-ide/");
  }
};

