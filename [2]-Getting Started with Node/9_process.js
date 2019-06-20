setTimeout(()=> process.exit(), 3000) //3 seconds

process.on('exit', ()=>{
  console.log('Bye.');
})

console.log('Hi!');

/*
    Hi!
    Bye.
*/
