import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUP = [
  {
    id: "1",
    name: "Dummy meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/PonNagarChamTowers.jpg/1280px-PonNagarChamTowers.jpg",
    address: "123 Fake Street, Fake City,Fake State,Fake Country",
  },
  {
    id: "2",
    name: "Second Dummy meetup",
    image:
      "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/08/bo-bien-vinpearl-bai-dai-nha-trang2-e1504670930803.jpg",
    address: "123 Fake Street, Fake City,Fake State,Fake Country",
  },
];

function HomePage(props) {

  return <MeetupList meetups={props.meetups} />
}

export async function getStaticProps(){
  //fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUP,
    },
    revalidate: 3600
  }
}
export default HomePage;
