const fs = require('fs');
const express = require('express')
const router = express.Router()

exports.getNote = (req, res) => {
    try{
        let read = fs.readFileSync('./model/note.json', 'utf8')
        let parserImage = JSON.parse(read)
         for (let i = 0; i < parserImage.length; i++) {
 
              router.get(function (req, res) {
                   try {
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
 };

exports.getTest = (req, res) => {
     try{
         let read = fs.readFileSync('./model/test.json', 'utf8')
         let parserImage = JSON.parse(read)
         for (let i = 0; i < parserImage.length; i++) {
 
              router.get(function (req, res) {
                   try {
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
 };

 exports.postList = (req, res) => {
     let nom = req.body.nom;
     let prenom = req.body.prenom;
         let entre = fs.readFileSync('./model/note.json', 'utf8');
         let com = JSON.parse(entre);
         if (com.length > 0) {
              var id = com[com.length - 1].id + 1;
         }else{
              id = 0;
         }
         com.push({id:id, nom:nom, prenom:prenom});

    fs.writeFileSync('./model/note.json', JSON.stringify(com));
    res.redirect('http://localhost:3000/list');
 };
 
 exports.putList = (req, res) => {
     let id = parseInt(req.body.id);
     let nom = req.body.nom;
     let prenom = req.body.prenom;
 
     let entre = fs.readFileSync('./model/note.json', 'utf-8')
      let com = JSON.parse(entre)
 
      for (let i = 0; i < com.length; i++) {
           if (id === i) {
                if (nom) {
                    com[i].nom = nom
                }
                if (prenom) {
                    com[i].prenom = prenom
                }
           }
 
      }
      
      fs.writeFileSync('./model/note.json', JSON.stringify(com));
      res.redirect('http://localhost:3000/list');
 }; 
 
 exports.deleteList = (req, res) => {
     let id = parseInt(req.body.id)
      let entre = fs.readFileSync('./model/note.json', 'utf-8')
      let com = JSON.parse(entre)
      for (let i = 0; i< com.length; i++){
           if(id == com[i].id){
               com.splice(i,1)
           } 
      }
      fs.writeFileSync('./model/note.json', JSON.stringify(com))
      res.redirect('http://localhost:3000/list');
 };

