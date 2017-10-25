function Thermostat() {
  this._defaultTemp = 20;
}
Thermostat.prototype.temperature = function() {
  return this._defaultTemp;
};
Thermostat.prototype.up = function(number) {
  this._defaultTemp += number;
};

Thermostat.prototype.down = function(number) {
  if (this._defaultTemp - number < 10) {
    throw new Error('min temp is 10 degrees');
  } else {
  this._defaultTemp -= number;
}
};
