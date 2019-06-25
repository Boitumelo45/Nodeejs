/*
  Bash/shell commands


*/

const { spawn } = require('child_process')

//print working directory
const pwd = spawn('pwd')
pwd.stdout.pipe(process.stdout)

//Read content of a file
const { HOME } = process.env;
const cat = spawn('cat', [`${HOME}/.bash_profile`])
cat.stdout.pipe(process.stdout)

//list files
const ls = spawn('ls', ['-l', '.'])
ls.stdout.pipe(process.stdout)

//Use shell syntax
const shell = spawn('ls -a; ~ | wc -l', {shell: true})
shell.stdout.pipe(process.stdout)
