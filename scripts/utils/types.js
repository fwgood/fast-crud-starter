const TEXT_TYPE_MAP = [
  'CHAR',
  'VARCHAR',
  'TINYTEXT',
  'TEXT',
  'MEDIUMTEXT',
  'LONGTEXT',
];
const NUMBER_TYPE_MAP = [
  'TINYINT',
  'SMALLINT',
  'MEDIUMINT',
  'INT',
  'INTEGER',
  'BIGINT',
  'FLOAT',
  'DOUBLE',
  'DECIMAL',
];
const DATE_TYPE_MAP = ['DATE', 'TIME', 'YEAR', 'DATETIME', 'TIMESTAMP'];
exports.castDBTypeToJsonType = function (originType) {
  const oType = originType.toUpperCase();
  const isText = TEXT_TYPE_MAP.find((item) => oType.includes(item));
  if (isText) {
    return 'text';
  }
  const isNumber = NUMBER_TYPE_MAP.find((item) => oType.includes(item));
  if (isNumber) {
    return 'number';
  }
  const isDate = DATE_TYPE_MAP.find((item) => oType.includes(item));
  if (isDate) {
    return 'date';
  }
};
