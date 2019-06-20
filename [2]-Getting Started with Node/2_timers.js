/*
  setTimeout()
*/

setTimeout(
  ()=>{
    console.log('4 second delayed message.');
  }, 4000
);

const fn = () => {
   console.log('Debugging')
}

setTimeout(fn, 4000)
