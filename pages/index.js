import MeetupList from '../components/meetups/MeetupList'
// import { useEffect } from 'react'
const DUMMY = [
    {
        id: 'm1',
        title: 'A first meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address 5, 12345 Some City',
        descritpion: 'This is a first meetup'
    },
    {
        id: 'm2',
        title: 'A second meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Museum_Barberini_%26_Alter_Markt_in_Potsdam_2.jpg',
        address: 'Some address 10, 12345 Some City',
        descritpion: 'This is a second meetup'
    },
]

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
        <MeetupList meetups={props.meetups} />
    )
}

// to run this code for during static generation, this code needs to be on "page" component and 
// export with "getStaticProps". async is allowed.
// this code advantage over below code server-side-rendering is SSG pages can be stored over cdn and also cached.
export async function getStaticProps() {
    return {
        props: {
            meetups: DUMMY
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