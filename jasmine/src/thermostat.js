function Thermostat() {
  this._temperature = 20;
  this._maxTemp = 25;
}
Thermostat.prototype.temperature = function() {
  return this._temperature;
};
Thermostat.prototype.up = function(number) {
  if (this._temperature + number > this._maxTemp) {
    throw new Error('PSM On: max temp is 25 degrees');
  } else {
    this._temperature += number;
  }
};
Thermostat.prototype.down = function(number) {
  if (this._temperature - number < 10) {
    throw new Error('min temp is 10 degrees');
  } else {
    this._temperature -= number;
  }
};
Thermostat.prototype.powerSavingModeOn = function() {

};
