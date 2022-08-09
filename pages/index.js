import MeetupList from '../components/meetups/MeetupList'

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

const HomePage = () => {
    return (
        <MeetupList meetups={DUMMY} />
    )
}

export default HomePage