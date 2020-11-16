import React, {Fragment} from "react";

const Schedule = () => {

  return(
    <Fragment>

        <div className="column lg-5 md-7 sm-9 primary_inverted page_container">
            <h4>Schedule</h4>
            <br />
            <h6>30th October</h6>
            <div className="sch_event">
                <h6 className="title">Echo AR Workshop</h6>
                <h5 className="speaker">Alon Grinshpoon</h5>
            </div>
            <br /><br />
            <h6>2nd November - Session 1</h6>
            <div className="horizontal">
                <div className="sch_event">
                    <h6 className="title">UI/UX for Developers AND Code: Future of Design and Tech</h6>
                    <h5 className="speaker">Punit Chawla</h5>
                </div>
                <div className="sch_event">
                    <h6 className="title">Carrer, niche skills and importance of presentation</h6>
                    <h5 className="speaker">Aqib Ahmed</h5>
                </div>

            </div>

            <br /><br />
            <h6>2nd November - Session 2</h6>
            <div className="horizontal">
                <div className="sch_event">
                    <h6 className="title">Leveraging AI to super-charge your innovations</h6>
                    <h5 className="speaker">Akash James</h5>
                </div>
                <div className="sch_event">
                    <h6 className="title">Getting Started with FD Web</h6>
                    <h5 className="speaker">Singam Mohit Reddy</h5>
                </div>
                <div className="sch_event">
                    <h6 className="title">Importance of Open Source</h6>
                    <h5 className="speaker">Kunal Kushwaha</h5>
                </div>

            </div>

            <br /><br />
            <h6>3rd November</h6>
            <div className="horizontal">
                <div className="sch_event">
                    <h6 className="title">How to make an Elevator Pitch</h6>
                    <h5 className="speaker">Emily Perry</h5>
                </div>
                <div className="sch_event">
                    <h6 className="title">Getting started with Dart</h6>
                    <h5 className="speaker">Sreevallabha</h5>
                </div>
                <div className="sch_event">
                    <h6 className="title">Flutter | Build your first App</h6>
                    <h5 className="speaker">Sreevallabha</h5>
                </div>

            </div>

        </div>

    </Fragment>
  );

}

export default Schedule;