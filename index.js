const http = require('http');
const url = require('url');

function serverHandler(req, res) {
  const myUrl = url.parse(req.url, true);
  try {
    let a, b;
    if (myUrl.pathname !== '/favicon.ico') {
      switch (myUrl.pathname) {
        case '/':
          res.end("... :) Hello From Simple Math API :) ...");
          break;
        case '/add':
          // multiplying to 1 automatically converts 
          // the type to int/float
          a = myUrl.query.num1 * 1;
          b = myUrl.query.num2 * 1;
          if(a && b) {
            res.end("... :) Hello From Simple Math API :) ..." + "\nNumber 1 : " + a + "\nNumber 2 : " + b + "\nSum : " + a + " + " + b + " = " + (a + b));
          } else {
            res.end("Only int and Float Variables are allowed");
          }
          break;
        case '/sub':
          a = myUrl.query.num1 * 1;
          b = myUrl.query.num2 * 1;
          if(a && b) {
            res.end("... :) Hello From Simple Math API :) ..." + "\nNumber 1 : " + a + "\nNumber 2 : " + b + "\nSub : " + a + " - " + b + " = " + (a - b));
          } else {
            res.end("Only int and Float Variables are allowed");
          }
          break;
        case '/mul':
          a = myUrl.query.num1 * 1;
          b = myUrl.query.num2 * 1;
          if(a && b) {
            res.end("... :) Hello From Simple Math API :) ..." + "\nNumber 1 : " + a + "\nNumber 2 : " + b + "\nMul : " + a + " * " + b + " = " + (a * b));
          } else {
            res.end("Only int and Float Variables are allowed");
          }
          break;
        case '/div':
          a = myUrl.query.num1 * 1;
          b = myUrl.query.num2 * 1;
          if(a && b) {
            res.end("... :) Hello From Simple Math API :) ..." + "\nNumber 1 : " + a + "\nNumber 2 : " + b + "\nDiv: " + a + " / " + b + " = " + parseFloat(a / b));
          } else {
            res.end("Only int and Float Variables are allowed");
          }
          break;
        case '/mod':
          a = myUrl.query.num1 * 1;
          b = myUrl.query.num2 * 2;
          if(a && b) {
            res.end("... :) Hello From Simple Math API :) ..." + "\nNumber 1 : " + a + "\nNumber 2 : " + b + "\nDiv: " + a + " % " + b + " = " + parseFloat(a % b));
          } else {
            res.end("Only int and Float Variables are allowed");
          }
          break;
        default:
          res.end("404 Page Not Found");
      }
    }
  } catch (err) {
    console.log(err);
  }
}
const server = http.createServer((req, res) => serverHandler(req, res));

server.listen(8080, () => {
  console.log("Server Started!");
});
