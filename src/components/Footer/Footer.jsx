import './Footer.css';
function Footer() {
  return (
    <footer className="footer text-xs">
      <div className="container">
        <div className="flex justify-center">
          <div className="col-md-6">
            <ul className="flex">
              <li className="mr-4"><a href="/contactus/index">Contact us</a></li>
              <li className="mr-4"><a href="/terms-and-conditions">Subscription Terms & Conditions</a></li>
              <li className="mr-4"><a href="/cookie-settings">Cookie Settings</a></li>
              <li className="mr-4"><a href="/privacy-cookies-policy">Privacy Policy & Cookies</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;