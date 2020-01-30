'use strict';

module.exports = {
  extends: ['./base.js'],
  env: { node: true },
  settings: { 'import/ignore': ['src/types/index.js'] },
  rules: {
    '-------- ↓↓↓ DISABLED ↓↓↓ -----------': '------------------------------',

    '-------- ↓↓↓ WARNING ↓↓↓ -----------': '------------------------------',

    '-------- ↓↓↓ ERROR ↓↓↓ -----------': '------------------------------'
  }
};
