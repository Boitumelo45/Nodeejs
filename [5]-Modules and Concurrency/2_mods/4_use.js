const temp = require('./4_template.js') //returns a function
console.log(temp); //[Function]
const template = temp('payment')
console.log(template);
/*
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>payment</title>
  </head>
  <body>
          <header>
                  <div class="head_">
                    <nav>
                          <ul>
                              <li>Home</li>
                              <li>About us</li>
                          </ul>

                    </nav>
                  </div>
          </header>

          <footer>
                  <p>CopyRight Reserved.</p>
          </footer>
  </body>
</html>
*/
