import "./contact.scss";
import { useState } from "react";


export default function Contact() {

    const [message, setMessage] = useState(false);
    const [email, setEmail] = useState("");
    const [sendMessage, setSendMessage] = useState("");

    const clearSendMessage = () => {
        setSendMessage("");
    }

    const valueforSendMessage = (e) => {
        setSendMessage(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }

    const clearEmail = () => {
        setEmail("");
    }

    const EmailValue = (e) => {
        setEmail(e.target.value);
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={(e) => {
                    handleSubmit(e);
                    clearEmail();
                    clearSendMessage();

                }}
                    action="">
                    <input type="email" placeholder="Email" required value={email} onChange={EmailValue} />
                    <textarea placeholder="Message" value={sendMessage} onChange={valueforSendMessage} required></textarea>
                    <button type="submit" >Send</button>
                    {message && <span>Thanks, I 'll replay ASP :)</span>}


                </form>
            </div>

        </div>
    )
}
