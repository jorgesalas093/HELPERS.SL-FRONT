import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="flex">
          <div className="col-md-6">
            <ul className="inline">
              <li><a href="/">Home</a></li>
              <li><a href="/acerca-de">About us</a></li>
              <li><a href="/contacto">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;