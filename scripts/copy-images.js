const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'ezgif-1b64c96f82030696-jpg');
const destDir = path.join(__dirname, '..', 'public', 'images', 'construction');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

fs.readdir(srcDir, (err, files) => {
  if (err) throw err;
  
  const jpgFiles = files.filter(f => f.endsWith('.jpg')).sort();
  
  jpgFiles.forEach((file, index) => {
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(destDir, `${index + 1}.jpg`);
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${file} to ${index + 1}.jpg`);
  });
});
