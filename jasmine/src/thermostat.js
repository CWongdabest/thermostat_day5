function Thermostat() {
  this._temperature = 20;
  this._maxTemp = 25;
  this._psmStatus = "on";
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
  this._psmStatus = "on";
};
Thermostat.prototype.powerSavingModeOff = function() {
  this._maxTemp = 32;
  this._psmStatus = "off";
};
Thermostat.prototype.isPowerSavingModeOn = function() {
  return this._psmStatus;
};
Thermostat.prototype.reset = function() {
  this._temperature = 20;
};


Thermostat.prototype.checkUsage = function() {
  if (this._temperature < 18) {
    return 'low-usage';
  } else if (this._temperature < 25) {
    return 'medium-usage';
  } else if (this._temperature >= 25) {
    return 'high-usage';
  }
};





// You can ask about the thermostat's current energy usage:
// < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.
