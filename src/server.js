const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const uri = "mongodb+srv://amirf:iHKNqJPUDkKPYbl6@cluster0.dkvalzx.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(uri, { useNewUrlParser: true }, (err, client) => {
    if (err) return console.log(err)
    db = client.db('test') // database name
    app.listen(3000, () => {
        console.log('listening on 3000')
    })
})


app.get('/problems', (req, res) => {
    db.collection('problems').find().toArray((err, results) => {
        if (err) return console.log(err)
        res.send(results)
    })
})


app.post('/solution', (req, res) => {
    db.collection('problems').findOne({ problem_number: req.body.problem_number }, (err, result) => {
        if (err) return console.log(err)
        if (result.answer === req.body.answer) {
            // correct answer
            db.collection('solutions').save({
                problem_number: req.body.problem_number,
                user: req.body.user,
                time: new Date(),
                attempts: req.body.attempts
            }, (err, result) => {
                if (err) return console.log(err)
                res.send('Solution saved')
            })
        } else {
            // incorrect answer
            res.send('Incorrect answer')
        }
    })
})



app.get('/summary', (req, res) => {
    db.collection('solutions').aggregate([
        { $group: { _id: "$user", count: { $sum: 1 } } },
        { $sort: { count: -1 } }
    ]).toArray((err, results) => {
        if (err) return console.log(err)
        res.send(results)
    })
})

