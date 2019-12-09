/*const http = require ('http');

const fs = require ('fs');


http.createServer( (req, res) => {
    
    res.writeHead(200, {'Content_Type':'text/html'
});

if (req.url === '/' ) {
    fs.readFile ('index.html', 'utf-8', (err,data)=> {
        res.write(data);
        res.end();
     })
    }
    
      else   if (req.url ==='/contact'){
        fs.readFile ('contact.html', 'utf-8', (err,data)=> {
            res.write(data);
             res.end();
          
         });

    } else if (req.url === '/news'){
        fs.readFile ('news.html', 'utf-8', (err,data)=> {
            res.write(data);
             res.end();
            
    })
}



 else  {
     res.writeHead(404, {'Content-Type': 'text/html'});
      res.end("404 Not Found");
 }


//res.write(' <h1> hello </h1>');
    //res.end();
}).listen(4545);*/


/*
const http = require ('http');

const fs = require ('fs');


http.createServer( (req, res) => {
    
    

switch (req.url) {
     case '/':
     res.writeHead(200, {'Content_Type':'text/html'
        });
     fs.readFile ('index.html', 'utf-8', (err,data)=> {
        res.write(data);
        res.end();
     })
     break;

     case '/news':
    res.writeHead(200, {'Content_Type':'text/html'
        });
     fs.readFile ('news.html', 'utf-8', (err,data)=> {
        res.write(data);
        res.end();
     })

     break;
     case '/contack':
    res.writeHead(200, {'Content_Type':'text/html'
        });
     fs.readFile ('contact.html', 'utf-8', (err,data)=> {
        res.write(data);
        res.end();
     })
     break;

     default: 
     res.writeHead(404, {'Content_Type':'text/html'
    });
     //fs.readFile ('contact.html', 'utf-8', (err,data)=> {
        res.write("404, error");
        res.end();
}




}).listen(4545); */


/*const http = require ('http');

const fs = require ('fs');


http.createServer( (req, res) => {
    
function sendData (res, fileName, statusCode) {
res.writeHead(statusCode, {'Content_Type':'text/html'
});
fs.readFile (fileName, 'utf-8', (err,data)=> {
res.write(data);
res.end();
})

}

switch (req.url) {
     case '/':
            sendData (res, 'index.html', 200)
     break;

     case '/news':
             sendData (res, 'news.html', 200)

     break;
     case '/contack':
             sendData (res, 'contact.html', 200)
     break;

     default: 
      sendData (res, '404.html', 404)
}*/


/*const http = require ('http');

const fs = require ('fs');


http.createServer( (req, res) => {
    
function sendData (res, fileName = 'index.html', statusCode = 200) {
res.writeHead(statusCode, {'Content_Type':'text/html'
});
fs.readFile (fileName, 'utf-8', (err,data)=> {
res.write(data);
res.end();
})

}

switch (req.url) {
     case '/':
            sendData (res)
     break;

     case '/news':
             sendData (res, 'news.html')

     break;
     case '/contack':
             sendData (res, 'contact.html')
     break;

     default: 
      sendData (res, '404.html', 404)

}

}).listen(4545); */


/*const http = require ('http');

const fs = require ('fs');

/**
 *  function sendDataother 
 * send html data to clinet
 * 
 * @param {object} res - response object
 * @param {String} data - html content
 * @param {Number} statusCode - http status code 
 */
/*function sendDataother (res, data, statusCode = 500) {
    res.writeHead( statusCode, {'Content_Type':'text/html' }) 
    res.write(data);
    res.end();
    

}

http.createServer( (req, res) => {
    
function sendData (res, fileName = 'index.html', statusCode = 200) {
   
fs.readFile (fileName , 'utf-8', (err,data)=> {

if (err) {
    return sendDataother (res, '<h1>  500 server error</h1>')

} 
sendDataother (res, data, statusCode)


})


}

switch (req.url) {
     case '/':
            sendData (res)
     break;

     case '/news':
             sendData (res, 'news.html')

     break;
     case '/contact':
             sendData (res, 'contact.html')
     break;
     default: 
      sendData (res, '404.html', 404)

}

}).listen(4545); */

const http = require('http');
const fs = require('fs');
const url = require('url');



const sendData = (fileName, res, err) => {

   
     fs.readFile(`${fileName}.html`, 'utf-8', (err, data) => {
      if (err) {
      
         if (err.code === 'ENOENT'){
        
            throw  err;
            
        }
        if (err.code === 'EEXIST'){
            throw err;
        }

        if (err.code === 'EISDIR'){
            throw err;
        }
        if (err.code === 'ENOTDIR'){
            throw err;
        }
        if (err.code === 'EMFILE'){
            throw err;
        }

    }
        
     else{  res.write(data);
        res.end();
     }
   
})
}

http.createServer((req, res) => {
    res.writeHead(200);

    const { query: { page } } = url.parse(req.url, true);
    
    switch(page) {
        case 'home':
            sendData('index', res);
        break;
        case 'contact':
             sendData('contact', res);
        break;
        case 'news':
             sendData('new', res);
         break;
        default: sendData('404', res);
         break;
    }
    
}).listen(4546);


// git config --global user.name "name"
// git config --global user.email "email"







// http://localhost:8080/?page=home - home page
// http://localhost:8080/?page=contact - contact page
// http://localhost:8080/?page=news - news page
// http://localhost:8080/?page=dfgsrdtgs - 404 page