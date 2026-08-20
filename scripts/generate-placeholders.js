const fs = require('fs');
const path = require('path');
const https = require('https');

const dir = path.join(__dirname, '..', 'public', 'images', 'construction');

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

console.log('Generating 120 placeholder images...');

// Function to download an image
const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .once('close', () => resolve(filepath));
      } else {
        res.resume();
        reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
      }
    }).on('error', reject);
  });
};

const generate = async () => {
  for (let i = 1; i <= 120; i++) {
    const filename = `${i}.webp`;
    const filepath = path.join(dir, filename);
    // Simple 1x1 transparent webp base64:
    const base64Data = "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==";
    fs.writeFileSync(filepath, Buffer.from(base64Data, 'base64'));
    if (i % 10 === 0) console.log(`Created ${i}/120 placeholders`);
  }
  console.log('Done! Please replace these files with your actual construction renders.');
};

generate();
