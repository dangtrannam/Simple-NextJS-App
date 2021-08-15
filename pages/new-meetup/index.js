import NewMeetupForm from "../../components/meetups/NewMeetupForm";
function NewMeetupPage() {
    function addMeetupHandler(enteredMeetupData){
        console.log("addMeetupHandler", enteredMeetupData);
    }


    return <NewMeetupForm onAddMeetup={addMeetupHandler}/>;
}

export default NewMeetupPage;