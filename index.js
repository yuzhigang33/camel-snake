/*!
 * camel2snake: index.js
 * Authors  : 枫弦 <fengxian.yzg@alibaba-inc.com> (https://github.com/yuzhigang33)
 * Create   : 2016-01-13 16:06:29
 * CopyRight 2016 (c) Alibaba Group
 */
'use strict';
const camelcase = require('camelcase');
const decamelize = require('decamelize');

function camel2snake(obj) {
  if (typeof obj !== 'object') {
    return obj;
  }

  if (obj instanceof Array) {
    for (let i=0; i<obj.length; i++) {
      obj[i] = camel2snake(obj[i]);
    }
  }

  for (let key in obj) {
    let newKey = decamelize(key);
    let temp = obj[key];

    delete obj[key];
    obj[newKey] = temp;

    if (typeof obj[newKey] === 'object') {
      obj[newKey] = camel2snake(obj[newKey]);
    }
  }

  return obj;
}

function snake2camel(obj) {
  if (typeof obj !== 'object') {
    return obj;
  }

  if (obj instanceof Array) {
    for (let i=0; i<obj.length; i++) {
      obj[i] = snake2camel(obj[i]);
    }
  }

  for (let key in obj) {
    let newKey = camelcase(key);
    let temp = obj[key];

    delete obj[key];
    obj[newKey] = temp;

    if (typeof obj[newKey] === 'object') {
      obj[newKey] = snake2camel(obj[newKey]);
    }
  }

  return obj;
}

module.exports.camel2snake = camel2snake;
module.exports.snake2camel = snake2camel;
