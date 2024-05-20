import parser from '../src/index.js';

test('test', () => {
  const answerForTest1 = [
    { key: 'follow', value: false, type: 'deleted' },
    { key: 'host', value: 'hexlet.io', type: 'unchanged' },
    { key: 'proxy', value: '123.234.53.22', type: 'deleted' },
    { key: 'timeout', value1: 50, value2: 20, type: 'changed' },
    { key: 'verbose', value: true, type: 'added' }
  ];

  expect(parser('./__fixtures__/file1.json', './__fixtures__/file2.json')).toStrictEqual(answerForTest1);
})


