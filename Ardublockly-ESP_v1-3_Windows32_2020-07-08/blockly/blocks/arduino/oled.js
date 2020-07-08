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

Blockly.Blocks['oled_display_initialize'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("OLED Display Initialize")
        .appendField("I2C: Device Address")
        .appendField(new Blockly.FieldTextInput("0x3c"), "i2c_address")
        .appendField("SDA Pin:")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.i2cPins), 'sda')
        .appendField("SCL Pin:")
		.appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.i2cPins), 'scl');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("REQUIRED: Library ESP Oled Driver for SSD1306 by Eichhorn and Weinberg.  This Block will display 1 line of text on the OLED Display connected via I2C. If you want to process several strings in one line please concatinate them first (with a block see Category \"Texts\")");
 this.setHelpUrl("https://techtutorialsx.com/2017/12/02/esp32-arduino-interacting-with-a-ssd1306-oled-display/");
  }
};

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

Blockly.Blocks['tft_spi_display_initialize'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TFT Display Initialize  via SPI Bus");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(85);
 this.setTooltip("REQUIRED: Library TFT_eSPI by Bodmer. This block initilizes the internal/external display connected via SPI Bus (Miso / Mosi / clk)");
 this.setHelpUrl("https://sites.google.com/site/jmaathuis/arduino/lilygo-ttgo-t-display-esp32");
  }
};

Blockly.Blocks['tft_set_fill_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set TFT Display Fill Color to")
        .appendField(new Blockly.FieldDropdown([["black","TFT_BLACK"], ["white","TFT_WHITE"], ["darkgrey","TFT_DARKGREY"], ["lightgrey","TFT_LIGHTGREY"], ["brown","TFT_BROWN"], ["maroon","TFT_MAROON"], ["navy","TFT_NAVY"], ["blue","TFT_BLUE"], ["skyblue","TFT_SKYBLUE"], ["darkcyan","TFT_DARKCYAN"], ["cyan","TFT_CYAN"], ["darkgreen","TFT_DARKGREEN"], ["olive","TFT_OLIVE"], ["green","TFT_GREEN"], ["greenyellow","TFT_GREENYELLOW"], ["yellow","TFT_YELLOW"], ["orange","TFT_ORANGE"], ["red","TFT_RED"], ["purple","TFT_PURPLE"], ["violet","TFT_VIOLET"], ["magenta","TFT_MAGENTA"], ["pink","TFT_PINK"], ["gold","TFT_GOLD"], ["silver","TFT_SILVER"]]), "fill_color");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(85);
  this.setTooltip("REQUIRED: add block \"TFT Display Initialize\" before using this block. This block fills the display with a color. By filling with the background color the display can be cleared.");
  this.setHelpUrl("https://programmer.ink/think/color-setting-and-text-display-esp32-learning-tour-arduino-version.html");
  }
};

Blockly.Blocks['tft_set_text_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set TFT Display Text Color to")
        .appendField(new Blockly.FieldDropdown([["black","TFT_BLACK"], ["white","TFT_WHITE"], ["darkgrey","TFT_DARKGREY"], ["lightgrey","TFT_LIGHTGREY"], ["brown","TFT_BROWN"], ["maroon","TFT_MAROON"], ["navy","TFT_NAVY"], ["blue","TFT_BLUE"], ["skyblue","TFT_SKYBLUE"], ["darkcyan","TFT_DARKCYAN"], ["cyan","TFT_CYAN"], ["darkgreen","TFT_DARKGREEN"], ["olive","TFT_OLIVE"], ["green","TFT_GREEN"], ["greenyellow","TFT_GREENYELLOW"], ["yellow","TFT_YELLOW"], ["orange","TFT_ORANGE"], ["red","TFT_RED"], ["purple","TFT_PURPLE"], ["violet","TFT_VIOLET"], ["magenta","TFT_MAGENTA"], ["pink","TFT_PINK"], ["gold","TFT_GOLD"], ["silver","TFT_SILVER"]]), "text_color")
        .appendField("and Background Color to")
        .appendField(new Blockly.FieldDropdown([["black","TFT_BLACK"], ["white","TFT_WHITE"], ["darkgrey","TFT_DARKGREY"], ["lightgrey","TFT_LIGHTGREY"], ["brown","TFT_BROWN"], ["maroon","TFT_MAROON"], ["navy","TFT_NAVY"], ["blue","TFT_BLUE"], ["skyblue","TFT_SKYBLUE"], ["darkcyan","TFT_DARKCYAN"], ["cyan","TFT_CYAN"], ["darkgreen","TFT_DARKGREEN"], ["olive","TFT_OLIVE"], ["green","TFT_GREEN"], ["greenyellow","TFT_GREENYELLOW"], ["yellow","TFT_YELLOW"], ["orange","TFT_ORANGE"], ["red","TFT_RED"], ["purple","TFT_PURPLE"], ["violet","TFT_VIOLET"], ["magenta","TFT_MAGENTA"], ["pink","TFT_PINK"], ["gold","TFT_GOLD"], ["silver","TFT_SILVER"]]), "background_color");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(85);
 this.setTooltip("REQUIRED: add block \"TFT Display Initialize\" before using this block. This block initilizes the internal/external display connected via SPI Bus (Miso / Mosi / clk)");
 this.setHelpUrl("https://sites.google.com/site/jmaathuis/arduino/lilygo-ttgo-t-display-esp32");
  }
};

Blockly.Blocks['tft_set_rotation'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set TFT Display Rotation")
        .appendField(new Blockly.FieldDropdown([["Portrait 0 degrees","0"], ["Landscape 90 degrees","1"], ["Portrait 180 degrees","2"], ["Landscape 270 degrees","3"]]), "rotation");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(85);
 this.setTooltip("REQUIRED: add block \"TFT Display Initialize\" before using this block. This block sets the TFT Display rotation to change the text orientation");
 this.setHelpUrl("https://learn.adafruit.com/adafruit-gfx-graphics-library/rotating-the-display");
  }
};

Blockly.Blocks['tft_display_text'] = {
  init: function() {
    this.appendValueInput("text_to_display")
        .setCheck(null)
        .appendField("TFT Display print text");
    this.appendDummyInput()
        .appendField("Font size")
        .appendField(new Blockly.FieldDropdown([["10 pixel","1"], ["20 pixel","2"], ["30 pixel","3"], ["40 pixel","4"], ["50 pixel","5"]]), "font_size");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(85);
 this.setTooltip("REQUIRED: Library TFT_eSPI by Bodmer. This block prints a text to the TFT Display in a selected font size");
 this.setHelpUrl("https://www.arduino.cc/en/Reference/TFTSetTextSize");
  }
};