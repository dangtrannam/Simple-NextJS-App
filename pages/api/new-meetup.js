import {MongoClient} from 'mongodb'
import { async } from 'regenerator-runtime';
//api/new-meetup

async function handler(req,res){
    if(req.method == "POST"){
        const data = req.body;

        const client = await MongoClient.connect("mongodb+srv://nam:1qaz@cluster0.nwfyp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", (err, db) => {})
        const db = client.db()
        const meetupsCollection = db.collection('meetups')

        const result = await meetupsCollection.insertOne(data)

        console.log(result)
        client.close()

        res.status(201).json({message: 'Meetup inserted!'})
    }
}

export default handler