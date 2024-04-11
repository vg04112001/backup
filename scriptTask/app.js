var fs = require('fs');
var path = require('path');

var searchRecursive = function(dir, pattern) {
  // This is where we store pattern matches of all files inside the directory
  var results = [];

  // Read contents of directory
  fs.readdirSync(dir).forEach(function (dirInner) {
    // console.log(dir)
    // Obtain absolute path
    dirInner = path.resolve(dir, dirInner);
    // console.log(dirInner)

    // Get stats to determine if path is a directory or a file
    var stat = fs.statSync(dirInner);
    // console.log(stat)

    // If path is a directory, scan it and combine results
    if (stat.isDirectory()) {
      results = results.concat(searchRecursive(dirInner, pattern));
    }

    // If path is a file and ends with pattern then push it onto results
    if (stat.isFile() && dirInner.endsWith(pattern)) {
      results.push(dirInner);
    }
  });

  return results;
};

var files = searchRecursive('./', '.html'); // replace dir and pattern
                                                // as you seem fit

console.log(files);
console.log(files.length);