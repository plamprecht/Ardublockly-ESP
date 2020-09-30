/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Generating Arduino code for variables blocks.
 */
'use strict';

goog.provide('Blockly.Arduino.variables');

goog.require('Blockly.Arduino');


/**
 * Code generator for variable (X) getter.
 * Arduino code: loop { X }
 * @param {Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['variables_get'] = function(block) {
  var code = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator for variable (X) setter (Y).
 * Arduino code: type X;
 *               loop { X = Y; }
 * @param {Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['variables_set'] = function(block) {
  var argument0 = Blockly.Arduino.valueToCode(block, 'VALUE',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.Arduino.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + argument0 + ';\n';
};

/**
 * Code generator for variable (X) casting (Y).
 * Arduino code: loop { (Y)X }
 * @param {Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['variables_set_type'] = function(block) {
  var argument0 = Blockly.Arduino.valueToCode(block, 'VARIABLE_SETTYPE_INPUT',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var varType = Blockly.Arduino.getArduinoType_(
      Blockly.Types[block.getFieldValue('VARIABLE_SETTYPE_TYPE')]);
  var code = '(' + varType + ')(' + argument0 + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['eeprom_write'] = function(block) {
  var string_to_write = Blockly.Arduino.valueToCode(block, 'string_to_write', Blockly.Arduino.ORDER_ATOMIC);
  
  var setupCode_eeprom_begin = "EEPROM.begin(255);";
  
  var function_eeprom_write = "void eeprom_write(String string_to_write) {\n  ";
  function_eeprom_write += "int strlen = string_to_write.length() + 1; //+1 in length for '\0' char for string termination\n  ";
  function_eeprom_write += "if(strlen > 255) {\n    ";
  function_eeprom_write += "Serial.println(\"ERROR: String too long for writing to EEPROM - Maximum 255 characters allowed!\");\n    ";
  function_eeprom_write += "return;\n  }\n  ";
  function_eeprom_write += "byte bytes_of_string[strlen];\n  ";
  function_eeprom_write += "string_to_write.getBytes(bytes_of_string, strlen);\n  ";
  function_eeprom_write += "for (int z = 0; z < strlen; z++){\n    ";
  function_eeprom_write += "EEPROM.write(z, bytes_of_string[z]);\n  }\n  ";
  function_eeprom_write += "EEPROM.commit();\n  ";
  function_eeprom_write += "Serial.println(\"Saved String '\" + string_to_write + \"' to EEPROM\");\n";
  function_eeprom_write += "}";
    
  var code = "eeprom_write(" + string_to_write + ");\n";
  
  Blockly.Arduino.addInclude('eeprom', '#include <EEPROM.h>');
  Blockly.Arduino.addFunction("eeprom_write", function_eeprom_write);
  Blockly.Arduino.addSetup("eeprom_begin", setupCode_eeprom_begin, true);
  
  return code;
};

Blockly.Arduino['eeprom_read'] = function(block) {
  var value_string_to_load = Blockly.Arduino.valueToCode(block, 'string_to_load', Blockly.Arduino.ORDER_ATOMIC);
  
  var setupCode_eeprom_begin = "EEPROM.begin(255);";
  
  var function_eeprom_read = "String eeprom_read() {\n  ";
  function_eeprom_read += "int char_count = 0;\n  ";
  function_eeprom_read += "while ((char)EEPROM.read(char_count) != '\\0') {\n    ";
  function_eeprom_read += "char_count++;\n  ";
  function_eeprom_read += "};\n  ";
  function_eeprom_read += "char* string_to_read = (char*) calloc(char_count,sizeof(char));\n  "
  function_eeprom_read += "for (int z = 0; z <= char_count; z++){\n    ";
  function_eeprom_read += "string_to_read[z] = (char)EEPROM.read(z);\n  ";
  function_eeprom_read += "}\n  ";
  //function_eeprom_read += "string_to_read[char_count] = '\\0'; //set null char as end of string\n";
  function_eeprom_read += "return String(string_to_read);\n";
  function_eeprom_read += "}";
  
  var code = "eeprom_read()";
  
  Blockly.Arduino.addInclude('eeprom', '#include <EEPROM.h>');
  Blockly.Arduino.addFunction("eeprom_read", function_eeprom_read);
  Blockly.Arduino.addSetup("eeprom_begin", setupCode_eeprom_begin, true);
  
  return [code, Blockly.Arduino.ORDER_NONE];
};






