/**
 * MQTT BLOCK!
 *
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for Arduino WIFI library.
 *     The Arduino WIFI functions syntax can be found in the following URL:
 *     http://arduino.cc/en/Reference/Stepper
 *     Note that this block uses the Blockly.FieldInstance instead of
 *     Blockly.FieldDropdown which generates a unique instance per setup block
 *     in the workspace.
 */
'use strict';

goog.provide('Blockly.Blocks.wifi');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


Blockly.Blocks['mqtt_subscribe'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MQTT Subscribe to -");
    this.appendValueInput("MQTT_server")
        .setCheck("String")
        .appendField("MQTT Server IP");
    this.appendValueInput("MQTT_port")
        .setCheck("String")
        .appendField("MQTT Server Port");
    this.appendDummyInput()
        .appendField("Topic");
    this.appendValueInput("MQTT_topic")
        .setCheck("String")
        .appendField(new Blockly.FieldVariable("MQTT_topic"), "MQTT_topic");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Connect to MQTT Broker");
 this.setHelpUrl("https://randomnerdtutorials.com/esp32-mqtt-publish-subscribe-arduino-ide/");
  }
};

Blockly.Blocks['mqtt_publish'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MQTT Publish Messages - Topic");
    this.appendValueInput("MQTT_topic")
        .setCheck("String")
        .appendField(new Blockly.FieldVariable("MQTT_topic"), "MQTT_topic");
    this.appendStatementInput("Messages_to_Publish")
        .setCheck("String");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Publish Message on MQTT Topic to Broker");
 this.setHelpUrl("https://randomnerdtutorials.com/esp32-mqtt-publish-subscribe-arduino-ide/");
  }
};