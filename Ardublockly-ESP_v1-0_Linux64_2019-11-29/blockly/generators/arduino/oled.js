/**
 * OLED GENERATOR!
 *
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for ESP WIFI library.
 * Code generator for the WIFI Connection setup.
 */
 
'use strict';

goog.provide('Blockly.Arduino.oled');

goog.require('Blockly.Arduino');


Blockly.Arduino['oled_display_initialize'] = function(block) {
  var i2c_address = block.getFieldValue('i2c_address');
  var sda = block.getFieldValue('sda');
  var scl = block.getFieldValue('scl');
  
  var variable_oled_init = "SSD1306Wire display(" + i2c_address + ", " + sda + ", " + scl + ");";
  
  Blockly.Arduino.addVariable("oled_init", variable_oled_init, true);
  
  return '';
};

Blockly.Arduino['oled_display_text'] = function(block) {
  var text_to_display = Blockly.Arduino.valueToCode(block, 'text_to_display', Blockly.Arduino.ORDER_ATOMIC);
  var font_size = block.getFieldValue('font_size');
  
  var variable_oled_y_position = "int OLED_current_y_pos = 0;";
  
  var setupCode_oled = "display.init();\n  ";
  setupCode_oled += "display.setColor(WHITE);\n  ";
  setupCode_oled += "display.setTextAlignment(TEXT_ALIGN_LEFT);";
  
  var loopCode_oled_clear = "display.clear();\n";
  loopCode_oled_clear += "delay(10);\n";
  loopCode_oled_clear += "OLED_current_y_pos = 0;\n";
  
  var code = "display.setFont(ArialMT_Plain_" + font_size + ");\n";
  code += "display.drawString(0, OLED_current_y_pos, " + text_to_display + ");\n";
  code += "display.display();\n";
  if(font_size == "10")
	  code += "OLED_current_y_pos += 11;\n";
  else if(font_size == "16")
	  code += "OLED_current_y_pos += 17;\n";
  else if(font_size == "24")
	  code += "OLED_current_y_pos += 25;\n";
  
  Blockly.Arduino.addInclude('I2C_Wire', '#include <Wire.h>');
  Blockly.Arduino.addInclude('OLED_SSD1306Wire', '#include "SSD1306Wire.h"');
  Blockly.Arduino.addVariable("oled_y_position", variable_oled_y_position, true);
  Blockly.Arduino.addSetup("oled_setup", setupCode_oled, true);
  Blockly.Arduino.addLoop("oled_clear", loopCode_oled_clear, true);
  return code;
};

Blockly.Arduino['oled_display_clear'] = function(block) {
   
  var variable_oled_y_position = "int OLED_current_y_pos = 0;";
  
  var code = "display.clear();\n";
  code += "delay(10);\n";
  code += "OLED_current_y_pos = 0;\n";
    
  Blockly.Arduino.addVariable("oled_y_position", variable_oled_y_position, false);
  
  return code;
};