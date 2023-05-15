import Style from "./Forms.module.css";

export default function Forms() {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57957.67259184262!2d84.94088074427181!3d24.78331061246361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32a440a1b3c1f%3A0xcef6b223bdbf34a6!2sGaya%2C%20Bihar!5e0!3m2!1sen!2sin!4v1684171134438!5m2!1sen!2sin"
        width="100%"
        height="155px"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="maps"
      ></iframe>
      <div className="container">
        <div className="contect-form">
          <form action="https://formspree.io/f/mpzenywk" method="POST">
            <input
              type="Text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            />
            <br />
            <input
              type="Email"
              name="username"
              placeholder="Email"
              autoComplete="off"
              required
            />
            <br />

            <textarea
              name="message"
              cols="30"
              rows="6"
              placeholder="Write your message"
              autoComplete="off"
              required
            ></textarea>
            <input type="submit" value="send" className={Style.submits} />
          </form>
        </div>
      </div>
    </>
  );
}
