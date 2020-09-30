/**
 * MQTT BLOCK!
 *
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @MANDATORY!! TO RUN this Block you need to add the PubSubClient Library into Arduino IDE
 * Please Setup Serial before this Block to see all the status messages
 */
'use strict';

goog.provide('Blockly.Blocks.mqtt');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


Blockly.Blocks['mqtt_server_connect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MQTT Server")
        .appendField(new Blockly.FieldTextInput(""), "MQTT Server");
    this.appendDummyInput()
        .appendField("MQTT Server Port")
        .appendField(new Blockly.FieldTextInput(""), "MQTT Server Port");
    this.appendDummyInput()
        .appendField("Optional: MQTT User")
        .appendField(new Blockly.FieldTextInput(""), "MQTT User");
    this.appendDummyInput()
        .appendField("Optional: MQTT Password")
        .appendField(new Blockly.FieldTextInput(""), "MQTT Password");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
	this.setTooltip("Connect to MQTT Server");
	this.setHelpUrl("https://techtutorialsx.com/2017/04/24/esp32-publishing-messages-to-mqtt-topic/");
  }
};

Blockly.Blocks['mqtt_publish'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MQTT Publish Topic")
		.appendField(new Blockly.FieldTextInput(""), "MQTT Topic");
    this.appendDummyInput()
        .appendField("Message")
        .appendField(new Blockly.FieldTextInput(""), "MQTT Message");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
	this.setTooltip("Publish message to MQTT Broker");
this.setHelpUrl("https://randomnerdtutorials.com/esp32-mqtt-publish-subscribe-arduino-ide/");
  }
};