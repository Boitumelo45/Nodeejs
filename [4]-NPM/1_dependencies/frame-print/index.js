module.exports = function display (msg){
  let n = msg.length;

  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < n; i++) {
      process.stdout.write("*");
    }

    if (j == 1) {//do nothing
    } else {
      console.log("\n" + msg);
    }
  }

  console.log("");
};
