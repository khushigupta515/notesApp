const Sequelize = require('../util/database');
const Notes = require('../models/notes');

exports.insertion =   async(req,res)=>{
   console.log(req.body);
    const note = await Notes.findOne({ where: { title: req.body.title } });
   if (note  === null) {
     Notes.create({title: req.body.title,description: req.body.description,tag:req.body.tags})
    } else return res.end('Duplicate entry,try updating');
    console.log("Inserted in database");
    res.end('Inserted into db successful');
}

exports.deletion = async(req,res)=>{
    console.log("Request for deletion recieved",req.query.id);
    const note = await Notes.findOne({ where: { id: req.query.id } });
    if (note  === null) {
        return res.end('Not found!');
        } else {note.destroy();}

    console.log("Deleted from database",note);
    res.end('Deleted from db successfully');
}

exports.updation = async(req,res)=>{
    const note = await Notes.findOne({ where: { title: 'Damon' } });
    if (note  === null) {
        return res.end('Not found!');
        } else {
        
        note.title="Damon is dead";
        note.save();
        console.log(note);
        
}

    console.log("Updated in database");
    res.end('Updated in db successfully');
}


exports.updatelikes = async(req,res)=>{
    const note = await Notes.findOne({ where: { id: '23ad31a1-e3a1-435a-bf88-534b2df796a4' } });
       note.likes+=1;
        note.save();
        console.log(note);
        
 console.log("Likes Updated in database");
    res.end('Likes Updated in db successfully');
}


exports.searchfortag = async(req,res)=>{

    console.log("search for tag",req.body.tags);
    const Fuse= require('fuse.js');
    
    let notes=(JSON.stringify(await Notes.findAll({}) ));
    notes=JSON.parse(notes)
    //console.log(notes);
    //console.log(JSON.stringify(notes));
    
    
     const options = {
        
        // Search in `author` and in `tags` array
        keys: ["tag"]
      }
      
      const fuse = new Fuse(notes, options);
      var result = fuse.search(req.body.tags);
   
      result=JSON.parse(JSON.stringify(result));
     var array=[]
     result.forEach(element => {
         array.push(element.item);
     });
     res.json(array);
}

exports.fetchdocuments = async(req,res)=>{

    
    let notes=(JSON.stringify(await Notes.findAll({}) ));
    notes=JSON.parse(notes);

    res.json(notes);
    res.end();
}