const t = setImmediate(
  ()=> console.log('Instantaneous logging'), 8000
) //ignores the time delay parsed

//clear timer
clearImmediate(t)
