/**
 * WLAN Block!
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

goog.provide('Blockly.Blocks.wifi');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');



Blockly.Blocks['connect_to_wlan'] = {
  init: function() {
	this.appendDummyInput()
        .appendField("Connect to this WLAN Network:");
    this.appendDummyInput()
        .appendField("Connect to this WLAN Network:");
    this.appendDummyInput()
        .appendField("WLAN SSID")
        .appendField(new Blockly.FieldTextInput(""), "SSID");
    this.appendDummyInput()
        .appendField("WLAN Key")
        .appendField(new Blockly.FieldTextInput(""), "Key");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Connect ESP with an existing WLAN Network");
 this.setHelpUrl("https://circuits4you.com/2019/01/05/connecting-esp32-to-wifi-network/");
  }
};

Blockly.Blocks['start_wlan_access_point'] = {
  init: function() {
	this.appendDummyInput()
	    .appendField("Start this new WLAN Network:");
    this.appendDummyInput()
        .appendField("WLAN SSID")
        .appendField(new Blockly.FieldTextInput(""), "SSID");
    this.appendDummyInput()
        .appendField("WLAN Key (empty OR minimum 8 characters)")
        .appendField(new Blockly.FieldTextInput(""), "Key");
    this.setInputsInline(false);
	this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Start a WLAN Access Point with the ESP");
 this.setHelpUrl("https://randomnerdtutorials.com/esp32-access-point-ap-web-server/");
  }
};