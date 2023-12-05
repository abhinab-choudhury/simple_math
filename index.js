const http = require('http');
const url = require('url');
const fs = require('fs');

function serverHandler(req, res) {

    const myUrl = url.parse(req.url, true); 
    console.log(myUrl.pathname);

    try {
        let a, b;
        if(myUrl.pathname !== '/favicon.ico') {
            if(Number(myUrl.query.num1) && Number(myUrl.query.num2)) {
                switch(myUrl.pathname) {
                    case '/add':
                        // multiplying to 1 automatically converts 
                        // the type to int/float
                        a = myUrl.query.num1 * 1; 
                        b = myUrl.query.num2 * 1;
                        res.end("... :) Hello From Simple Math API :) ..." + "\nNumber 1 : " + a + "\nNumber 2 : " + b + "\nSum : " + a + " + " + b  + " = " + (a + b)); 
                        break;
                    case '/sub':
                        a = myUrl.query.num1 * 1;
                        b = myUrl.query.num2 * 1;
                        res.end("... :) Hello From Simple Math API :) ..." + "\nNumber 1 : " + a + "\nNumber 2 : " + b + "\nSub : " + a + " - " + b + " = " + (a - b));
                        break;
                   case '/mul':
                        a = myUrl.query.num1 * 1;
                        b = myUrl.query.num2 * 1;
                        res.end("... :) Hello From Simple Math API :) ..." + "\nNumber 1 : " + a + "\nNumber 2 : " + b + "\nMul : " + a + " * " + b + " = " + (a * b));
                        break;
                    case '/div':
                        a = myUrl.query.num1 * 1;
                        b = myUrl.query.num2 * 1;
                       res.end("... :) Hello From Simple Math API :) ..." + "\nNumber 1 : " + a + "\nNumber 2 : " + b + "\nDiv: " + a + " / " + b + " = " + parseFloat(a / b));
                        break;
                    default:
                        res.end("404 Page Not Found");
                }
            } else {
                res.end("Only Number and Float values are allowed.");
            }
        }
    } catch(err) {
        console.log(err);
    }
}
const server = http.createServer((req, res) => serverHandler(req, res));

server.listen(8080, () => {
    console.log("Server Started!");
});
