import './index.css';
import img from '../lamount.png';
import homebg from './homebg.png';

// this is the Home section that contains the hero banner image
// and the LA Mountains image

function HomeContainer() {
  return (
    <div className="home-bg">
      <img src={img} className="lamount"/>
      <img src={homebg} className="homebg"/>
    </div>
  );
}

export default HomeContainer;
