/**
 * MQTT GENERATOR!
 *
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for the MQTT library blocks.
 */
'use strict';

goog.provide('Blockly.Arduino.mqtt');

goog.require('Blockly.Arduino');


/**
 * Code generator for the mqtt server setup.
 * @MANDATORY!! TO RUN this Block you need to add the PubSubClient Library into Arduino IDE
 * Please Setup Serial before this Block to see all the status messages
 */
 
Blockly.Arduino['mqtt_server_connect'] = function(block) {
  var mqtt_server = block.getFieldValue('MQTT Server');
  var mqtt_server_port = block.getFieldValue('MQTT Server Port');
  var mqtt_user = block.getFieldValue('MQTT User');
  var mqtt_password = block.getFieldValue('MQTT Password');
  
  var variable_mqtt_server = "const char* mqtt_server = \""+ mqtt_server + "\";";
  var variable_mqtt_server_port = "const int mqtt_port = "+ mqtt_server_port + ";";
  var variable_mqtt_user = "const char* mqtt_user = \""+ mqtt_user + "\";";
  var variable_mqtt_password = "const char* mqtt_password = \""+ mqtt_password + "\";";
  
  var define_WiFiClient = "WiFiClient espClient;";
  var define_PubSubClient = "PubSubClient client(espClient);";
  
  var setupCode_mqtt_SetServer = "client.setServer(mqtt_server, mqtt_port);";
  
  //connect to MQTT Server
  var setupCode_mqtt_Connect = "Serial.print(\"Connecting to MQTT Server\");" + "\n  ";
  setupCode_mqtt_Connect += "while (!client.connected()) {" + "\n";
  setupCode_mqtt_Connect += "\tSerial.print(\".\");" + "\n";
  if(mqtt_user == "")
	  setupCode_mqtt_Connect += "\tif(client.connect(\"ESP32Client\"))" + "\n";
  else
	  setupCode_mqtt_Connect += "\tif(client.connect(\"ESP32Client\", " + mqtt_user + ", " + mqtt_password + "))" + "\n";
  setupCode_mqtt_Connect += "\t  Serial.println(\"\\nMQTT connected!\");" + "\n";
  setupCode_mqtt_Connect += "\telse {" + "\n";
  setupCode_mqtt_Connect += "\t  Serial.print(\"\\nMQTT Connection failed with state: \");" + "\n";
  setupCode_mqtt_Connect += "\t  Serial.println(client.state());" + "\n" + "\t  delay(2000);\n\t}\n  }";
  
  Blockly.Arduino.addInclude('mqtt', '#include <PubSubClient.h>');
  Blockly.Arduino.addVariable("mqtt_server", variable_mqtt_server, true);
  Blockly.Arduino.addVariable("mqtt_server_port", variable_mqtt_server_port, true);
  Blockly.Arduino.addVariable("mqtt_user", variable_mqtt_user, true);
  Blockly.Arduino.addVariable("mqtt_password", variable_mqtt_password, true);
  Blockly.Arduino.addVariable("WiFiClient", define_WiFiClient, true);
  Blockly.Arduino.addVariable("PubSubClient", define_PubSubClient, true);
  Blockly.Arduino.addSetup("mqtt_SetServer", setupCode_mqtt_SetServer, true);
  Blockly.Arduino.addSetup("mqtt_Connect", setupCode_mqtt_Connect, true);
  
  var code = "client.loop();\n";
  
  return code;
};

Blockly.Arduino['mqtt_publish'] = function(block) {
  var mqtt_topic = Blockly.Arduino.valueToCode(this, 'MQTT_topic', Blockly.Arduino.ORDER_ATOMIC);
  var mqtt_message = Blockly.Arduino.valueToCode(this, 'MQTT_message', Blockly.Arduino.ORDER_ATOMIC);
  var code = "client.publish(String(" + mqtt_topic + ").c_str(), String(" + mqtt_message + ").c_str());\n";
  return code;
};

Blockly.Arduino['mqtt_subscribe_function'] = function(block) {
  var mqtt_subscribe_blocks = Blockly.Arduino.statementToCode(block, 'MQTT_Subscribe_Blocks');
  mqtt_subscribe_blocks = Blockly.Arduino.addLoopTrap(mqtt_subscribe_blocks, block.id);
    
  var function_mqtt_callback = "void mqtt_callback(char* topic, byte* message, unsigned int length) {\n  ";
  function_mqtt_callback += "for (int z = 0; z < length; z++)\n  {\n";
  function_mqtt_callback += mqtt_subscribe_blocks;
  function_mqtt_callback += "  }\n}";
  
  var setupCode_mqtt_SetCallback = "client.setCallback(mqtt_callback);";
  
  Blockly.Arduino.addFunction("mqtt_callback_function", function_mqtt_callback);
  Blockly.Arduino.addSetup("mqtt_setcallback", setupCode_mqtt_SetCallback, true);
  
  return null;
};

Blockly.Arduino['mqtt_subscribe'] = function(block) {
  var mqtt_topic = Blockly.Arduino.valueToCode(block, 'MQTT_topic', Blockly.Arduino.ORDER_ATOMIC);
  var mqtt_variable_message = Blockly.Arduino.valueToCode(block, 'MQTT_variable_message', Blockly.Arduino.ORDER_ATOMIC);
  
  var function_mqtt_callback_subscribe = "    if (topic == "+ mqtt_topic + ")\n      ";
  function_mqtt_callback_subscribe += mqtt_variable_message + " += (char)message[z];\n";
  
  var setupCode_mqtt_subscribe = "client.subscribe(String(" + mqtt_topic + ").c_str());";
  
  var declare_mqtt_variable_message = "char " + mqtt_variable_message + " = '';";
  
  Blockly.Arduino.addVariable(mqtt_variable_message, declare_mqtt_variable_message, true);
  Blockly.Arduino.addSetup("mqtt_subscribe_" + mqtt_topic, setupCode_mqtt_subscribe, true);
  
  return function_mqtt_callback_subscribe;
};

