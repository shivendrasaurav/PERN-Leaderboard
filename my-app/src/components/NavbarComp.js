import React, {Fragment} from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  return(
    <Fragment>

        <span className="column lg-2 md-1 sm-0"></span>
        <div className="pivot_menu column lg-5 md-7 sm-9">
            <NavLink className="pivot_button column lg-3 md-3 sm-3 ta_center" to="/home">
                <i className="ms-Icon ms-Icon--Home"></i>
            </NavLink>  
            <NavLink className="pivot_button column lg-3 md-3 sm-3 ta_center" to="/leaderboard">
                <i className="ms-Icon ms-Icon--StackedColumnChart2"></i>
            </NavLink>  
            <NavLink className="pivot_button column lg-3 md-3 sm-3 ta_center" to="/schedule">
                <i className="ms-Icon ms-Icon--CalendarYear"></i>
            </NavLink>  
        </div>  


    </Fragment>
  );

}

export default Navbar;