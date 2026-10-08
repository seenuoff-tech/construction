const xlsx = require('xlsx');
const path = require('path');
const fs = require('fs');

const workbook = xlsx.readFile(path.join(__dirname, 'WEBSITE PROPERTIES LIST FINAL.xlsx'));

const sheets = [
  { name: 'NEW LAUNCH  APARTMENT', category: 'new-launch', type: 'apartment' },
  { name: 'ON GOING APARTMENT', category: 'ongoing', type: 'apartment' },
  { name: 'NEWLY LAUNCHED VILLA', category: 'new-launch', type: 'villa' },
  { name: 'ONGOING VILLA', category: 'ongoing', type: 'villa' }
];

let apartments = [];
let villas = [];

sheets.forEach(s => {
  const sheet = workbook.Sheets[s.name];
  if (!sheet) return;
  const rows = xlsx.utils.sheet_to_json(sheet);
  
  rows.forEach(row => {
    // Extract fields
    const name = row['PROJECT NAME '] || row['PROJECT NAME'] || '';
    const location = row['LOCATION '] || row['LOCATION'] || 'Chennai';
    const typeStr = String(row['TYPE'] || '');
    const size = String(row['SIZE RANGE'] || '');
    const approvals = row['APPROVALS '] || row['APPROVALS'] || '';
    const launch = String(row['LAUNCH DATE '] || row['LAUNCH DATE'] || '');
    const handover = String(row['HAND OVER DATE '] || row['HAND OVER DATE'] || '');

    const obj = {
      name: name.trim(),
      location: location.trim(),
      type: typeStr.trim(),
      size: size.trim(),
      approvals: approvals.trim(),
      launch: launch.trim(),
      handover: handover.trim(),
      category: s.category
    };

    if (s.type === 'apartment') {
      apartments.push(obj);
    } else {
      villas.push(obj);
    }
  });
});

fs.writeFileSync('extracted_apts.json', JSON.stringify(apartments, null, 2));
fs.writeFileSync('extracted_villas.json', JSON.stringify(villas, null, 2));
console.log('Done!');
