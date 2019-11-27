/**
 * Webserver GENERATOR!
 *
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for starting and running a Webserver on ESP32.
 * Please Setup Serial before this Block to see all the status messages
 */
 
'use strict';

goog.provide('Blockly.Arduino.webserver');

goog.require('Blockly.Arduino');

Blockly.Arduino['webserver_start'] = function(block) {
  var webserver_port_input = block.getFieldValue('Webserver Port');
  var webserver_blocks = Blockly.Arduino.statementToCode(block, 'Webserver_blocks');
  var webserver_port = webserver_port_input == "" ? "80" : webserver_port_input;
  
  var variable_webserver = "WebServer server(" + webserver_port + ");";  
  var setupCode_webserver_start = "server.begin();\n  ";
  setupCode_webserver_start += "Serial.print(\"Webserver started at IP Address \");\n  ";
  setupCode_webserver_start += "Serial.print(WiFi.localIP());\n  "
  setupCode_webserver_start += "Serial.println(\" and Port "+ webserver_port + "\");\n  ";
  setupCode_webserver_start += "Serial.print(\"Use http://\");\n  ";
  setupCode_webserver_start += "Serial.print(WiFi.localIP());\n  "
  setupCode_webserver_start += (webserver_port == "80") ? "Serial.println(\"/ to access\");" : "Serial.println(\":" + webserver_port + "/ to access\");";
  var setupCode_webserver_blocks = webserver_blocks;
  
  Blockly.Arduino.addInclude('webserver', '#include <WebServer.h>');
  Blockly.Arduino.addVariable("webserver_define", variable_webserver, true);
  Blockly.Arduino.addSetup("webserver_blocks", setupCode_webserver_blocks, true);
  Blockly.Arduino.addSetup("webserver_start", setupCode_webserver_start, true);
  var code = "server.handleClient();\n";
  
  return code;
};

Blockly.Arduino['handle_url'] = function(block) {
  var page = block.getFieldValue('Page');
  var page_name = page != "" ? page.replace(/\//g,"_") : "default";
  var handle_url_blocks = Blockly.Arduino.statementToCode(block, 'Handle_URL_blocks');
  
  var function_webserver_handle = "void webserver_handle_" + page_name + "() {\n";
  function_webserver_handle += handle_url_blocks;
  function_webserver_handle += "}";
  
  var setupCode_webserver_handle = "server.on(\"/" + page + "\", webserver_handle_" + page_name + ");";
  
  Blockly.Arduino.addFunction("webserver_handle_function_" + page_name, function_webserver_handle);
  Blockly.Arduino.addSetup("webserver_handle_"+ page_name, setupCode_webserver_handle, true);
  
  return '';
};

Blockly.Arduino['handle_url_with_authentication'] = function(block) {
  var page = block.getFieldValue('Page');
  var page_name = page != "" ? page.replace(/\//g,"_") : "default";
  var handle_url_blocks = Blockly.Arduino.statementToCode(block, 'Handle_URL_blocks');
  var url_username = Blockly.Arduino.valueToCode(block, 'Username', Blockly.Arduino.ORDER_ATOMIC);
  var url_password = Blockly.Arduino.valueToCode(block, 'Password', Blockly.Arduino.ORDER_ATOMIC);
  
  var function_webserver_handle = "void webserver_handle_" + page_name + "() {\n";
  function_webserver_handle += handle_url_blocks;
  function_webserver_handle += "}";
  
  var setupCode_webserver_handle = "server.on(\"/" + page + "\", [](){\n    ";
  setupCode_webserver_handle += "if(!server.authenticate(" + url_username + ", " + url_password + "))\n      ";
  setupCode_webserver_handle += "return server.requestAuthentication();\n    ";
  setupCode_webserver_handle += "webserver_handle_" + page_name + "();\n  });";
  
  Blockly.Arduino.addFunction("webserver_handle_function_" + page_name, function_webserver_handle);
  Blockly.Arduino.addSetup("webserver_handle_"+ page_name, setupCode_webserver_handle, true);
    
  return '';
};

Blockly.Arduino['handle_url_notfound'] = function(block) {
  var handle_url_notfound_blocks = Blockly.Arduino.statementToCode(block, 'Handle_URL_notfound_blocks');
  
  var function_webserver_handle_notfound = "void webserver_handle_notfound() {\n";
  function_webserver_handle_notfound += handle_url_notfound_blocks;
  function_webserver_handle_notfound += "}";
  
  var setupCode_webserver_handle_notfound = "server.onNotFound(webserver_handle_notfound);";
  
  Blockly.Arduino.addFunction("webserver_handle_function_notfound", function_webserver_handle_notfound);
  Blockly.Arduino.addSetup("webserver_handle_notfound", setupCode_webserver_handle_notfound, true);
  
  return '';
};

Blockly.Arduino['server_send'] = function(block) {
  var statecode = block.getFieldValue('statecode');
  var content_type = block.getFieldValue('content_type');
  var server_send_content = Blockly.Arduino.valueToCode(block, 'server_send_content', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = "server.send(" + statecode + ", \"" + content_type + "\", " + server_send_content + ");\n";
  
  return code;
};



