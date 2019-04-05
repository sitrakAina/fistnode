const express = require ('express')

const router = express.Router()
const fs   = require('fs');


router.get('/', function (req, res) {
res.send('hello world')
})

router.get('/list', function (req, res) {
     res.setHeader('Content-Type', 'text/plain');
     try{
          let read = fs.readFileSync('./note.json', 'utf8')
          let parserImage = JSON.parse(read)
          for (let i = 0; i < parserImage.length; i++) {

               router.get(parserImage[i].image, function (req, res) {
                    try {
                         var sary = '.' + parserImage[i].image
                         var liresary = fs.readFileSync(sary)
                         console.log(liresary)
                         res.write(liresary)
                         res.end()

                    } catch (e) {
                         console.log(e.stack);
                    }
               
               })
          }
          res.end(read)
     }catch(e){
          console.log(e.stack);
     }
     
})
router.get('/test', function (req, res) {
     let read = fs.readFileSync('./test.json', 'utf8')
      res.write(read)
      res.end()
 
})

module.exports = router;