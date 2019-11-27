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
  var mqtt_topic = block.getFieldValue('MQTT Topic');
  var mqtt_message = block.getFieldValue('MQTT Message');
  
  var code = "client.publish(\"" + mqtt_topic + "\", \"" + mqtt_message + "\");\n";
  return code;
};