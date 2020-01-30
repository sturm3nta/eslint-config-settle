module.exports = {
  extends: ['./base'],
  env: { node: true },
  settings: { 'import/ignore': ['src/types/index.js'] },
  rules: {
    '-------- ↓↓↓ DISABLED ↓↓↓ -----------': '------------------------------',

    '-------- ↓↓↓ WARNING ↓↓↓ -----------': '------------------------------',

    '-------- ↓↓↓ ERROR ↓↓↓ -----------': '------------------------------'
  }
};
