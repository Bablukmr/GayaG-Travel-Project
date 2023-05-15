import "./mainpage.css";
function Mainpage(props) {
  return (
    <div className={props.cName}>
      <img src={props.mainImg} alt="Gautam Budha" style={{ width: "90%" }} />
      <div className="main-text">
        <h1>{props.title}</h1>
        <h2>{props.title1}</h2>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>
          {props.buttonText}
        </a>
      </div>
    </div>
  );
}
export default Mainpage;
