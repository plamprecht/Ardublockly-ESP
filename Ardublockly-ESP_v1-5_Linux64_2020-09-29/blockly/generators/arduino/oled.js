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
   
  var variable_oled_y_position = "int OLED_current_y_pos = 0;";
  
  var setupCode_oled = "display.init();\n  ";
  setupCode_oled += "display.setColor(WHITE);\n  ";
  setupCode_oled += "display.setTextAlignment(TEXT_ALIGN_LEFT);";

  var loopCode_oled_clear = "display.clear();\n";
  loopCode_oled_clear += "delay(10);\n";
  loopCode_oled_clear += "OLED_current_y_pos = 0;\n";
  
  Blockly.Arduino.addInclude('I2C_Wire', '#include <Wire.h>');
  Blockly.Arduino.addInclude('OLED_SSD1306Wire', '#include "SSD1306Wire.h"');
  Blockly.Arduino.addVariable("oled_init", variable_oled_init, true);
  Blockly.Arduino.addVariable("oled_y_position", variable_oled_y_position, true);
  Blockly.Arduino.addSetup("oled_setup", setupCode_oled, true);
  Blockly.Arduino.addLoop("oled_clear", loopCode_oled_clear, true);
  
  return '';
};

Blockly.Arduino['oled_display_text'] = function(block) {
  var text_to_display = Blockly.Arduino.valueToCode(block, 'text_to_display', Blockly.Arduino.ORDER_ATOMIC);
  var font_size = block.getFieldValue('font_size');
 
  var code = "display.setFont(ArialMT_Plain_" + font_size + ");\n";
  code += "display.drawString(0, OLED_current_y_pos, " + text_to_display + ");\n";
  code += "display.display();\n";
  if(font_size == "10")
	  code += "OLED_current_y_pos += 11;\n";
  else if(font_size == "16")
	  code += "OLED_current_y_pos += 17;\n";
  else if(font_size == "24")
	  code += "OLED_current_y_pos += 25;\n";
  
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

Blockly.Arduino['tft_spi_display_initialize'] = function(block) {
      
  var variable_tft_init = "TFT_eSPI tft = TFT_eSPI(TFT_WIDTH, TFT_HEIGHT);";
  
  var setupCode_tft = "tft.init();\n  ";
  setupCode_tft += "tft.setRotation(0);\n  ";
  setupCode_tft += "tft.fillScreen(TFT_BLACK);\n  ";
  setupCode_tft += "tft.setTextColor(TFT_WHITE);\n  ";
  setupCode_tft += "tft.setTextSize(1);\n  ";
  setupCode_tft += "tft.setCursor(0, 0);\n  ";
  setupCode_tft += "if (TFT_BL > 0) {\n    ";    					// TFT_BL has been set in the TFT_eSPI library in the User Setup file TTGO_T_Display.h
  setupCode_tft += "pinMode(TFT_BL, OUTPUT);\n    ";    			// Set backlight pin to output mode
  setupCode_tft += "digitalWrite(TFT_BL, TFT_BACKLIGHT_ON);\n  }\n"; 	// Turn backlight on. TFT_BACKLIGHT_ON has been set in the TFT_eSPI library in the User Setup file TTGO_T_Display.h
  
  var variable_tft_y_position = "int TFT_current_y_pos = 0;";
  
  Blockly.Arduino.addInclude('I2C_Wire', '#include <Wire.h>');
  Blockly.Arduino.addInclude('SPI', '#include <SPI.h>');
  Blockly.Arduino.addInclude('TFT_eSPI', '#include <TFT_eSPI.h>');
  Blockly.Arduino.addVariable("tft_init", variable_tft_init, true);
  Blockly.Arduino.addVariable("tft_y_position", variable_tft_y_position, true);
  Blockly.Arduino.addSetup("tft_setup", setupCode_tft, true);
      
  return '';
};

Blockly.Arduino['tft_set_fill_color'] = function(block) {
  var fill_color = block.getFieldValue('fill_color');
 
  var code = "tft.fillScreen(" + fill_color + ");\n";
  code += "TFT_current_y_pos = 0;\n";
  
  return code;
};

Blockly.Arduino['tft_set_text_color'] = function(block) {
  var text_color = block.getFieldValue('text_color');
  var background_color = block.getFieldValue('background_color');
  
  var code = "tft.setTextColor(" + text_color + ", " + background_color + ");\n";
  return code;
};

Blockly.Arduino['tft_set_rotation'] = function(block) {
  var rotation = block.getFieldValue('rotation');
 
  var code = "tft.setRotation(" + rotation + ");\n";
  return code;
};

Blockly.Arduino['tft_display_text'] = function(block) {
  var text_to_display = Blockly.Arduino.valueToCode(block, 'text_to_display', Blockly.Arduino.ORDER_ATOMIC);
  var font_size = block.getFieldValue('font_size');
  
  var code = "tft.setTextSize(" + font_size + ");\n";
  code += "tft.drawString(" + text_to_display + ", 0, TFT_current_y_pos);\n";
  
  if(font_size == "1")
	  code += "TFT_current_y_pos += 11;\n\n";
  else if(font_size == "2")
	  code += "TFT_current_y_pos += 21;\n\n";
  else if(font_size == "3")
	  code += "TFT_current_y_pos += 31;\n\n";
  else if(font_size == "4")
	  code += "TFT_current_y_pos += 41;\n\n";
  else if(font_size == "5")
	  code += "TFT_current_y_pos += 51;\n\n";
  
  return code;
};



















