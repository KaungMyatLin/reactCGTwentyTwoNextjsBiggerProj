import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import { useRouter } from 'next/router'
import Head from 'next/head'
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
        <Fragment>
            <Head>
                <title>Add a new meetup</title>
                <meta name="description" content="Add your own meetups and create amazing networking opportunities." />
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupH}/>
        </Fragment>
    )
}

export default newMeetupPage