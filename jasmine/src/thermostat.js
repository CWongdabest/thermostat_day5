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
  this._defaultTemp -= number;
};
