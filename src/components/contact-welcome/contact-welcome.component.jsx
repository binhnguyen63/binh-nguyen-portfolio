import ProjectData from "../../data/project-data";
import "./contact-welcome.style.css";
import { sendMessage } from "../../utils/firebase/firebase.utils";
const ContactWelcome = () => {
  const sendMessageHandler = async () => {
    const message = document.getElementById("message");
    const email = document.getElementById("email");
    const name = document.getElementById("name");
    const msgStatus = sendMessage(message.value, email.value, name.value);
    if (msgStatus) {
      document.querySelector(".success-msg").classList.remove("hidden");
      message.value = "";
      email.value = "";
      name.value = "";
    }
  };

  return (
    <div>
      <div className="contact-welcome">
        <img id="profile-pic" src={ProjectData.profile_pic}></img>
        <div className="contact-text">
          <h1>contact.</h1>
          <h5>Get in touch with me via social media or send me an email</h5>
          <div className="socials">
            <a href={ProjectData.socials.github} target="_blank">
              <img
                id="github"
                src={`${import.meta.env.BASE_URL}/github-mark.svg`}
              ></img>
            </a>
            <a href={ProjectData.socials.linkedin} target="_blank">
              <img
                id="linkedin"
                src={`${import.meta.env.BASE_URL}/LI-In-Bug.png`}
              ></img>
            </a>
          </div>
        </div>
      </div>
      <div className="email-me">
        <h3>Send me an email</h3>
        <form className="email-form">
          <div id="name-container">
            <label for="name">Name:</label>
            <input type="text" id="name" placeholder="Name" required></input>
          </div>
          <div className="message-container">
            <label for="message">Message:</label>
            <textarea id="message" placeholder="Message" required></textarea>
          </div>
          <div className="email-container">
            <label for="email">Email:</label>
            <input type="email" id="email" placeholder="Email" required></input>
          </div>
          <button
            className="submit-msg"
            type="submit"
            onClick={sendMessageHandler}
          >
            Submit
          </button>
        </form>
        <div className="success-msg hidden">
          Your message was sent successfully. Thank you!
        </div>
      </div>
    </div>
  );
};
export default ContactWelcome;
