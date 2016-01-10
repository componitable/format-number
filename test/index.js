var expect = require('expect.js');
var formatFactory = require('..');

//Defaults
describe('defaults', function () {
  var format = formatFactory();
  describe('512', function () {
    it('returns 512', function () {
      expect(format('512')).to.be('512');
    });
  });
  describe('6300', function () {
    it('returns 6,300', function () {
      expect(format('6300')).to.be('6,300');
    });
  });
  describe('76300', function () {
    it('returns 76,300', function () {
      expect(format('76300')).to.be('76,300');
    });
  });
  describe('976300', function () {
    it('returns 976,300', function () {
      expect(format('976300')).to.be('976,300');
    });
  });
  describe('1976300', function () {
    it('returns 1,976,300', function () {
      expect(format('1976300')).to.be('1,976,300');
    });
  });
  describe('56.43', function () {
    it('returns 56.43', function () {
      expect(format('56.43')).to.be('56.43');
    });
  });
});

//padRight=2
describe('padRight=2', function () {
  var format = formatFactory({padRight: 2});
  describe('512', function () {
    it('returns 512.00', function () {
      expect(format('512')).to.be('512.00');
    });
  });
  describe('512.4', function () {
    it('returns 512.40', function () {
      expect(format('512.4')).to.be('512.40');
    });
  });
  describe('512.43', function () {
    it('returns 512.43', function () {
      expect(format('512.43')).to.be('512.43');
    });
  });
  describe('512.435', function () {
    it('returns 512.435', function () {
      expect(format('512.435')).to.be('512.435');
    });
  });
});

//truncate=2
describe('truncate=2', function () {
  var format = formatFactory({truncate: 2});
  describe('512', function () {
    it('returns 512', function () {
      expect(format('512')).to.be('512');
    });
  });
  describe('512.4', function () {
    it('returns 512.4', function () {
      expect(format('512.4')).to.be('512.4');
    });
  });
  describe('512.43', function () {
    it('returns 512.43', function () {
      expect(format('512.43')).to.be('512.43');
    });
  });
  describe('512.435', function () {
    it('returns 512.43', function () {
      expect(format('512.435')).to.be('512.43');
    });
  });
});

//round=2
describe('round=2', function () {
  var format = formatFactory({round: 2});
  describe('512', function () {
    it('returns 512', function () {
      expect(format('512')).to.be('512');
    });
  });
  describe('512.4', function () {
    it('returns 512.4', function () {
      expect(format('512.4')).to.be('512.4');
    });
  });
  describe('512.43', function () {
    it('returns 512.43', function () {
      expect(format('512.43')).to.be('512.43');
    });
  });
  describe('512.435', function () {
    it('returns 512.44', function () {
      expect(format('512.435')).to.be('512.44');
    });
  });
  describe('512.434', function () {
    it('returns 512.43', function () {
      expect(format('512.434')).to.be('512.43');
    });
  });
  describe('512.996', function () {
    it('returns 513.00', function () {
      expect(format('512.996')).to.be('513.00');
    });
  });
  describe('512.9947', function () {
    it('returns 513.00', function () {
      expect(format('512.9947')).to.be('512.99');
    });
  });
  describe('0.046', function () {
    it('returns 0.05', function () {
      expect(format('0.046')).to.be('0.05');
    });
  });
  describe('0.096', function () {
    it('returns 0.10', function () {
      expect(format('0.096')).to.be('0.10');
    });
  });
});

describe('round=1', function () {
  var format = formatFactory({round: 1});
  describe('0.249', function () {
    it('returns 0.2', function () {
      expect(format('0.249')).to.be('0.2');
    });
  });
});

//round=0
describe('round=0', function () {
  var format = formatFactory({round: 0});
  describe('512', function () {
    it('returns 512', function () {
      expect(format('512')).to.be('512');
    });
  });
  describe('512.4', function () {
    it('returns 512', function () {
      expect(format('512.4')).to.be('512');
    });
  });
  describe('512.43', function () {
    it('returns 512', function () {
      expect(format('512')).to.be('512');
    });
  });
  describe('512.50', function () {
    it('returns 513', function () {
      expect(format('512.50')).to.be('513');
    });
  });
  describe('519.6', function () {
    it('returns 520', function () {
      expect(format('519.6')).to.be('520');
    });
  });
});

