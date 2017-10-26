describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });
  it('starts at 20 degrees', function() {
    expect(thermostat.temperature()).toEqual(20);
  });
  it('can increase the temperature', function() {
    thermostat.up(1);
    expect(thermostat.temperature()).toEqual(21);
  });
  it('can decrease the temperature', function() {
    thermostat.down(1);
    expect(thermostat.temperature()).toEqual(19);
  });
  it('has a minimum temp of 10 degrees', function() {
    expect(function() {
      thermostat.down(11);
    }).toThrowError('min temp is 10 degrees');
  });
  it('powersaving mode when has max temp of 25 degrees', function() {
    thermostat.powerSavingModeOn();
    expect(function() {
      thermostat.up(16);
    }).toThrowError('Max temp is 25 degrees');
  });
  it('powersaving mode off has a max temp of 32 degrees', function() {
    thermostat.powerSavingModeOff();
    expect(function() {
      thermostat.up(22);
    }).toThrowError('Max temp is 32 degrees');
  });
  it('resets the temperature to 20 degrees', function() {
    thermostat.reset();
    expect(thermostat._temperature).toEqual(20);
  });


  describe('energy tests', function() {
    it('checks low-usage', function() {
      thermostat.down(5);
      expect(thermostat.checkUsage()).toEqual('low-usage');
    });
    it('checks medium-usage', function() {
      thermostat.powerSavingModeOn();
      thermostat.down(2);
      expect(thermostat.checkUsage()).toEqual('medium-usage');
    });
    it('checks high-usage', function() {
      thermostat.powerSavingModeOff();
      thermostat.up(6);
      expect(thermostat.checkUsage()).toEqual('high-usage');
    });
  });
});
