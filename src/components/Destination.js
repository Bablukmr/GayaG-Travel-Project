import "./Destination.css";

function Destination() {
  return (
    <>
      <div className="main-card">
        <div className="card">
          <img src={require("../Pictures/temple.jpg")} alt="Card" />
          <span />
          <h1>Mahabodhi Temple</h1>
          <h4>
            This is The UNESCO World Heritage Site. The Mahabodhi Temple serves
            to be the main and most important attraction in Bodh Gaya.
            <br /> It was built in the 7th century, surrounding the Bodhi Tree
            that Buddha sat under whilst he attained enlightenment.
          </h4>
          <br />
          <i style={{ color: "green" }} className="fa-solid fa-location-dot">
            {" "}
          </i>
          10.6 KM from Gaya Airport ✈️, 20 KM From Gaya Railway Station 🚉
          <br />
        </div>
        <div className="card">
          <img src={require("../Pictures/tree.jpg")} alt="Card" />
          <span />
          <h1>Bodhi Tree, Bodh Gaya</h1>{" "}
          <h4>
            The Bodhi Tree holds great significance in Buddhism as it is the
            tree under which Siddhartha Gautama, the historical Buddha, attained
            enlightenment. The term "Bodhi" itself means "awakening" or
            "enlightenment" in Sanskrit.
          </h4>
          <br />
          <i style={{ color: "green" }} className="fa-solid fa-location-dot">
            {" "}
          </i>
          <p>Near Mahabodhi Temple</p>
        </div>
        <div className="card">
          <img src={require("../Pictures/bodh.jpg")} alt="Card" />
          <span />
          <h1>Great Buddha Statue</h1>{" "}
          <h4>
            The statue, also known as the "Mahabodhi Buddha Vihar," stands at a
            height of approximately 80 feet (24 meters) and is made of red
            granite. It was unveiled by the 14th Dalai Lama in 1989 and has
            since become an iconic symbol of Bodh Gaya.
          </h4>
          <br />
          <i style={{ color: "green" }} className="fa-solid fa-location-dot">
            {" "}
          </i>
          <p>1.5 km from Mahabodhi Temple</p>
        </div>
        <div className="card">
          <img src={require("../Pictures/visnu.jpg")} alt="Card" />
          <span />
          <h1>Vishnupad Temple</h1>{" "}
          <h4>
            The temple built on the spot where 40-cm-long footprint of Lord
            Vishnu in a basalt rock.The temple has a carvings and a tall spire.
            and On top of the temple is a gold flag
            <span />
            🚩weighing 51 kg.
          </h4>
          <br />
          <i style={{ color: "green" }} className="fa-solid fa-location-dot">
            {" "}
          </i>
          <p>
            Temple located in 4.5km from Gaya Railway station <span />
            🚉
          </p>
        </div>
        <div className="card">
          <img src={require("../Pictures/rubber.jpg")} alt="Card" />
          <span />
          <h1>Gayaji Dam</h1>{" "}
          <h4>
            Gayaji Dam: India's longest rubber dam located on the Falgu River.
          </h4>
          <br />
          <i style={{ color: "green" }} className="fa-solid fa-location-dot">
            {" "}
          </i>
          <p>Near Vishnupath Temple</p>
        </div>
        <div className="card">
          <img src={require("../Pictures/mangal.jpg")} alt="Card" />
          <span />
          <h1>Maa Mangla Gauri</h1>{" "}
          <h4>
            The Mangla Gauri temple in Shakti Peetham This temple is among the
            eighteen maha shaktipeeth. The present temple dates back to the 15th
            century.
          </h4>
          <br />
          <i style={{ color: "green" }} className="fa-solid fa-location-dot">
            {" "}
          </i>
          <p>
            Temple located in 4.5km from Gaya Railway station <span />
            🚉
          </p>
        </div>
        <div className="card">
          <img src={require("../Pictures/bablu1.jpg")} alt="Card" />
          <span />
          <h1>Gehlaur</h1>{" "}
          <h4>
            Dashrath Manjhi, famously known as the Mountain Man who
            single-handedly carved a path through a mountain in Gehlaur.
          </h4>
          <br />
          <i style={{ color: "green" }} className="fa-solid fa-location-dot">
            {" "}
          </i>
          <p>
            31 km from Gaya station <span />
            🚉
          </p>
        </div>
        <div className="card">
          <img src={require("../Pictures/nalanda.jpg")} alt="Card" />
          <span />
          <h1>Nalanda University</h1>{" "}
          <h4>
            It is a UNESCO World Heritage Site.Nalanda University was a
            stand-alone International University
          </h4>
          <br />
          <i style={{ color: "green" }} className="fa-solid fa-location-dot">
            {" "}
          </i>
          <p>
            58 km from Gaya station <span />
            🚉
          </p>
        </div>
        <div className="card">
          <img src={require("../Pictures/rajgir.jpg")} alt="Card" />
          <span />
          <h1>Rajgir</h1>{" "}
          <h4>
            It was a royal city surrounded by seven hills, which served as the
            capital of the Magadh empire from the time of Mahabharata to 5th
            Century BC
          </h4>
          <br />
          <i style={{ color: "green" }} className="fa-solid fa-location-dot">
            {" "}
          </i>
          <p>60km From Gaya</p>
        </div>
        <div className="card">
          <img src={require("../Pictures/glass.jpg")} alt="Card" />
          <span />
          <h1>Glass Bridge Rajgir</h1>{" "}
          <h4>The country's second and Northeast India's first glass bridge</h4>
          <br />
          <br />
          <i style={{ color: "green" }} className="fa-solid fa-location-dot">
            {" "}
          </i>
          <p>Rajgir</p>
          <br />
        </div>
      </div>
    </>
  );
}
export default Destination;