//prefix
describe('prefix=£', function () {
  var format = formatFactory({prefix: '£'});
  describe('512', function () {
    it('returns £512', function () {
      expect(format('512')).to.be('£512');
    });
  });
  describe('-512', function () {
    it('returns -£512', function () {
      expect(format('-512')).to.be('-£512');
    });
  });
  describe('with noUnits override', function () {
    describe('512', function () {
      it('returns 512', function () {
        expect(format('512', {noUnits: true})).to.be('512');
      });
    });
    describe('-512', function () {
      it('returns -512', function () {
        expect(format('-512', {noUnits: true})).to.be('-512');
      });
    });
  });
  describe('`prefix.suffix`', function () {
    it('equals "£"', function () {
      expect(format.prefix).to.be('£');
    });
  });
});

//suffix
describe('suffix=" items"', function () {
  var format = formatFactory({suffix: ' items'});
  describe('512', function () {
    it('returns 512 items', function () {
      expect(format('512')).to.be('512 items');
    });
  });
  describe('-512', function () {
    it('returns -512 items', function () {
      expect(format('-512')).to.be('-512 items');
    });
  });
  describe('""', function () {
    it('returns ""', function () {
      expect(format('')).to.be('');
    });
  });

  describe('with noUnits override', function () {
    describe('512', function () {
      it('returns 512', function () {
        expect(format('512', {noUnits: true})).to.be('512');
      });
    });
    describe('-512', function () {
      it('returns -512', function () {
        expect(format('-512', {noUnits: true})).to.be('-512');
      });
    });
  });
  describe('`format.suffix`', function () {
    it('equals " items"', function () {
      expect(format.suffix).to.be(' items');
    });
  });
});

describe('decimal=, separator=.', function() {
  var format = formatFactory({decimal: ',', separator: '.'});
  describe('512', function() {
    it('returns 512', function() {
      expect(format('512')).to.be('512')
    })
  })
  describe('1024', function() {
    it('returns 1.024', function() {
      expect(format('1024')).to.be('1.024')
    })
  })
  describe('512.4', function() {
    it('returns 512,4', function() {
      expect(format('512.4')).to.be('512,4')
    })
  })
})

//negativeType
describe('negativeType="brackets"', function () {
  var format = formatFactory({negativeType: 'brackets'});
  describe('512', function () {
    it('returns 512', function () {
      expect(format('512')).to.be('512');
    });
  });
  describe('-512', function () {
    it('returns (512)', function () {
      expect(format('-512')).to.be('(512)');
    });
  });
});
describe('negativeType="right"', function () {
  var format = formatFactory({negativeType: 'right'});
  describe('512', function () {
    it('returns 512', function () {
      expect(format('512')).to.be('512');
    });
  });
  describe('-512', function () {
    it('returns 512-', function () {
      expect(format('-512')).to.be('512-');
    });
  });
});
describe('negativeType="left"', function () {
  var format = formatFactory({negativeType: 'left'});
  describe('512', function () {
    it('returns 512', function () {
      expect(format('512')).to.be('512');
    });
  });
  describe('-512', function () {
    it('returns -512', function () {
      expect(format('-512')).to.be('-512');
    });
  });
});
//negative for backward compatibility
describe('negative="R"', function () {
  var format = formatFactory({negative: 'R'});
  describe('512', function () {
    it('returns 512', function () {
      expect(format('512')).to.be('512');
    });
  });
  describe('-512', function () {
    it('returns 512-', function () {
      expect(format('-512')).to.be('512-');
    });
  });
});
describe('negative="L"', function () {
  var format = formatFactory({negative: 'L'});
  describe('512', function () {
    it('returns 512', function () {
      expect(format('512')).to.be('512');
    });
  });
  describe('-512', function () {
    it('returns -512', function () {
      expect(format('-512')).to.be('-512');
    });
  });
});


