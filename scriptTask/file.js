var fs = require('fs');

fs.writeFile('data.json', JSON.stringify({name: 'ABC'}), (err) => { 
  if (err) { 
    console.error(err); 
    return; 
  } 
  console.log('JSON file created successfully'); 
}); 