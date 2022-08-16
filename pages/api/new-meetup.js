import { MongoClient } from 'mongodb'
const handler = async (req,res) => {
    if (req.method === "POST") {
        const data = req.body;
        const client = 
        await MongoClient.connect('mongodb+srv://anyadmin:tw22d56f@cluster0.l3tew0h.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();
        const meetupsCollection = db.collection('meetups');
        const resultOpr = await meetupsCollection.insertOne(data);
        console.log(resultOpr)
        client.close();
        res.status(201).json({message: 'meetup inserted'});
    }
}

export default handler