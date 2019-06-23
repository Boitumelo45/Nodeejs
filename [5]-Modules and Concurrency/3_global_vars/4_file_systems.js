const path =  require('path')
const fs = require('fs')

const files = ['.bash_profile', '.npmrc']


  files.forEach((file)=>{
    try{
    const filePath = path.resolve(process.env.HOME, file)
    const data = fs.readFileSync(filePath, 'utf-8')
    console.log(data);
  }catch(e){
      console.log(e);
    }finally{
      console.log("Runs anyway");
    }
  })
