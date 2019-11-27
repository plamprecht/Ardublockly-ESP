/**
 * OLED Block!
 *
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for OLED Display library.
 * Code generator for displaying information on a OLED Display.
 */
 
'use strict';

goog.provide('Blockly.Blocks.oled');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['oled_display_text'] = {
  init: function() {
    this.appendValueInput("text_to_display")
        .setCheck(null)
        .appendField("OLED Display print text");
    this.appendDummyInput()
        .appendField("Font size ArialMT")
        .appendField(new Blockly.FieldDropdown([["10","10"], ["16","16"], ["24","24"]]), "font_size");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("REQUIRED: Library ESP Oled Driver for SSD1306 by Eichhorn and Weinberg.  This Block will display 1 line of text on the OLED Display connected via I2C. If you want to process several strings in one line please concatinate them first (with a block see Category \"Texts\")");
 this.setHelpUrl("https://techtutorialsx.com/2017/12/02/esp32-arduino-interacting-with-a-ssd1306-oled-display/");
  }
};

Blockly.Blocks['oled_display_clear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Clear OLED Display");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("After this block you can continue with a completely empty OLED Display");
 this.setHelpUrl("https://techtutorialsx.com/2017/12/02/esp32-arduino-interacting-with-a-ssd1306-oled-display/");
  }
};
