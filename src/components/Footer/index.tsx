import { FC, HTMLAttributes } from "react";
import { HashLink } from "react-router-hash-link";
import { Container, Content, Copyright, Column, Image } from "./styles";
import lemon_icon from "../../assets/lemon-icon-01.svg";

const Footer: FC<HTMLAttributes<HTMLElement>> = (props): JSX.Element => {
  return (
    <Container {...props}>
      <Content>
        <Image src={lemon_icon} alt="Restaurant Food" />
        <Column>
          <h4>
            Little Lemon
          </h4>
          <ul>
            <li>
              {" "}
              <HashLink to="/">Home</HashLink>{" "}
            </li>
            <li>
              {" "}
              <HashLink to="/#">Menu</HashLink>{" "}
            </li>
            <li>
              {" "}
              <HashLink to="/bookings">Reservations</HashLink>{" "}
            </li>
          </ul>
        </Column>
        <Column>
          <h4>Contact</h4>
          <ul>
            <li>
              <address>
                331 E Chicago
                LaSalle Street Chicago, USA
              </address>
            </li>
            <li>
              {" "}
              <a href="tel:+551199999999" target="_blank" rel="external">
                +55 11 9999-9999
              </a>{" "}
            </li>
            <li>
              {" "}
              <a
                href="mailto:contact@littlelemon.com"
                target="_blank"
                rel="external"
              >
                contact@littlelemon.com
              </a>{" "}
            </li>
          </ul>
        </Column>
        <Column>
          <h4>Social Media</h4>
          <ul>
            <li>
              {" "}
              <a
                href="https://www.facebook.com/littlelemon"
                target="_blank"
                rel="external"
              >
                Facebook
              </a>{" "}
            </li>
            <li>
              {" "}
              <a
                href="https://www.instagram.com/littlelemon"
                target="_blank"
                rel="external"
              >
                Instagram
              </a>{" "}
            </li>
            <li>

              <a
                href="https://twitter.com/littlelemon"
                target="_blank"
                rel="external"
              >
                Twitter
              </a>{" "}
            </li>
          </ul>
        </Column>
      </Content>
      {/* <Copyright>
        <span>Johannes Johnson</span>
      </Copyright> */}
    </Container>
  );
};

export default Footer;
