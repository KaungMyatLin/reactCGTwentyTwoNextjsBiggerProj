import NewMeetupForm from '../../components/meetups/NewMeetupForm'

const newMeetupPage = () => {
    async function addMeetupH (entMeetUpData) {
        const resp = await fetch('/api/new-meetup', {
            method: "POST",
            body: JSON.stringify(entMeetUpData),
            headers: {
                'content-type': 'application/json'
            }
        })

        const data = await resp.json();
        console.log(data)
    }
    return (
        <NewMeetupForm onAddMeetup={addMeetupH}/>
    )
}

export default newMeetupPage