# data2swagger

[![Build Status](https://travis-ci.com/CCharlieLi/data2swagger.svg?branch=master)](https://travis-ci.com/CCharlieLi/data2swagger)
[![Coverage Status](https://coveralls.io/repos/github/CCharlieLi/data2swagger/badge.svg?branch=master)](https://coveralls.io/github/CCharlieLi/data2swagger?branch=master)

Convert data(string, number, array, json) into swagger schema format with 0 dependencies.

### Install
```
yarn add data2swagger
```

### How to use
```
const json2swagger = require('data2swagger');

json2swagger(key, value)
```

### Examples
```
// string
const result = json2swagger('data', 'charlie');
// { data: { type: 'string', example: 'charlie' } }

// number
const result = json2swagger('data1', 123);
// { data1: { type: 'number', example: 123 } }

// boolean
const result = json2swagger('data2', true);
// { data2: { type: 'boolean', example: true } }

// object
const result = json2swagger('data2', {
  charlie: {
    test1: 'yes',
    test2: 123,
    test3: true
  }
});
/** {
  data2: {
    type: 'object',
    properties: {
      charlie: {
        type: 'object',
        properties: {
          test1: { type: 'string', example: 'yes' },
          test2: { type: 'number', example: 123 },
          test3: { type: 'boolean', example: true }
        }
      }
    }
  }
} **/

// array
const result = json2swagger('data2', [
  {
    charlie: {
      test1: 'yes',
      test2: 123,
      test3: true
    }
  }
]);
/** {
  data2: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        charlie: {
          type: 'object',
          properties: {
            test1: { type: 'string', example: 'yes' },
            test2: { type: 'number', example: 123 },
            test3: { type: 'boolean', example: true }
          }
        }
      }
    }
  }
} **/
```
