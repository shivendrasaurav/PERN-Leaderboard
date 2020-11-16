import React, {Fragment} from "react";
import { NavLink } from "react-router-dom";

const FourZeroFour = () => {

  return(
    <Fragment>

        <span className="column lg-2 md-1 sm-0"></span>
        <div className="column lg-5 md-7 sm-9 primary_inverted page_container fullheight">
            <h6>Whoa!! How Did You Arrive Here??</h6>
            <br /><br /><br />
            <h1 style={{fontSize: "26vh"}}>404</h1>
            <br /><br /><br />
            <h6>Why Not Head Back <NavLink style={{fontSize: "5vh", color: "#06a5af", fontFamily: "Apex M2"}} to="/home">Home</NavLink>??</h6>

        </div>

    </Fragment>
  );

}

export default FourZeroFour;