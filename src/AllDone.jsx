import "./AllDone.css";
import { Link } from "react-router-dom";
import mainLogo from "./assets/mainLogo.png";
import raiseHand from "./assets/raiseHand.svg";

function AllDone() {

  return (
    <div className="container-all-done">
      <img src={raiseHand} className="raiseHand" alt="raiseHand" />
      <h2>All Done!</h2>
      <Link to='/home'>
        <button className="start-exploring-button" type="button">Start exploring</button>
      </Link>
    </div>
  );
}

export default AllDone;
