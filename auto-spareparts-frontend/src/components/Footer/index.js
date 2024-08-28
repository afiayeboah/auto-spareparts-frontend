import Styles from './styles';



const Footer = () => (
  <Styles className="footer">
    <div className="footer-wrapper">
      <div className="contact-info">
        <h3 className="title">Contact Us</h3>
        <ul className="contact-info">
          <li>Email: aatandoh56@gmail.com | afia.yakuamoah@gmail.com</li>
          <li>Phone: (+233 545720183), (+233 246827566)</li>
          <li>Address: (Accra-Ghana)</li>
        </ul>
      </div>
    </div>
    <div className="copyright">
      &copy; {new Date().getFullYear()} Auto Spare Parts Shop
    </div>
  </Styles>
);

export default Footer;

