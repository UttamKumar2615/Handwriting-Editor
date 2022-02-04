import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer_hrt">
        <h3>
          Made with{" "}
          <span role="img" aria-label="necro">
            👾
          </span>{" "}
          by{" "}
          <a
            href="https://github.com/UttamKumar2615"
            target="_blank"
            rel="noopener noreferrer"
          >
            Uttam
          </a>
        </h3>
      </div>
    </div>
  );
}

export default Footer;
