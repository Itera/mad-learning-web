var exec = require('child_process').exec;
var os = require('os');
var process = require('process');
var spawn = require("child_process").spawn;

function puts(error, stdout, stderr) { console.log(stdout) }

console.log('Generating env. Cwd: ' + process.cwd());

// Run command depending on the OS
if (os.type() === 'Linux') 
   exec("./scripts/generate-local-env.sh", puts); 
else if (os.type() === 'Darwin') 
   exec("./scripts/generate-local-env.sh", puts); 
else if (os.type() === 'Windows_NT') 
   spawn("powershell.exe",["./scripts/generate-local-env.ps1"]);
else
   throw new Error("Unsupported OS found: " + os.type());