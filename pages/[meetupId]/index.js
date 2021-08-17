import { Fragment } from "react";
import Head from "next/head";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";

function MeetupDetails(props) {

  return <Fragment>
    <Head>
      <title>{props.meetupData.title}</title>
      <meta name="description" content={props.meetupData.description}></meta>
    </Head>
    <MeetupDetail  meetup = {props.meetupData}/>
  </Fragment>
}

export async function getStaticPaths() {
  const client = await MongoClient.connect("mongodb+srv://nam:1qaz@cluster0.nwfyp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
  const db = client.db()
  const meetupsCollection = db.collection('meetups')
  const meetups = await meetupsCollection.find({}, {_id:1}).toArray()
  client.close()
  return {
    fallback: false,
    paths: meetups.map(meetup => ({
      params: {
        meetupId: meetup._id.toString()
      }
    }))
  };
}

export async function getStaticProps(context) {
  //fetch data for a single meetup
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect("mongodb+srv://nam:1qaz@cluster0.nwfyp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
  const db = client.db()
  const meetupsCollection = db.collection('meetups')
  const selectedMeetup = await meetupsCollection.findOne({_id: ObjectId(meetupId)})
  client.close()
  const { image, title, address, description} = selectedMeetup
  return {
    props: {
      meetupData: {
        id: meetupId,
        image: image, 
        title: title,
        address: address,
        description: description
      },
    },
  };
}

export default MeetupDetails;
