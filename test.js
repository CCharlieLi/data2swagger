'use strict';

const assert = require('assert').strict;
const json2swagger = require('./lib');

describe('json2swagger', () => {
  it('Convert string', () => {
    const result = json2swagger('data', 'charlie');
    assert(result.data.type === 'string');
    assert(result.data.example === 'charlie');
  });

  it('Convert number', () => {
    const result = json2swagger('data1', 123);
    assert(result.data1.type === 'number');
    assert(result.data1.example === 123);
  });

  it('Convert boolean', () => {
    const result = json2swagger('data2', true);
    assert(result.data2.type === 'boolean');
    assert(result.data2.example === true);
  });

  it('Convert object', () => {
    const result = json2swagger('data2', {
      charlie: {
        test1: 'yes',
        test2: 123,
        test3: true,
      },
    });
    assert.deepEqual(result, {
      data2: {
        type: 'object',
        properties: {
          charlie: {
            type: 'object',
            properties: {
              test1: { type: 'string', example: 'yes' },
              test2: { type: 'number', example: 123 },
              test3: { type: 'boolean', example: true },
            },
          },
        },
      },
    });
  });

  it('Convert array', () => {
    const result = json2swagger('data2', [
      {
        charlie: {
          test1: 'yes',
          test2: 123,
          test3: true,
        },
      },
    ]);
    assert.deepEqual(result, {
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
                test3: { type: 'boolean', example: true },
              },
            },
          },
        },
      },
    });
  });
});
