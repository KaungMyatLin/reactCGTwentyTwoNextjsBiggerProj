import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import { useRouter } from 'next/router'
const newMeetupPage = () => {
    const router = useRouter();
    async function addMeetupH (entMeetUpData) {
        const resp = await fetch('/api/new-meetup', {
            method: "POST",
            body: JSON.stringify(entMeetUpData),
            headers: {
                'content-type': 'application/json'
            }
        })

        const data = await resp.json();
        router.push('/');
    }
    return (
        <NewMeetupForm onAddMeetup={addMeetupH}/>
    )
}

export default newMeetupPage