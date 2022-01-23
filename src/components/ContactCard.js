import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
    const { id, name, email } = props.contact;

    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user" />
            <div className="content" style={{ marginBottom: "15px" }} >
                <div className="header">{name}</div>
                <div>{email}
                    <i className="trash alternate outline icon"
                        style={{ color: "red", marginTop: "7px", justifySelf: "right" }}
                        onClick={()=>props.clickHandler(id)}
                        ></i>
                </div>
            </div>

        </div>
    )
}
export default ContactCard;