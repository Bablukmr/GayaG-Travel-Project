import Navbar from "../components/Navbar";
import Forms from "./Form";
import Mainpage from "./mainpage";
import "./mainpage.css";

function Contact() {
  return (
    <>
      <Navbar />

      <Mainpage
        cName="contact-img"
        mainImg="https://images.unsplash.com/photo-1551822620-ac3afd8acd1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGNvbnRhY3QlMjB1c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        title="Contect Us"
        //btnClass="show"
      />
      <br />
      <br />
      <Forms />
    </>
  );
}
export default Contact;
