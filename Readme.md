[![Build Status](https://secure.travis-ci.org/componitable/format-number.png)](http://travis-ci.org/componitable/format-number)
# format-number
 
<a name="defaults" />
## defaults
<a name="defaults-512" />
### 512
returns 512.

```js
expect(format('512')).to.be('512');
```

<a name="defaults-6300" />
### 6300
returns 6,300.

```js
expect(format('6300')).to.be('6,300');
```

<a name="defaults-76300" />
### 76300
returns 76,300.

```js
expect(format('76300')).to.be('76,300');
```

<a name="defaults-976300" />
### 976300
returns 976,300.

```js
expect(format('976300')).to.be('976,300');
```

<a name="defaults-1976300" />
### 1976300
returns 1,976,300.

```js
expect(format('1976300')).to.be('1,976,300');
```

<a name="defaults-5643" />
### 56.43
returns 56.43.

```js
expect(format('56.43')).to.be('56.43');
```

<a name="padright2" />
## padRight=2
<a name="padright2-512" />
### 512
returns 512.00.

```js
expect(format('512')).to.be('512.00');
```

<a name="padright2-5124" />
### 512.4
returns 512.40.

```js
expect(format('512.4')).to.be('512.40');
```

<a name="padright2-51243" />
### 512.43
returns 512.43.

```js
expect(format('512.43')).to.be('512.43');
```

<a name="padright2-512435" />
### 512.435
returns 512.435.

```js
expect(format('512.435')).to.be('512.435');
```

<a name="truncate2" />
## truncate=2
<a name="truncate2-512" />
### 512
returns 512.

```js
expect(format('512')).to.be('512');
```

<a name="truncate2-5124" />
### 512.4
returns 512.4.

```js
expect(format('512.4')).to.be('512.4');
```

<a name="truncate2-51243" />
### 512.43
returns 512.43.

```js
expect(format('512.43')).to.be('512.43');
```

<a name="truncate2-512435" />
### 512.435
returns 512.43.

```js
expect(format('512.435')).to.be('512.43');
```

<a name="prefix" />
## prefix=£
<a name="prefix-512" />
### 512
returns £512.

```js
expect(format('512')).to.be('£512');
```

<a name="prefix--512" />
### -512
returns -£512.

```js
expect(format('-512')).to.be('-£512');
```

<a name="prefix-with-includeunits-as-false" />
### with includeUnits as false
<a name="prefix-with-includeunits-as-false-512" />
#### 512
returns 512.

```js
expect(format('512', false)).to.be('512');
```

<a name="prefix-with-includeunits-as-false--512" />
#### -512
returns -512.

```js
expect(format('-512', false)).to.be('-512');
```

<a name="prefix-prefixsuffix" />
### `prefix.suffix`
equals "£".

```js
expect(format.prefix).to.be('£');
```

<a name="suffix-items" />
## suffix=" items"
<a name="suffix-items-512" />
### 512
returns 512 items.

```js
expect(format('512')).to.be('512 items');
```

<a name="suffix-items--512" />
### -512
returns -512 items.

```js
expect(format('-512')).to.be('-512 items');
```

<a name="suffix-items-with-includeunits-as-false" />
### with includeUnits as false
<a name="suffix-items-with-includeunits-as-false-512" />
#### 512
returns 512.

```js
expect(format('512', false)).to.be('512');
```

<a name="suffix-items-with-includeunits-as-false--512" />
#### -512
returns -512.

```js
expect(format('-512', false)).to.be('-512');
```

<a name="suffix-items-formatsuffix" />
### `format.suffix`
equals " items".

```js
expect(format.suffix).to.be(' items');
```

