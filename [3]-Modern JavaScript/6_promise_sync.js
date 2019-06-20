const https = require('https')

function fetch(url){
  return new Promise((resolve, reject)=>{

    https.get(url, (res) =>{
      let data = ''
      res.on('data', (rd) => data = data + rd)
      res.on('end', () => resolve(data))
      res.on('error', reject)
    })
  })
}

let url = 'https://github.com/Boitumelo45/JavaScript_Fundamentals/blob/master/%5B2%5D-Language_Features/1_constant.js'

fetch(url).then(data =>{
  console.log('Fetch: ' + data.length)
});

(async function read(){
  const data = await fetch(url)
  console.log('Async: ' + data.length);
})()
