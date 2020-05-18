
/*eslint-disable*/
import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

// reactstrap components
import { Container, Row, Nav, NavItem, NavLink } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container fluid>
          <Nav>
            <NavItem>
              <NavLink href="http://terremotos-api.herokuapp.com/index.html#/">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="http://terremotos-api.herokuapp.com/swagger-ui.html#/">API Docs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/victor-nazario/terremotos-api">Repository</NavLink>
            </NavItem>
          </Nav>
        </Container>
      </footer>
    );
  }
}

export default Footer;
