import NewMeetupForm from '../../components/meetups/NewMeetupForm'

const newMeetupPage = () => {
    function addMeetupH (entMeetUpData) {
        console.log(entMeetUpData)
    }
    return (
        <NewMeetupForm onAddMeetup={addMeetupH}/>
    )
}

export default newMeetupPage