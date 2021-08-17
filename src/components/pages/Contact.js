import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import Heading from "../PageHeader";


export default function Contact() {

    function clearForm(){
        setErrorMessage("");
        setEmail("");
        setPhone("");
        setPName("");
        setText("");
        //setAMessage("");
    }

    const [pName, setPName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [text, setText] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [aMessage, setAMessage] = useState("");

    const handleInputChange = (e) => {
        setErrorMessage("");
        setAMessage("");

        const { name: inputType, value: inputValue } = e.target;

        if(inputType === "email") {
            setEmail(inputValue);
        } else if(inputType === "pName") {
            setPName(inputValue);
        } else if(inputType === "phone") {
            setPhone(inputValue);
        } else {
            setText(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(!email && !text && !pName && !phone) {
            setErrorMessage("Fill in the form before submitting");
            return;
        }
        if(!validateEmail(email)) {
            setErrorMessage("Enter a valid email address");
            return;
        } else if(!text) {
            setErrorMessage("Enter a message to submit form");
            return;
        } else if (!pName) {
            setErrorMessage("Enter a name before continuing");
            return;
        } else if (!phone) {
            setErrorMessage("Provide a phone number before continuing");
            return;
        } else {
            setAMessage(`Your message has been sent ${pName}`);
        }
        clearForm();
    }

    return (
        <div className="contact-container">
            <Heading heading={"Contact"} />

            <form>
                <input 
                className="input"
                value={pName}
                name="pName"
                onChange={handleInputChange}
                type="text"
                placeholder="Name"
                />

                <input 
                className="input"
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder="Email"
                />

<input 
                className="input"
                value={phone}
                name="phone"
                onChange={handleInputChange}
                type="text"
                placeholder="Phone"
                />

                <textarea
                className="input textarea"
                value={text}
                name="text"
                onChange={handleInputChange}
                type="text"
                rows="8"
                columns="10"
                placeholder="Enter Message"
                />

                <button className="btn" onClick={handleFormSubmit}>Submit</button>
            </form>

            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}

            { aMessage && (
                <div>
                    <p className="message">{aMessage}</p>
                </div>
            )

            }


        </div>
    )
}

