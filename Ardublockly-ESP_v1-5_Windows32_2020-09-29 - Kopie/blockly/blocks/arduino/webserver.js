/**
 * Webserver Block!
 *
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for starting and running a Webserver on ESP32.
 * Please Setup Serial before this Block to see all the status messages
 */
 
'use strict';

goog.provide('Blockly.Blocks.webserver');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['webserver_start'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Start a Webserver at Port")
        .appendField(new Blockly.FieldTextInput(""), "Webserver Port");
    this.appendStatementInput("Webserver_blocks")
        .setCheck(null)
        .appendField("Blocks to handle the URLs:");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(285);
 this.setTooltip("This Block will start a Webserver - make sure that you are connected to a WLAN Network before using this Block");
 this.setHelpUrl("https://github.com/zhouhan0126/WebServer-esp32/blob/master/examples/HttpBasicAuth/HttpBasicAuth.ino");
  }
};

Blockly.Blocks['handle_url'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("http:// [Webserver-IP-Address] /")
        .appendField(new Blockly.FieldTextInput(""), "Page");
    this.appendStatementInput("Handle_URL_blocks")
        .setCheck(null)
        .appendField("Function or a Webserver-Send Block to handle");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(285);
 this.setTooltip("Do not specify any page url here to affect the default html page");
 this.setHelpUrl("https://lastminuteengineers.com/creating-esp32-web-server-arduino-ide/");
  }
};

Blockly.Blocks['handle_url_with_authentication'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("http:// [Webserver-IP-Address] /")
        .appendField(new Blockly.FieldTextInput(""), "Page");
    this.appendStatementInput("Handle_URL_blocks")
        .setCheck(null)
        .appendField("Function or a Webserver-Send Block to handle");
    this.appendDummyInput()
        .appendField("enable request authentication with");
    this.appendValueInput("Username")
        .setCheck(null)
        .appendField("Username");
    this.appendValueInput("Password")
        .setCheck(null)
        .appendField("Password");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(285);
 this.setTooltip("Do not specify any page url here to affect the default html page");
 this.setHelpUrl("https://github.com/zhouhan0126/WebServer-esp32/blob/master/examples/HttpBasicAuth/HttpBasicAuth.ino");
  }
};

Blockly.Blocks['handle_url_notfound'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Requested URL was NOT FOUND");
    this.appendStatementInput("Handle_URL_notfound_blocks")
        .setCheck(null)
        .appendField("Function or a Webserver-Send Block to handle");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(285);
 this.setTooltip("Could be a Function or a Webserver-Send Block");
 this.setHelpUrl("https://lastminuteengineers.com/creating-esp32-web-server-arduino-ide/");
  }
};

Blockly.Blocks['server_send'] = {
  init: function() {
    this.appendValueInput("server_send_content")
        .setCheck(null)
        .appendField("Webserver Send: State Code")
        .appendField(new Blockly.FieldDropdown([["200 - OK","200"], ["404 - NOT FOUND","404"]]), "statecode")
        .appendField("Content Type")
        .appendField(new Blockly.FieldDropdown([["text/plain - Text Only","text/plain"], ["text/html - HTML Code","text/html"]]), "content_type")
        .appendField("Content");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(285);
 this.setTooltip("\"Content\" is the STRING to send as Webpage (choose between \"Plain-Text\" or \"HTML\" Format) . It's RECOMMENDED to create a GLOBAL STRING VARIABLE FOR the BASIC PAGE STYLE / HEADER and CONCATINATE it with the SPECIFIC BODY PARTS for this URL. Don't forget to close the body and html tag at the end.");
 this.setHelpUrl("https://lastminuteengineers.com/creating-esp32-web-server-arduino-ide/");
  }
};
