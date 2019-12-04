const fs= require ('fs');

//const text= fs.readFileSync('./test.txt');
//console.log(text);

console.log('begin');

fs.readFile ('./test.txt', function(err, data){
    if(err) console.log (err);

    console.log (decodeURIComponent(data));
});

console.log('End');