//negative....Out
describe('negativeLeftOut"', function () {
  var format = formatFactory({negativeType: 'brackets', prefix: '£', suffix: '/item',
                              negativeLeftOut: true, negativeRightOut: false});
  describe('512', function () {
    it('returns £512/item', function () {
      expect(format('512')).to.be('£512/item');
    });
  });
  describe('512', function () {
    it('returns (£512)/item', function () {
      expect(format('-512')).to.be('(£512)/item');
    });
  });
});
describe('negativeRightOut"', function () {
  var format = formatFactory({negativeType: 'brackets', prefix: '£', suffix: '/item',
                              negativeLeftOut: false, negativeRightOut: true});
  describe('512', function () {
    it('returns £512/item', function () {
      expect(format('512')).to.be('£512/item');
    });
  });
  describe('512', function () {
    it('returns £(512/item)', function () {
      expect(format('-512')).to.be('£(512/item)');
    });
  });
});
describe('negativeLeftOut and negativeRightOut both true"', function () {
  var format = formatFactory({negativeType: 'brackets', prefix: '£', suffix: '/item',
                              negativeLeftOut: true, negativeRightOut: true});
  describe('512', function () {
    it('returns £512/item', function () {
      expect(format('512')).to.be('£512/item');
    });
  });
  describe('512', function () {
    it('returns (£512/item)', function () {
      expect(format('-512')).to.be('(£512/item)');
    });
  });
});
describe('negativeLeftOut and negativeRightOut both false"', function () {
  var format = formatFactory({negativeType: 'brackets', prefix: '£', suffix: '/item',
                              negativeLeftOut: false, negativeRightOut: false});
  describe('512', function () {
    it('returns £512/item', function () {
      expect(format('512')).to.be('£512/item');
    });
  });
  describe('512', function () {
    it('returns £(512)/item', function () {
      expect(format('-512')).to.be('£(512)/item');
    });
  });
});
//backward compatibility with negativeOut
describe('backward compatibility with negativeOut true"', function () {
  var format = formatFactory({negativeType: 'brackets', prefix: '£', suffix: '/item',
                              negativeOut: true});
  describe('512', function () {
    it('returns £512/item', function () {
      expect(format('512')).to.be('£512/item');
    });
  });
  describe('512', function () {
    it('returns (£512/item)', function () {
      expect(format('-512')).to.be('(£512/item)');
    });
  });
});
describe('backward compatibility with negativeOut false"', function () {
  var format = formatFactory({negativeType: 'brackets', prefix: '£', suffix: '/item',
                              negativeOut: false});
  describe('512', function () {
    it('returns £512/item', function () {
      expect(format('512')).to.be('£512/item');
    });
  });
  describe('512', function () {
    it('returns £(512)/item', function () {
      expect(format('-512')).to.be('£(512)/item');
    });
  });
});

//separators
describe('integerSeparator = " "', function () {
  var format = formatFactory({integerSeparator: " "});
  describe('5123423.1234567', function () {
    it('returns 5 123 423.1234567', function () {
      expect(format('5123423.1234567')).to.be('5 123 423.1234567');
    });
  });
  describe('with noSeparatorOverride', function () {
    describe('5123423.1234567', function () {
      it('returns 5123423.1234567', function () {
        expect(format('5123423.1234567', {noSeparator: true})).to.be('5123423.1234567');
      });
    });
  });
});
describe('decimalsSeparator = " "', function () {
  var format = formatFactory({integerSeparator: "", decimalsSeparator: " "});
  describe('5123423.1234567', function () {
    it('returns 5123423.123 456 7', function () {
      expect(format('5123423.1234567')).to.be('5123423.123 456 7');
    });
  });
  describe('with noSeparator override', function () {
    describe('5123423.1234567', function () {
      it('returns 5123423.1234567', function () {
        expect(format('5123423.1234567', {noSeparator: true})).to.be('5123423.1234567');
      });
    });
  });
});
//for backwards compatibility
describe('separator = " "', function () {
  var format = formatFactory({separator: " "});
  describe('5123423.1234567', function () {
    it('returns 5 123 423.1234567', function () {
      expect(format('5123423.1234567')).to.be('5 123 423.1234567');
    });
  });
  describe('with noSeparator override', function () {
    describe('5123423.1234567', function () {
      it('returns 5123423.1234567', function () {
        expect(format('5123423.1234567', {noSeparator: true})).to.be('5123423.1234567');
      });
    });
  });
});

//decimal
describe('decimal = "."', function () {
  var format = formatFactory({integerSeparator: " ", decimal:"."});
  describe('5123423.1234567', function () {
    it('returns 5 123 423.1234567', function () {
      expect(format('5123423.1234567')).to.be('5 123 423.1234567');
    });
  });
});
describe('decimal = ","', function () {
  var format = formatFactory({integerSeparator: " ", decimal:","});
  describe('5123423.1234567', function () {
    it('returns 5 123 423,1234567', function () {
      expect(format('5123423.1234567')).to.be('5 123 423,1234567');
    });
  });
});

//miscellaneous
describe('£68,932/item', function () {
  it('£68,932/item', function () {
    expect(formatFactory({prefix: '£', suffix: '/item'})(68932)).to.be('£68,932/item');
  });
});
describe('£68,932/items with no units', function () {
  it('68,932', function () {
    expect(formatFactory({prefix: '£', suffix: '/item'})(68932, {noUnits: true})).to.be('68,932');
  });
});
describe('£68,932/items with no separators', function () {
  it('£68932/item', function () {
    expect(formatFactory({prefix: '£', suffix: '/item'})(68932, {noSeparator: true})).to.be('£68932/item');
  });
});
