const yo = require('yamlify-object');

const colors = require('./index');

const obj = {
  array: [
    2,
    'two',
    {
      emptyArray: [],
    },
  ],
  symbol: Symbol('HELL'),
  error: new Error('message'),
  date: new Date(0),
  object: {
    number: 200,
    bool: false,
    null: null,
    undefined: undefined,
    emptyObject: {},
  },
};


const pretty = yo(obj, {
  prefix: '',
  indent: '  ',
  colors,
});

console.log(pretty);
