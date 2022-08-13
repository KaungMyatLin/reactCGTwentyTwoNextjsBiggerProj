import MeetupDetail from '../../components/meetups/MeetupDetail'

const MeetupDetails = (props) => {
    return (
        <MeetupDetail image="https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg"
        title="A first meetup" address="Some address 5, 12345 Some City" description="This is a first meetup" />
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
    const meetupId = context.params.meetupId;
    console.log(meetupId);
    return {
        props: {
            meetupData: {
                image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
                id: meetupId,
                title: "A first meetup",
                address: "Some address 5, 12345 Some City",
                description: "This is a first meetup"
            }
        },
        revalidate: 1
        // revalidate: 3600, refetch every hour for static site generation by nextjs, 
        // this is called incremental static site generation.
    }
}

// you need getStaticPaths if you are using exactly both [dynamic page] and getStaticProps. 
// you don't need getStaticPaths if you are using neither getServerSideProps nor getStaticProps.
export async function getStaticPaths() {
    return {
        paths: [
            { params: {
                meetupId: "m1",
            }},
            { params: {
                meetupId: "m2",
            }},
        ],
        fallback: false
    }
}

export default MeetupDetails