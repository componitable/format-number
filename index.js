module.exports = formatter;

function formatter(options) {
  options = options || {};
  options.negative = options.negative === 'R' ? 'R' : 'L';
  options.negativeOut = options.negativeOut === false ? false : true;
  options.prefix = options.prefix || '';
  options.suffix = options.suffix || '';
  options.separator = typeof options.separator === 'string' ? options.separator : ',';
  options.decimal = options.decimal || '.';
  
  function format(number, includeUnits, separate) {
    includeUnits = includeUnits === false ? false : true;
    separate = separate === false ? false : true;
    if (number || number === 0) {
      number = '' + number;//convert number to string if it isn't already
    } else {
      return '';
    }
    var output = [];
    var negative = number.charAt(0) === '-';
    number = number.replace(/^\-/g, '');

    if (!options.negativeOut && includeUnits) {
      output.push(options.prefix);
    }
    if (negative && options.negative === 'L') {
      output.push('-');
    }
    if (options.negativeOut && includeUnits) {
      output.push(options.prefix);
    }

    number = number.split(options.decimal);
    if (options.round != null) round(number, options.round);
    if (options.truncate != null) number[1] = truncate(number[1], options.truncate);
    if (options.padLeft) number[0] = padLeft(number[0], options.padLeft);
    if (options.padRight) number[1] = padRight(number[1], options.padRight);
    if (separate) number[0] = addSeparators(number[0], options.separator);
    output.push(number[0]);
    if (number[1]) {
      output.push(options.decimal);
      output.push(number[1]);
    }


    if (options.negativeOut && includeUnits) {
      output.push(options.suffix);
    }
    if (negative && options.negative === 'R') {
      output.push('-');
    }
    if (!options.negativeOut && includeUnits) {
      output.push(options.suffix);
    }

    return output.join('');
  }

  format.negative = options.negative;
  format.negativeOut = options.negativeOut;
  format.prefix = options.prefix;
  format.suffix = options.suffix;
  format.separate = options.separate;
  format.separator = options.separator;
  format.decimal = options.decimal;
  format.padLeft = options.padLeft;
  format.padRight = options.padRight;
  format.truncate = options.truncate;
  format.round = options.round;

  function unformat(number, allowedSeparators) {
    allowedSeparators = allowedSeparators || [];
    if (options.allowedSeparators) {
      options.allowedSeparators.forEach(function (s) { allowedSeparators.push (s); });
    }
    allowedSeparators.push(options.separator);
    number = number.replace(options.prefix, '');
    number = number.replace(options.suffix, '');
    var newNumber = number;
    do {
      number = newNumber;
      for (var i = 0; i < allowedSeparators.length; i++) {
        newNumber = newNumber.replace(allowedSeparators[i], '');
      }
    } while (newNumber != number);
    return number;
  }
  format.unformat = unformat;

  function validate(number, allowedSeparators) {
    number = unformat(number, allowedSeparators);
    number = number.split(options.decimal);
    if (number.length > 2) {
      return false;
    } else if (options.truncate != null && number[1] && number[1].length > options.truncate) {
      return false;
    }  else if (options.round != null && number[1] && number[1].length > options.round) {
      return false;
    } else {
      return /^-?\d+\.?\d*$/.test(number);
    }
  }
  return format;
}

//where x is already the integer part of the number
function addSeparators(x, separator) {
  x += '';
  if (!separator) return x;
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x)) {
    x = x.replace(rgx, '$1' + separator + '$2');
  }
  return x;
}

function padLeft(x, padding) {
  x = x + '';
  var buf = [];
  while (buf.length + x.length < padding) {
    buf.push('0');
  }
  return buf.join('') + x;
}
function padRight(x, padding) {
  if (x) {
    x += '';
  } else {
    x = '';
  }
  var buf = [];
  while (buf.length + x.length < padding) {
    buf.push('0');
  }
  return x + buf.join('');
}
function truncate(x, length) {
  if (x) {
    x += '';
  }
  if (x && x.length > length) {
    return x.substr(0, length);
  } else {
    return x;
  }
}

//where number is an array with 0th item as integer string and 1st item as decimal string (no negatives)
function round(number, places) {
  if (!number[1] || places < 0 || number[1].length <= places) {
    //already rounded
    return number
  }

  //truncate one dp
  var decim = number[1].slice(0,-1);
  //if last char was >= 5 we need to round up
  if (+(number[1].slice(-1)) >= 5) {
    decim = (+decim + 1) + ''
    if (decim.length >= number[1].length) {
      decim = decim.substring(1);   //ignore the 1 at the beginning which is the carry to the integer part
      number[0] = (+number[0]+1) + '' //add 1 to the integer part
    }
  }
  number[1] = decim;
  //now try again
  round(number, places);
}