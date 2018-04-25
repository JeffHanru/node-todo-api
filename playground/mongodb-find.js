//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID }  = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err) {
        console.log('unable to connect to mongo db server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find()
    //     .count().then((count) => {
    //     console.log(`Todos count:${count}`);
    //     //console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=>{
    //     console.log('unable to fetch todos', err);
    // })

    db.collection('Users').find({name: 'Hanru Xu'}).toArray().then((doc)=> {
        console.log(JSON.stringify(doc, undefined, 2))
    }, (err) => {
        console.log('FAIL')
    })

    //db.close();
});
