import React, { Component } from 'react';
import "./../css/Contact.css";
import hello from "./../images/sayHellotxt.gif";
import contact from "./../images/contacttxt.gif";
import email from "./../images/icon_email.jpg";
import mail from "./../images/icon_mail.jpg";
import phone from "./../images/icon_phone.jpg";


const Contact = () => {
        return <div>
            <div className="topPad">
              <div id="main">
                <div id="mainLeft">
                  <img src={contact} />
                  {/* end #mainLeft */}
                </div>
                <div id="mainRight">
                  <div className="columnLeft">
                    <img src={phone} />
                    <div className="txt">
                      tel: +1 604 765 8831
                      {/* end .txt */}
                    </div>
                    {/* end .columnLeft */}
                  </div>
                  <div className="columnLeft2">
                    <img src={email} />
                    <div className="txt">
                      <a href="mailto:hello@thesum.ca">
                        hello@thesum.ca
                      </a>
                      {/* end .txt */}
                    </div>
                    {/* end .columnLeft */}
                  </div>
                  <div className="columnLeft3">
                    <img src={mail} />
                    <div className="txt2">
                      #105 - 1010 Chilco Street
                      <br />
                      Vancouver, British Columbia
                      <br />
                      Canada, V6G 2R6
                      {/* end .txt */}
                    </div>
                    {/* end .columnLeft */}
                  </div>
                  <br className="clearfloat" />
                  {/* end #mainRight */}
                </div>
                {/* end #main */}
              </div>
              {/* end.topPad */}
            </div>
            <div id="main">
              <div className="line">
                {/* end .line */}
                <div id="mainLeft">
                  <img src={hello} />
                  {/* end #mainLeft */}
                </div>
                <div id="mainRight">
                  <h4>Comments? Suggestions? Interesting projects?</h4> Please drop us a line using our email form or just stay
                  <br />
                  in the loop by joining our mailing list.
                  <div id="contactFormBox">
                    <form action="ContactForm.php" id="theform" name="theform" method="post">
                      <p>
                        <label htmlFor="name">Name</label>
                        <br />
                        <input id="name" type="text" defaultValue name="name" />
                      </p>
                      <p>
                        <label htmlFor="email">E-mail</label>
                        <br />
                        <input id="email" type="text" defaultValue name="email" />
                      </p>
                      <p>
                        <label htmlFor="message">Message</label>
                        <br />
                        <textarea id="message" rows={10} cols={60} name="message" defaultValue={""} />
                      </p>
                      <p />
                      <div id="error">
                        There were errors on the form, please make sure
                        all fields are filled out correctly.
                      </div>
                      <input className="submit" type="submit" name="submit" defaultValue />
                      <p />
                      <br className="clearfloat" />
                    </form>
                    {/* end contactFormBox */}
                  </div>
                  {/* end mainRight */}
                </div>
                {/* end #main */}
              </div>
              <br className="clearfloat" />
              {/* end #columnRight */}
            </div>
            {/* end .content */}
            {/* end .container */}
            {/* end.wrapper */}
          </div>;
    }


export default Contact;
