/*
    process.env.LOGNAME
    process.env.SHELL
    process.env.HOME
    process.env.DISPLAY
    process.env.http_proxy
    process.exit()
*/
console.log("Current user: ", process.env.USER);
console.log("Proxy: ", process.env.http_proxy);
console.log("Logname: ", process.env.LOGNAME);
console.log("Display: ", process.env.DISPLAY);

/*
  process.argv

  $ n1=10, n2=20 node node_script.js
  console.log(process.env.n1, process.env.n2);
*/
process.stdout.write("Hello\n")
