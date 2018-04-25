//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID }  = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err) {
        console.log('unable to connect to mongo db server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text:'sth to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo', err)
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    //
    // })

    // db.collection('Users').insertOne({
    //     _id: 123,
    //     name: 'Hanru Xu',
    //     age: '27',
    //     location: 'Australia'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Uable to insert user', err)
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })

    db.close();
});

