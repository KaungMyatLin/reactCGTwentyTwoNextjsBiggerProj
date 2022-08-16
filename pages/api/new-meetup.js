import { MongoClient } from 'mongodb'
const handler = async (req,res) => {
    if (req.method === "POST") {
        const data = req.body;

        const {title, image, address, description } = data;
        const client = await MongoClient.connect('mongodb+srv://testadmin:tw22d56f@cluster0.l3tew0h.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        const resultOpr = await meetupsCollection.insertOne(data);
        console.log(resultOpr)

        res.status(201).json({message: 'meetup inserted'});
    }
    return (
        <div>new-meetup</div>
    )
}

export default handler