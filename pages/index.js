import MeetupList from '../components/meetups/MeetupList'
import { MongoClient } from 'mongodb'
import Head from 'next/head'
// import { useEffect } from 'react'
const HomePage = (props) => {
    // below code no longer needed if we switch to 
    // data-fetching for static site generation.
    // const [loadedMeetups, setLoadedMeetups] = setState([]);
    // useEffect(() => {
    //     // send a http request and fetch data
    //     setLoadedMeetups(DUMMY)
    // }, [])
    // reminder useEffect loads after component done loading.
    return (
        <Fragment>
            <Head>
                <title>React Meetups</title>
                <meta name="description" content="Browse a huge list of highly active React meetups!" />
            </Head>
            <MeetupList meetups={props.meetups} />
        </Fragment>
    )
}

// to run this code for during static generation, this code needs to be on "page" component and 
// export with "getStaticProps". async is allowed.
// this code advantage over below code server-side-rendering is SSG pages can be stored over cdn and also cached.
export async function getStaticProps() {
    const client = 
    await MongoClient.connect('mongodb+srv://anyadmin:tw22d56f@cluster0.l3tew0h.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const getallmeetups = await meetupsCollection.find().toArray();
    client.close();
    return {
        props: {
            meetups: getallmeetups.map( ameetup => ({
                title: ameetup.title,
                address: ameetup.address,
                image: ameetup.image,
                id: ameetup._id.toString()
            }))
        },
        revalidate: 1
        // revalidate: 3600, refetch every hour for static site generation by nextjs, 
        // this is called incremental static site generation.
    }
}

// data-fetching for server-side-rendering for every incoming request.
// export async function getServerSideProps(context) {
//     const req = context.req
//     const res = context.res
//     return {
//         props: {
//             meetups: DUMMY
//         },
//     }
// }

export default HomePage