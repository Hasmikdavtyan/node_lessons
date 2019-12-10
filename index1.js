
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