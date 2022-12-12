import { useNavigate } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

export default function NewMeetupPage() {

  const navigate = useNavigate();


  function addMeetupHandler (meetupData){
  fetch(
    'https://react-meetups-faf3f-default-rtdb.firebaseio.com/meetups.json',
    {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    },
    )
    .then(()=>{
      navigate("/")
    });
  }


  return (
    <div>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={ addMeetupHandler}></NewMeetupForm>

    </div>
  )
}
