let count = 1

let dots = ''
process.stdout.write(`Loading `)


const timerId = setInterval(
  () => {
    dots += '.'
    process.stdout.write(`\rLoading ${count++} ${dots}`)

    if(count == 6){
      clearInterval(timerId)
      console.log("Done");
    }
  }, 1000
)
