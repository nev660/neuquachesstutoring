import {Link as ScrollLink} from 'react-scroll';
import {Navbar, Nav} from 'react-bootstrap';
function myNav() {
return (
<Navbar bg="transparent" variant="dark" className="navbar position-absolute">
<Navbar.Brand href="#">NVChess+</Navbar.Brand>
<Nav className="navElems text-white">
  <ScrollLink to="home">Home&nbsp;&nbsp;&nbsp;&nbsp;</ScrollLink>
  <ScrollLink to="about" smooth={true} duration={300}>About&nbsp;&nbsp;&nbsp;&nbsp;</ScrollLink>
  <ScrollLink to="contact" smooth={true} duration={300}>Contact&nbsp;&nbsp;&nbsp;&nbsp;</ScrollLink>
</Nav>
</Navbar>
);
}
export default myNav;