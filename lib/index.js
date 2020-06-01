'use strict';

const json2swagger = (key, value) => {
  switch (typeof value) {
    case 'undefined':
      // TODO
      return {
        type: 'undefined',
      };

    case 'string': {
      return {
        [key]: {
          type: 'string',
          example: value,
        },
      };
    }

    case 'number': {
      return {
        [key]: {
          type: 'number',
          example: value,
        },
      };
    }

    case 'boolean': {
      return {
        [key]: {
          type: 'boolean',
          example: value,
        },
      };
    }

    case 'object': {
      // null
      // TODO
      if (value === null) {
        return {
          type: 'null',
        };
      }

      // array
      if (Array.isArray(value)) {
        const item = json2swagger(key, value[0]);
        return {
          [key]: {
            type: 'array',
            items: item[Object.keys(item)[0]],
          },
        };
      }

      // json object
      return {
        [key]: {
          type: 'object',
          properties: Object.assign(
            {},
            ...Object.keys(value).map((each) => json2swagger(each, value[each]))
          ),
        },
      };
    }
  }
};

module.exports = json2swagger;
