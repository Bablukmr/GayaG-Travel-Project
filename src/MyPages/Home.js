import Destination from "../components/Destination";
import Navbar from "../components/Navbar";
import TextAnimation from "./animatedtext";
import Mainpage from "./mainpage";
import "./mainpage.css";

function Home() {
  return (
    <>
      <Navbar />
      <div>
        <Mainpage
          cName="cName"
          mainImg={require("../Pictures/bodh.jpg")}
          title="𝐆𝐀𝐘𝐀"
          title1="The Land of Enlightenment and Salvation"
          buttonText="Travel Plan"
          url="/"
          btnClass="show"
        />
      </div>
      <br />
      <br />
      <TextAnimation />
      <h1 style={{ color: "blue" }}>Popular Tourist Places</h1> <br />
      <Destination />
      <br />
      <br />
      <br />
      <p
        style={{
          margin: "4%",
          backgroundColor: "#aec78ba3",
          borderRadius: "12px"
        }}
      >
        Gaya is a holy city beside the Falgu River, in the northeast Indian
        state of Bihar. It’s known for 18th-century Vishnupad Mandir, a
        riverside temple with an octagonal shrine. Close by, ancient Mangla
        Gauri Temple is set on a hilltop. To the north, Hindu devotees bath in a
        Brahma Kund pond before honoring their deceased ancestors atop Pretshila
        Hill. To the south lies the Hindu pilgrimage center of Bodh
      </p>
      <br />
      <br />
    </>
  );
}
export default Home;

//../Pictures/main1.jpg Bodh Gaya!  The Land of Enlightenment and Salvation
