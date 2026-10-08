const xlsx = require('xlsx');
const path = require('path');

const workbook = xlsx.readFile(path.join(__dirname, 'WEBSITE PROPERTIES LIST FINAL.xlsx'));
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const data = xlsx.utils.sheet_to_json(sheet);

console.log(JSON.stringify(data, null, 2));
