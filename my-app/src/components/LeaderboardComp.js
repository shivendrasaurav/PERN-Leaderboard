import React, { Fragment, useState, useEffect } from "react";
import LBData from "./Data/LeaderBoardData";

const Leaderboard = () => {

    const [SortedData, setSortedData] = useState ([]);

    const sortdata = () => {
        const SortedLBData = LBData.sort(function(a, b){
            var x = b.points - a.points;
            var y = b.questions - a.questions;
            return x-y;
        });
        setSortedData(SortedLBData);
    }

    useEffect(() => {
        sortdata();
    }, []);

  return(
    <Fragment>

        <div className="column lg-5 md-7 sm-9 primary_inverted page_container fullheight">
            <h4>Leaderboard</h4>
            <table className="table_container">
                <thead>
                    <tr className="dlevel2">
                        <th>Rank</th>  
                        <th>Team Name</th>
                        <th>Rounds</th>
                        <th>Points</th>
                        <th>Average</th>  
                    </tr>  
                    
                </thead>  
                <tbody>  
                    {SortedData.map(data=>(
                        <tr key={data.id}>
                            <td>{data.id+1}</td>
                            <td>{data.name}</td>
                            <td>{data.questions}</td>
                            <td>{data.points}</td>
                            <td>{(data.points/data.questions).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>  
            </table>

        </div>

    </Fragment>
  );

}

export default Leaderboard;