const ejs = require('ejs');
console.log(ejs.renderFile('./public/template/index.tsx.ejs', { user: 222 }));
