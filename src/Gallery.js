import './style.css';
import React, { useCallback , useState } from 'react'
import thumbsUp from './thumbs-up.png'

function Home(){
    const [state, setState] = useState({
        likes1 : 0,
        likes2 : 0
    });

    const handleClick = (e) => {
        const name = e.target.value;
        if (name === "button1"){
            setState(prevState =>{
                return(
                    {
                        likes1: prevState.likes1+1,
                        likes2: prevState.likes2
                    })}
            )
        }
        else if (name === "button2"){
            setState(prevState =>{
                return(
                    {
                        likes1: prevState.likes1,
                        likes2: prevState.likes2+1
                    })}
            )
        }
    };

    return(
        <table>
            <tr>

                <td style={{textAlign: "left"}}>
                    <div>
                        <div>
                            <img src='https://picsum.photos/seed/picsum/500' alt="" className="images"></img>
                        </div>
                        <div>
                            <button className="button-img" onClick={e => handleClick(e)} value="button1">Like</button>
                            <h3 style={{fontSize:30}}><img src={thumbsUp} alt="" width="30px" height="30px"></img> {state.likes1}</h3>
                        </div>
                    </div>
                </td>

                <td style={{textAlign: "left"}}>
                    <div>
                        <div>
                            <img src='https://picsum.photos/seed/pics/500' alt="" className="images"></img>
                        </div>
                        <div>
                            <button className="button-img" onClick={e => handleClick(e)} value="button2">Like</button>
                            <h3 style={{fontSize:30}}><img src={thumbsUp} alt="" width="30px" height="30px"></img> {state.likes2}</h3>
                        </div>
                    </div>
                </td>

            </tr>
        </table>
    )
}

export default Home;
