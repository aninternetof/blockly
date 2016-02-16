Blockly.Blocks['set_motor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turn on")
        .appendField(new Blockly.FieldDropdown([["left", "LEFT"], ["right", "RIGHT"]]), "MOTOR")
        .appendField("motor, going ")
        .appendField(new Blockly.FieldDropdown([["forward", "FORWARD"], ["backward", "BACKWARD"]]), "DIRECTION")
        .appendField("at speed");
    this.appendValueInput("SPEED")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(42);
    this.setTooltip('Set the speed and direction of a motor');
    this.setHelpUrl('http://www.rovercode.org/ref/set_motor');
  }
};

Blockly.Blocks['stop_motor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("stop")
        .appendField(new Blockly.FieldDropdown([["left", "LEFT"], ["right", "RIGHT"]]), "MOTOR")
        .appendField("motor");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(42);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
