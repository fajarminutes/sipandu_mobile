import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <div className="footer-nav-area" id="footerNav">
  <div className="suha-footer-nav">
    <ul className="h-100 d-flex align-items-center justify-content-between ps-0 d-flex rtl-flex-d-row-r">
      <li><Link to="/home"><i className="ti ti-home"></i>Home</Link></li>
      <li><Link to="/history"><i className="ti ti-book"></i>History</Link></li>
      <li><Link to="/id-card"><i className="ti ti-id-badge"></i>Id Card</Link></li>
      <li><Link to="/profile"><i className="ti ti-user"></i>Profil</Link></li>
    </ul>
  </div>
</div>

    </>
  );
};

export default Footer;