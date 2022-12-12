import { useState, useEffect } from 'react';
import MeetupList from "../components/meetups/MeetupList"


export default function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(()=>{
    setIsLoading(true);
    fetch(
      'https://react-meetups-faf3f-default-rtdb.firebaseio.com/meetups.json'
      )
  .then(response=> {
  return response.json();
  })
    .then(data=> {
  const meetups = [];
  
  for(const key in data){
    const meetup = {
    id: key,
    ...data[key]
  };

  meetups.push(meetup)
}
  setIsLoading(false);
  setLoadedMeetups(meetups);
  
})
  }, []);



if (isLoading){
  return(
    <section>
      <p>Loading...</p>
    </section>
  )
}
  return (
    <section>
      <h1>Meet Ups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}
