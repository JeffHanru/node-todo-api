//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID }  = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err) {
        console.log('unable to connect to mongo db server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5adc883b37fd47c3b4c00f56')
    },{$set: {completed: true}
    },{returnOriginal: false}).then((result) => {
        console.log(result);
    })



    //db.close();
});
