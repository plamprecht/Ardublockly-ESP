/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Block for the Arduino map functionality.
 *     The Arduino built in functions syntax can be found at:
 *     http://arduino.cc/en/Reference/HomePage
 *
 * TODO: This block can be improved to set the new range properly.
 */
'use strict';

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.variables.HUE = 330;

Blockly.Blocks['variables_set_type'] = {
  /**
   * Block for variable casting.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/HomePage');
    this.setColour(Blockly.Blocks.variables.HUE);
    this.appendValueInput('VARIABLE_SETTYPE_INPUT');
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_VAR_AS)
        .appendField(new Blockly.FieldDropdown(
                         Blockly.Types.getValidTypeArray()),
                     'VARIABLE_SETTYPE_TYPE');
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.ARD_VAR_AS_TIP);
  },
  /**
   * Assigns a type to the block based on the selected type to cast.
   * @return {!string} Blockly type for this block configuration.
   * @this Blockly.Block
   */
  getBlockType: function() {
    var blocklyTypeKey = this.getFieldValue('VARIABLE_SETTYPE_TYPE');
    return Blockly.Types[blocklyTypeKey];
  }
};

Blockly.Blocks['eeprom_write'] = {
  init: function() {
    this.appendValueInput("string_to_write")
        .setCheck("String")
        .appendField("Write String to EEPROM (max. 250 characters)");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Saves a string to the permanent EEPROM Memory - it will still be available to load after the ESP Microcontroller was out of power or did a restart");
 this.setHelpUrl("https://randomnerdtutorials.com/esp32-flash-memory/");
  }
};

Blockly.Blocks['eeprom_read'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read String from EEPROM");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(230);
 this.setTooltip("Loads a string from the permanent EEPROM Memory - it will still be available to load after the ESP Microcontroller was out of power or did a restart");
 this.setHelpUrl("https://randomnerdtutorials.com/esp32-flash-memory/");
  }
};
