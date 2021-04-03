import React from "react";
import "../css/footer.css";
import logo from "../assets/logo.png";

class Footer extends React.Component {
  render = () => (
    <div className="footer">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="info">
        <div>26 East Main Street,</div>
        <div>Norton, MA 02766</div>
        <div>(508)285-8300</div>
        <div>nortonhistorical@gmail.com</div>
      </div>
    </div>
  );
}

export { Footer };
