import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return <MeetupDetail  />;
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "1",
        },
      },
      {
        params: {
          meetupId: "2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  //fetch data for a single meetup
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/PonNagarChamTowers.jpg/1280px-PonNagarChamTowers.jpg",
        id: meetupId,
        title: "Pon Nagar Cham Towers",
        address: "Pon Nagar, New Delhi",
      },
    },
  };
}

export default MeetupDetails;
