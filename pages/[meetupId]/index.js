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

export default MeetupDetails