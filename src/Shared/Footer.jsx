import logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <footer className="footer p-10  text-base-content">
      <aside>
        <img src={logo} alt="" />
        <p>
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </aside>
      <nav>
        <header className="footer-title">About</header>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">Service</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">Why Car Docto</a>
        <a className="link link-hover">About</a>
      </nav>
      <nav>
        <header className="footer-title">Support</header>
        <a className="link link-hover">Support Center</a>
        <a className="link link-hover">Feedback</a>
        <a className="link link-hover">Accesbility</a>
      </nav>
    </footer>
  );
};

export default Footer;
