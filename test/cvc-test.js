var expect = chai.expect;
describe('CVC Validation', function() {
  describe('getCvcLengthByCardType', function() {
    var types = {
      'visa': 3,
      'mastercard': 3,
      'discover': 3,
      'amex': 3.5
    };

    Object.keys(types).forEach(function(type) {
      it('should detect cvc length of ' + type + ' as ' + types[type], function() {
        getCvcLengthByCardType(type).should.equal(types[type]);
      });
    });
  });

  describe('overLength', function() {
    var overlengthTest = {
      '123454': {length: 5, result: true},
      '23!': {length: 3, result: false},
      '@233': {length: 3, result: true}
    };

    Object.keys(overlengthTest).forEach(function(string) {
      it( "should return " + overlengthTest[string].result + " given " +string + ' and length ' + overlengthTest[string].length, function() {
        overLength(string, overlengthTest[string].length).should.equal(overlengthTest[string].result);
      });
    });
  });

  describe('underLength', function() {
    var underlengthTest = {
      '123454': {length: 5, result: false},
      '23': {length: 3, result: true},
      '@233': {length: 3, result: false}
    };

    Object.keys(underlengthTest).forEach(function(string) {
      it( "should return " + underlengthTest[string].result + " given string " +string + ' and length ' + underlengthTest[string].length, function() {
        underLength(string, underlengthTest[string].length).should.equal(underlengthTest[string].result);
      });
    });
  });

  describe('cvcShort', function() {
    var cvcUnderTest = {
      '12': {pan: 4916338506082832, card: "visa", result: true},
      '1223': {pan: 4916338506082832, card: "visa", result: false},
      '233': {pan: 5280934283171080, card: "mastercard", result: false},
      '23': {pan: 5280934283171080, card: "mastercard", result: true},
      '1233': {pan: 345936346788903, card: "amex", result: false},
      '123': {pan: 345936346788903, card: "amex", result: false},
      '133': {pan: 6011894492395579, card: "discover", result: false},
      '13': {pan: 6011894492395579, card: "discover", result: true}
    };

    Object.keys(cvcUnderTest).forEach(function(string) {
      it( "should return " + cvcUnderTest[string].result + " given " +string + ' with card ' + cvcUnderTest[string].card 
        + " (cvc should be length " + getCvcLengthByCardType( cvcUnderTest[string].card ) + ")", 
        function() {
          cvcShort(cvcUnderTest[string].pan, string).should.equal(cvcUnderTest[string].result);
        }
      );
    });
  });

  describe('cvcLong', function() {
    var cvcOverTest = {
      '1223': {pan: 4916338506082832, card: "visa", result: true},
      '122': {pan: 4916338506082832, card: "visa", result: false},
      '233': {pan: 5280934283171080, card: "mastercard", result: false},
      '2334': {pan: 5280934283171080, card: "mastercard", result: true},
      '1233': {pan: 345936346788903, card: "amex", result: false},
      '12356': {pan: 345936346788903, card: "amex", result: true},
      '133': {pan: 6011894492395579, card: "discover", result: false},
      '1365': {pan: 6011894492395579, card: "discover", result: true}
    };

    Object.keys(cvcOverTest).forEach(function(string) {
      it( "should return "+ cvcOverTest[string].result + " given " +string + ' with card ' + cvcOverTest[string].card 
        + " (cvc should be length " + getCvcLengthByCardType( cvcOverTest[string].card ) + ")", 
        function() {
          cvcLong(cvcOverTest[string].pan, string).should.equal(cvcOverTest[string].result);
        }
      );
    });
  });
});
