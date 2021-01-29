import React from "react";
import { Footer } from "../components";
import * as ROUTES from "../constants/routes";

export default function FooterContainer() {
  return (
    <Footer>
      <Footer.Bottom>
        <Footer.Icons>
          <Footer.Icon>
            <i class="fab fa-facebook-f"></i>
          </Footer.Icon>
          <Footer.Icon>
            <i class="fab fa-instagram"></i>
          </Footer.Icon>
          <Footer.Icon>
            <i class="fab fa-twitter"></i>
          </Footer.Icon>
          <Footer.Icon>
            <i class="fab fa-youtube"></i>
          </Footer.Icon>
          <Footer.Icon>
            <i class="fab fa-linkedin-in"></i>
          </Footer.Icon>
        </Footer.Icons>
        <Footer.Links>
          <Footer.Link to={ROUTES.HOME}>Home</Footer.Link>
          <Footer.Link to={ROUTES.MANUFACTURERS}>Shop</Footer.Link>
          <Footer.Link to={ROUTES.INITIATIVE}>Initiative</Footer.Link>
          <Footer.Link to={ROUTES.CONTACT}>Contact</Footer.Link>
        </Footer.Links>
        <Footer.TextPrint />
      </Footer.Bottom>
    </Footer>
  );
}
