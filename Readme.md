[![Build Status](https://secure.travis-ci.org/componitable/format-number.png)](http://travis-ci.org/componitable/format-number)
# format-number

Highly configurable formatter that expects a valid number in 'computer' format and accepts the following as options for formatting

## Options

- `negativeType` string: 'right','left','brackets','none'; default = 'left' (note only used for setting of default symbols)
- `negativeLeftSymbol` string: default = '-' if `negativeType` is 'left', '(' if `negativeType` is 'brackets' and '' otherwise
- `negativeRightSymbol` string: default = '-' if `negativeType` is 'right', ')' if `negativeType` is 'brackets' and '' otherwise
- `negativeLeftOut` boolean: whether the left symbol should be outside, ie precede the prefix; default = true
- `negativeRightOut` boolean: whether the right symbol should be outside, ie follow the suffix; default = true
- `prefix` string: default = ''
- `suffix` string: default = ''
- `integerSeparator` string: to be used as the thousands separator; default = ','
- `decimalsSeparator` string: to be used as the thousanths separator; default = ''
- `decimal` string: char to be used as decimal point; default = '.'
- `padLeft` number: leading 0s will be added to left of number to make integer part this length; default = -1 /no padding
- `padRight` number: trailing 0s will be added; default = -1 /no padding
- `round` number: number of decimal places to round to (rounds to nearest integer, mid point rounds away from zero ie 3.55 ~ 3.6 to 1dp, -3.55 ~ -3.6 to 1dp; default = no rounding
- `truncate` number: number of decimal places to truncate (3.58 truncates to 3.5 for 1dp, 3 for 0dp); default =  no truncating

## Override Options

- `noUnits` boolean: if true will override and leave out prefix and suffix; default= false
- `noSeparator` - boolean: if true will override both integer and decimals separator and leave them out

## Usage

```
var format=require('format-number');
var formattedNumber = format({prefix: '£', suffix: '/item'})(68932, {noSeparator: true});
```

or

```
var format=require('format-number');
var myFormat = format({prefix: '£', suffix: '/item'});
var formattedNumber = myFormat(68932, {noSeparator: true});
```

will both set formattedNumber to '£68932/item'

The override options can be ommitted:

```
var format=require('format-number');
var formattedNumber = format({prefix: '£', suffix: '/item'})(68932);
```

returns '£68,932/item'
