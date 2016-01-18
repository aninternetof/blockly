Blockly.Blocks['get_something'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get Something");
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
