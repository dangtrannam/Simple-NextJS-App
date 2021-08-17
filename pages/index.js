import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

function HomePage(props) {

  return <MeetupList meetups={props.meetups} />
}

//always run on the server
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

  
//   return {
//     props: {
//       meetups: DUMMY_MEETUP,
//     }
//   }
// }

//only run on the build process
export async function getStaticProps(){
  //fetch data from an API
  const client = await MongoClient.connect("mongodb+srv://nam:1qaz@cluster0.nwfyp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
  const db = client.db()
  const meetupsCollection = db.collection('meetups')
  const meetups = await meetupsCollection.find().toArray()
  client.close()
  return {
    props: {
      meetups: meetups.map(meetup =>({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1
  }
}
export default HomePage;
