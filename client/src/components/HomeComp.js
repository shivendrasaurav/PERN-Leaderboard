import React, { Fragment, useState, useEffect } from "react";
import LBData from "./Data/LeaderBoardData";

const Home = () =>{

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

            <h2>Leaderboard</h2>

            <table className="table_container">
                <thead>
                    <tr>
                        <th>Rank</th>  
                        <th>Name</th>
                        <th>Questions</th>
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

        </Fragment>
    );
}

export default Home;