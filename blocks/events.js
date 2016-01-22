Blockly.Blocks['pop_event_queue'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pop event queue");
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
