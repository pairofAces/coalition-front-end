import './index.css';
import logo from './Logo.png';

function Header() {
  return (
      <header className="header">
        <div className="content">
            <div className="logo">
                <img src={logo} />
            </div>
            <div className="links">
                <a href="#">
                    01.HISTORY
                </a>
                <a href="#">
                    02.TEAM
                </a>
            </div>
        </div>
      </header>
  );
}

export default Header;
