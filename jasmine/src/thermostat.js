function Thermostat() {
  this._defaultTemp = 20;
  this._maxTemp = 25;
}
Thermostat.prototype.temperature = function() {
  return this._defaultTemp;
};
Thermostat.prototype.up = function(number) {
  if (this._defaultTemp + number > this._maxTemp) {
    throw new Error('PSM On: max temp is 25 degrees');
  } else {
    this._defaultTemp += number;
  }
};
Thermostat.prototype.down = function(number) {
  if (this._defaultTemp - number < 10) {
    throw new Error('min temp is 10 degrees');
  } else {
    this._defaultTemp -= number;
  }
};
Thermostat.prototype.powerSavingModeOn = function() {

};
