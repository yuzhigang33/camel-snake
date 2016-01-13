/*!
 * camel2snake: test.js
 * Authors  : 枫弦 <fengxian.yzg@alibaba-inc.com> (https://github.com/yuzhigang33)
 * Create   : 2016-01-13 16:06:29
 * CopyRight 2016 (c) Alibaba Group
 */
const assert = require('assert');
const camel2snake = require('./');

var obj = {
  aBbCc: 1,
  aBbbbCc: [
    1,2,3
  ],
  aBbbbCcc: [
    {aBbbbCccDd: 1},
    {aBbbbCccDdd: 2}
  ]
}

var newObj = camel2snake(obj);
console.log(newObj);
assert.equal(newObj.a_bb_cc, 1)
assert.equal(newObj.a_bbbb_cc[0], 1)
assert.equal(newObj.a_bbbb_ccc[0].a_bbbb_ccc_dd, 1)
assert.equal(newObj.a_bbbb_ccc[1].a_bbbb_ccc_ddd, 2)
