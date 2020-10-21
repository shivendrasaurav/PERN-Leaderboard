import React, { Fragment, useState, useEffect } from "react";

const Home = () =>{

        return(
            <Fragment>

                <h2>Leaderboard</h2>

                <table>
                    <thead>
                        <tr>
                            <th class="">Rank</th>  
                            <th class="">Name</th>
                            <th class="">Questions</th>
                            <th class="">Points</th>
                            <th class="">Average</th>  
                        </tr>  
                        
                    </thead>  
                    <tbody>  
                        <tr>
                            <td>1</td>  
                            <td>Ruby Sukis</td>  
                            <td>11</td>  
                            <td>102</td>  
                            <td>9.2</td>  
                        </tr>
                        
                        <tr>  
                            <td>2</td>  
                            <td>John Doe</td>  
                            <td>8</td>  
                            <td>92</td>  
                            <td>11.5</td>  
                        </tr>  
                        
                        <tr>  
                            <td>3</td>  
                            <td>H. S. Butcher</td>  
                            <td>9</td>  
                            <td>88</td>  
                            <td>9.7</td>  
                        </tr>  
                        
                        <tr>
                            <td>4</td>  
                            <td>Hereward Buchanan</td>  
                            <td>10</td>  
                            <td>88</td>  
                            <td>8.8</td>  
                        </tr>  
                        
                        <tr>
                            <td>5</td>  
                            <td>Jane Doe</td>  
                            <td>10</td>  
                            <td>88</td>  
                            <td>8.8</td>  
                        </tr>  
                        
                        <tr>
                            <td>6</td>  
                            <td>Huw Butbot</td>  
                            <td>11</td>  
                            <td>84</td>  
                            <td>7.6</td>  
                        </tr>  
                    </tbody>  
                </table>  

            </Fragment>
        );
}

export default Home;