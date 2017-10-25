function Thermostat() {
  this._temperature = 20;
  this._maxTemp = 25;
}
Thermostat.prototype.temperature = function() {
  return this._temperature;
};
Thermostat.prototype.up = function(number) {
  if (this._temperature + number > this._maxTemp) {
    throw new Error('Max temp is ' + this._maxTemp + ' degrees');
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
  this._maxTemp = 25;
};
Thermostat.prototype.powerSavingModeOff = function() {
  this._maxTemp = 32;
};
Thermostat.prototype.reset = function() {
  this._temperature = 20;
};
