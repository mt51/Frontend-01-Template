# NumbericLiterals

NumbericLiterals ::
    DecimalLiteral
    BinaryIntegerLiteral
    OctalIntegerLiteral
    HexIntegerLiteral
``` javascript
/(^(\.\d+|(0|[1-9]\d*)\.?\d*?)([eE][-\+]?\d+)?$)|(^0[bB][01]+$)|(^0[oO][0-7]+$)|(^0[xX][0-9a-fA-F]+$)/
```

DecimalLiteral ::
    DecimalIntegerLiteral . DecimalDigits ExponentPart
    .DecimalDigits ExponentPart
    DecimalIntegerLiteral ExponentPart
``` javascript
  /^(\.\d+|(0|[1-9]\d*)\.?\d*?)([eE][-\+]?\d+)?$/
```


DecimalIntegerLiteral ::
    0
    NonZeroDigit DecimalDigits
``` javascript
  /0|[1-9]\d*$/
```

DecimalDigits::
  DecimalDigit
  DecimalDigits DecimalDigit

  ``` javascript
  /^\d+$/
  ```

DecimalDigit:: one of
    0 1 2 3 4 5 6 7 8 9

``` javascript
/^\d$/
```

NonZeroDigit:: one of
    1 2 3 4 5 6 7 8 9
```javascript
/^[1-9]$/
```

ExponentPart::
  ExponentIndicator SignedInteger

```javascript
/^[eE][-\+]?\d*$/
```

ExponentPart::
    e E

```javascript
/^[eE]$/
```

SignedInteger::
    DecimalDigits
    + DecimalDigits
    - DecimalDigits
```javascript
/^[-\+]?\d+$/
```

BinaryIntegerLiteral ::
    0b BinaryDigits
    0B BinaryDigits
``` javascript
/^0[bB][01]+$/
```

BinaryDigits::
    BinaryDigit
    BinaryDigits BinaryDigit

``` javascript
/^[01]+$/
```

binaryDigit:: one of
    0 1
``` javascript
/^[01]$/
```


OctalIntegerLiteral::
    0o OctalDigits
    0O OctalDigits

``` javascript
/^0[oO][0-7]+$/
```

OctalDigits::
    OctalDigit
    OctalDigits OctalDigit
``` javascript
/^[0-7]+$/
```

OctalDigit:: one of
  0 1 2 3 4 5 6 7

``` javascript
/^[0-7]$/
```

HexIntegerLiteral ::
    0x HexDigits
    0X HexDigits
``` javascript
    /^0[xX][0-9a-fA-F]+$/
```

HexDigits::
  HexDigit
  HexDigits HexDigit

``` javascript
    /^[0-9a-fA-F]+$/
```

HexDigit:: one of
    0 1 2 3 4 5 6 7 8 9 a b c d e f A B C D E F
``` javascript
    /^[0-9a-fA-F]$/
```