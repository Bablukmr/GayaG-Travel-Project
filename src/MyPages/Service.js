import Destination from "../components/Destination";
import Navbar from "../components/Navbar";
import Mainpage from "./mainpage";
import "./mainpage.css";
import TextAnimation from "./animatedtext";
function Service() {
  return (
    <>
      <Navbar />
      <Mainpage
        cName="Service-img"
        mainImg="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNlcnZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        title="Service"
      />

      <h4
        style={{
          margin: "4%",
          color: "white",
          textShadow: "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue"
        }}
      >
        include basic facilities and services that help a visitor feel
        comfortable and secure in your destination.
      </h4>
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
      <TextAnimation />
      <Destination />
    </>
  );
}
export default Service;
