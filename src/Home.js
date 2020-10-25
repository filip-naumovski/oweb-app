import './style.css';
import React from 'react'
import portrait from './portrait.jpg'

function Home(){
    return(
        <div>
            <table>
                <tr>
                    <td style={{alignItems: "left"}}>
                        <a href="https://en.wikipedia.org/wiki/Donald_Trump"><img className="portrait" src={portrait} alt="" style={{width: "300px", height: "400px"}}></img></a>
                    </td>

                    <td style={{alignItems: "left", verticalAlign: "top"}}>
                        <h1>Donald John Trump (born June 14, 1946) is the 45th and current <a style={{color: "black"}} href="https://en.wikipedia.org/wiki/President_of_the_United_States">president of the United States</a>.</h1>
                        <h2>Before entering politics, he was a businessman and television personality.</h2>
                        <p style={{fontSize: "120%"}}>Trump's political positions have been described as populist, protectionist, isolationist,
                             and nationalist. He entered the 2016 presidential race as a <a style={{color:"black"}} href="https://en.wikipedia.org/wiki/Republican_Party_(United_States)">Republican</a> and was elected in a surprise electoral college victory over <a style={{color: "black"}} href="https://en.wikipedia.org/wiki/Democratic_Party_(United_States)">Democratic</a> nominee <a style={{color: "black"}} href="https://en.wikipedia.org/wiki/Hillary_Clinton">Hillary Clinton</a> while losing the popular vote.
                              He became the oldest first-term U.S. president and the first without prior military or government service.
                            </p>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Home;
