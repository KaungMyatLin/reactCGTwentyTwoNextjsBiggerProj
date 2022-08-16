import MeetupDetail from '../../components/meetups/MeetupDetail'
import { MongoClient, objectId } from 'mongodb'
import Head from 'next/head'
import { Fragment } from 'react'

const MeetupDetails = (props) => {
    return (
        <Fragment>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta name="description" content={props.meetupData.description} />
            </Head>
            <MeetupDetail image={props.meetupData.image} title={props.meetupData.title} address={props.meetupData.address} 
            description={props.meetupData.description} />
        </Fragment>
        // by the time removing hardcoded
        // <MeetupDetail image="https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg"
        // title="A first meetup" address="Some address 5, 12345 Some City" description="This is a first meetup" />
        // <Fragment>
        //     <img src={props.image}
        //     alt={props.title} />
        //     <h1>{props.title}</h1>
        //     <address> {props.address} </address>
        //     <p>{props.description}</p>
        // </Fragment>
    )
}

// to run this code for during static generation, this code needs to be on "page" component and 
// export with "getStaticProps". async is allowed.
export async function getStaticProps(context) {
    const urlParamMeetupId = context.params.meetupId;
    const client = 
    await MongoClient.connect('mongodb+srv://anyadmin:tw22d56f@cluster0.l3tew0h.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const selectedMeetup = await meetupsCollection.findOne({_id: objectId(urlParamMeetupId)});
    client.close();
    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description,
            }
            // by the time removing hardcoded
            // meetupData: {
            //     image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
            //     id: meetupId,
            //     title: "A first meetup",
            //     address: "Some address 5, 12345 Some City",
            //     description: "This is a first meetup"
            // }
        },
        revalidate: 1
        // revalidate: 3600, refetch every hour for static site generation by nextjs, 
        // this is called incremental static site generation.
    }
}

// you need getStaticPaths if you are using exactly both [dynamic page] and getStaticProps. 
// you don't need getStaticPaths if you are using neither getServerSideProps nor getStaticProps.
export async function getStaticPaths() {
    const client = 
    await MongoClient.connect('mongodb+srv://anyadmin:tw22d56f@cluster0.l3tew0h.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const getallmeetups = await meetupsCollection.find({}, {_id: 1}).toArray();
    client.close();
    return {
        paths: getallmeetups.map( ameetup => ({
            params: {
                meetupId: ameetup._id.toString()
            }
        })),
        // by the time removing hardcoded
        // paths: [
        //     { params: {
        //         meetupId: "m1",
        //     }},
        //     { params: {
        //         meetupId: "m2",
        //     }},
        // ],
        fallback: false
    }
}

export default MeetupDetails