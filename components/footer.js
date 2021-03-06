import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

export default function Footer() {
  return (
    <div className="container">
      <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
          <div className="col-12 col-md">
            <h3 className="text-primary">Try Ortho Keys!</h3>
            <small className="d-block mb-1 text-muted">© 2020 All Right Reserved</small>
            <small className="d-block mb-3 text-muted">Developed by <a href="https://ianfajardo.com">Ian Fajardo</a></small>

            <iframe src="https://ghbtns.com/github-btn.html?user=ianfajardo&type=follow" frameBorder="0" scrolling="0" width="230" height="30" title="GitHub"></iframe>

            <iframe src="https://ghbtns.com/github-btn.html?user=twitter&repo=tryorthokeys&type=star" frameBorder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>
          </div>
          <div className="col-6 col-md">
            <h5>Why Ortholinear</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="/#compact">Compact</a></li>
              <li><a className="text-muted" href="/#programmable">Programmable</a></li>
              <li><a className="text-muted" href="/#programmable">QMK Firmware</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Keyboards</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="/keyboards">Ortholinear Keyboards</a></li>
              <li><a className="text-muted" href="/olkb">OLKB</a></li>
              <li><a className="text-muted" href="/split">Split</a></li>
              <li><a className="text-muted" href="/niu40">NIU40</a></li>
            </ul>
          </div>
        </div>
      </footer></div>
  );
}
