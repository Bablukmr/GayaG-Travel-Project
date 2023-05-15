import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>𝔾𝕒𝕪𝕒Ⓖ</h1>
          <p>Choose your destination.</p>
        </div>
        <div>
          <a href="https://github.com/Bablukmr" target="bablu">
            <i class="fa-brands fa-github"></i>
          </a>

          <a href="https://www.linkedin.com/in/bablukmr/" target="bablu">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.facebook.com/Bablukmr01" target="bablu">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>Project</h4>

          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All Versions</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">GitHub</a>
          <a href="/">Issues</a>
          <a href="/">Project</a>
          <a href="/"> Twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troubleshooting</a>
          <a href="/">Contact Us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
          <a href="/">License</a>
        </div>
      </div>
      <img
        src={require("../Pictures/bablu.jpg")}
        alt="Bablu"
        style={{ width: "60px", borderRadius: "50%" }}
      />
      <br />
      <span>Bablu Kumar</span>
    </div>
  );
};

export default Footer;
