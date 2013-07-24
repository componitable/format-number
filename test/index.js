var expect = require('expect.js');
var formatFactory = require('..');

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
});

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
});

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
  describe('with includeUnits as false', function () {
    describe('512', function () {
      it('returns 512', function () {
        expect(format('512', false)).to.be('512');
      });
    });
    describe('-512', function () {
      it('returns -512', function () {
        expect(format('-512', false)).to.be('-512');
      });
    });
  });
  describe('`prefix.suffix`', function () {
    it('equals "£"', function () {
      expect(format.prefix).to.be('£');
    });
  });
});

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
  
  describe('with includeUnits as false', function () {
    describe('512', function () {
      it('returns 512', function () {
        expect(format('512', false)).to.be('512');
      });
    });
    describe('-512', function () {
      it('returns -512', function () {
        expect(format('-512', false)).to.be('-512');
      });
    });
  });
  describe('`format.suffix`', function () {
    it('equals " items"', function () {
      expect(format.suffix).to.be(' items');
    });
  });
});