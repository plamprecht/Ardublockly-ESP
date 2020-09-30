/**
 * WLAN GENERATOR!
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

goog.provide('Blockly.Arduino.wifi');

goog.require('Blockly.Arduino');



Blockly.Arduino['connect_to_wlan'] = function(block) {
	var ssid = block.getFieldValue('SSID');
	var key = block.getFieldValue('Key');
  
	// Communication to Serial Monitor that WLAN will be connected to specified SSID
	var setupCode_Comm_Prep = "Serial.print(\"Connecting to WLAN Network: "+ ssid + "\");";
	
	// Store SSID and Key in variables and connect WLAN now
	var variable_ssid = "char* ssid = \""+ ssid + "\";";
	var variable_key = "const char* key = \""+ key + "\";";
	var setupCode_Connect = "WiFi.mode(WIFI_STA);\n  " + "WiFi.begin(ssid, key);";
	// Wait till WLAN is connected
	var setupCode_WaitForConnection = "while (WiFi.status() != WL_CONNECTED) {" + "\n";
	setupCode_WaitForConnection += "\tdelay(500);" + "\n";
	setupCode_WaitForConnection += "\tSerial.print(\".\");" + "\n  }";
	// Communication to Serial Monitor that WLAN connection is established
	var setupCode_Comm_Est = "Serial.println();\n  " + "Serial.println(\"WLAN connected!\");\n  " + "Serial.print(\"Your IP address: \");\n  " + "Serial.println(WiFi.localIP());";
	  
	//Place the Code into the correct blocks
	Blockly.Arduino.addInclude('wifi', '#include <WiFi.h>');
	Blockly.Arduino.addVariable("ssid", variable_ssid, true);
	Blockly.Arduino.addVariable("key", variable_key, true);	
	Blockly.Arduino.addSetup("wifi_Comm_Prep", setupCode_Comm_Prep, true);
	Blockly.Arduino.addSetup("wifi_Connect", setupCode_Connect, true);
	Blockly.Arduino.addSetup("wifi_WaitForConnection", setupCode_WaitForConnection, true);
	Blockly.Arduino.addSetup("wifi_Comm_Est", setupCode_Comm_Est, true);
	return '';
};

Blockly.Arduino['start_wlan_access_point'] = function(block) {
  var ssid = block.getFieldValue('SSID');
  var key = block.getFieldValue('Key');
    
  // Communication to Serial Monitor that WiFi will be connected to specified SSID
  var setupCode_Comm_Prep = "Serial.println(\"Setting up Access Point: "+ ssid + "\");\n";
  // Connect WiFi now
  var variable_ssid = "char* ssid = \""+ ssid + "\";"
  var variable_key = "const char* key = \""+ key + "\";"
  var setupCode_Connect = "WiFi.mode(WIFI_AP);\n  " + "WiFi.softAP(ssid, key);\n";
  // Communication to Serial Monitor that WiFi connection is established
  var setupCode_AP_Est = "IPAddress AP_IP = WiFi.softAPIP();\n  " + "Serial.print(\"AP IP Address: \");\n  " + "Serial.println(AP_IP);\n";
    
  // Client ans Server Handling will be done by another Block (e.g. MQTT). See: https://randomnerdtutorials.com/esp32-access-point-ap-web-server/ or https://randomnerdtutorials.com/esp32-mqtt-publish-subscribe-arduino-ide/
     
  Blockly.Arduino.addInclude('wifi', '#include <WiFi.h>');
  Blockly.Arduino.addVariable("ssid", variable_ssid, true);
  Blockly.Arduino.addVariable("key", variable_key, true);	
  Blockly.Arduino.addSetup("wifi_Comm_Prep", setupCode_Comm_Prep, true);
  Blockly.Arduino.addSetup("wifi_Connect", setupCode_Connect, true);
  Blockly.Arduino.addSetup("wifi_AP_Est", setupCode_AP_Est, true);

  return '';
};
