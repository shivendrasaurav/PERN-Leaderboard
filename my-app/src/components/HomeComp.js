import React, {Fragment} from "react";
import echo from "./static/echoar.jfif";

const Home = () => {

  return(
    <Fragment>

        <div className="column lg-5 md-7 sm-9 primary_inverted page_container fullheight">
            <h4>Welcome !!</h4>
            <h6>Upcoming Events</h6>
            <img src={echo} alt="Echo AR" className="event_card dlevel2" />

            <br /><br />
            <h6>Polls</h6>
            <div className="sch_event dlevel2">
                <h6 className="title">Are you excited for REVA HACK &lt;/&gt; 2020?</h6>
                <button className="small">Yes</button>
                <button className="small">No</button>
            </div>

        </div>

    </Fragment>
  );

}

export default Home;