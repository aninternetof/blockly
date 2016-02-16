Blockly.JavaScript['set_motor'] = function(block) {
  var dropdown_motor = block.getFieldValue('MOTOR');
  var dropdown_direction = block.getFieldValue('DIRECTION');
  var value_speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "setMotor('"+dropdown_motor+"', '"+dropdown_direction+"', '"+value_speed+"')";
  return code;
};

Blockly.JavaScript['stop_motor'] = function(block) {
  var dropdown_motor = block.getFieldValue('MOTOR');
  var code = "stopMotor('" + dropdown_motor + "')";
  return code;
};
