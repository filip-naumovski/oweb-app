import './style.css';
import React, { useState, useEffect } from 'react'
import thumbsUp from './resources/thumbs-up.png'
import loading from './resources/loading.gif'
import heart from './resources/heart.png'
import { motion } from 'framer-motion'

function Gallery() {

    const [state, setState] = useState({
        likes1: 0,
        likes2: 0,
        loaded1: false,
        loaded2: false
    });

    const [imageClicked, setImageClicked] = useState({
        image1: false,
        image2: false
    })

    const [textForm, setTextForm] = useState({
        form1: "",
        form2: ""
    })

    const [comments, setComments] = useState({
        comments1: [],
        comments2: []
    })

    const imageLoaded = imageName => () => {
        if (imageName === "image1") {
            setState((prevState) => {
                const newState = {
                    ...prevState
                }
                newState.loaded1 = true
                return newState
            }
            )
        }
        else if (imageName === "image2") {
            setState((prevState) => {
                const newState = {
                    ...prevState
                }
                newState.loaded2 = true
                return newState
            }
            )
        }
    }

    const handleClickImg = imageName => () => {
        if (imageName === "image1") {
            setImageClicked((prevState) => {
                const newState = {
                    ...prevState
                }
                newState.image1 = true
                return newState
            })
            setState((prevState) => {
                const newState = {
                    ...prevState
                }
                newState.likes1++
                return newState
            })
            setTimeout(() => setImageClicked((prevState) => {
                const newState = {
                    ...prevState
                }
                newState.image1 = false
                return newState
            }), 850)
        }
        else if (imageName === "image2") {
            setImageClicked((prevState) => {
                const newState = {
                    ...prevState
                }
                newState.image2 = true
                return newState
            }
            )
            setState((prevState) => {
                const newState = {
                    ...prevState
                }
                newState.likes2++
                return newState
            })
            setTimeout(() => setImageClicked((prevState) => {
                const newState = {
                    ...prevState
                }
                newState.image2 = false
                return newState
            }), 850)
        }
    }

    const handleClick = (e) => {
        const name = e.target.value;
        if (name === "button1") {
            setState((prevState) => {
                const newState = {
                    ...prevState
                }
                newState.likes1++
                return newState
            }
            )
        }
        else if (name === "button2") {
            setState((prevState) => {
                const newState = {
                    ...prevState
                }
                newState.likes2++
                return newState
            }
            )
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name
        if (name === "submit1") {
            setComments((prevState) => {
                const newState = {
                    ...prevState
                }
                newState.comments1.push(textForm.form1)
                return newState
            })
            setTextForm((prevState) => {
                const newState = {
                    ...prevState
                }
                newState.form1 = ""
                return newState
            })
        }
        else if (name === "submit2") {
            setComments((prevState) => {
                const newState = {
                    ...prevState
                }
                newState.comments2.push(textForm.form2)
                return newState
            })
            setTextForm((prevState) => {
                const newState = {
                    ...prevState
                }
                newState.form2 = ""
                return newState
            })
        }
    }

    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        if (name === "form1") {
            setTextForm((prevState) => {
                const newState = {
                    ...prevState
                }
                newState.form1 = value;
                return newState
            })
        }
        else if (name === "form2") {
            setTextForm((prevState) => {
                const newState = {
                    ...prevState
                }
                newState.form2 = value;
                return newState
            })
        }
    }

    return (
        <div>
            <motion.h2 animate={{ scale: 1.5, y: -500, opacity: 0, }} transition={{ duration: '7' }} className="gallery-popup">Try double clicking the pictures!</motion.h2>
            <motion.div initial={{ scale: 1, opacity: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: '0.7' }}>
                <table className="table">
                    <tbody>
                        <img src='https://picsum.photos/seed/picsum/4000' alt="" className="images-inv" onLoad={imageLoaded("image1")} />
                        <img src='https://picsum.photos/seed/seed2/4000' alt="" className="images-inv" onLoad={imageLoaded("image2")} />
                        <tr>
                            <td style={{ textAlign: "left" }} className="gallery-element">
                                <div>
                                    <div>
                                        {state.loaded1 ? <img src='https://picsum.photos/seed/picsum/4000' alt="" className="images" onDoubleClick={handleClickImg("image1")} /> : <img alt="" src={loading} className="loading" />}
                                        <div>
                                            <img src={heart} alt="" className={imageClicked.image1 ? "heart-showing" : "heart"} />
                                        </div>
                                    </div>
                                    <table style={{ tableLayout: "fixed" }}>
                                        <tbody>
                                            <tr>
                                                <td style={{ wordWrap: "break-word", maxWidth: '350px' }}>
                                                    <div style={{ textAlign: "left", position: "relative" }}>
                                                        <form name="submit1" onSubmit={e => handleSubmit(e)} style={{ marginLeft: '2px' }}>
                                                            <input type="text" placeholder="Comment" value={textForm.form1} onChange={handleChange} name="form1" />
                                                            <button type="submit" className="button-comment" >Submit</button>
                                                        </form>
                                                        <div style={{ maxWidth: '230px' }}>{comments.comments1.map((comment, key) => <h3 className="comment" key={key}>{comment}<hr></hr></h3>)}</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div style={{ textAlign: "right", marginLeft: '16px' }}>
                                                        <button className="button-img" onClick={e => handleClick(e)} value="button1">Like</button>
                                                        <h3 className="comment" style={{ fontSize: 30 }}><img src={thumbsUp} alt="" width="30px" height="30px"></img> {state.likes1}</h3>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </td>

                            <td style={{ textAlign: "left" }} className="gallery-element">
                                <div>
                                    <div>
                                        {state.loaded2 ? <img src='https://picsum.photos/seed/seed2/4000' alt="" className="images" onDoubleClick={handleClickImg("image2")} /> : <img alt="" src={loading} className="loading" />}
                                        <div>
                                            <img src={heart} alt="" className={imageClicked.image2 ? "heart-showing" : "heart"} />
                                        </div>
                                    </div>
                                    <table style={{
                                        tableLayout: "fixed"
                                    }}>  <tbody>
                                            <tr>
                                                <td style={{ wordWrap: "break-word", maxWidth: '350px' }}>
                                                    <div style={{ textAlign: "left", position: "relative" }}>
                                                        <form name="submit2" onSubmit={e => handleSubmit(e)}>
                                                            <input type="text" placeholder="Comment" value={textForm.form2} onChange={handleChange} name="form2" />
                                                            <button type="submit" className="button-comment" >Submit</button>
                                                        </form>
                                                        <div style={{ maxWidth: '230px' }}>{comments.comments2.map((comment, key) => <h3 className="comment" key={key}>{comment}<hr></hr></h3>)}</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div style={{ textAlign: "right", marginLeft: '16px' }}>
                                                        <button className="button-img" onClick={e => handleClick(e)} value="button2">Like</button>
                                                        <h3 className="comment" style={{ fontSize: 30 }}><img src={thumbsUp} alt="" width="30px" height="30px"></img> {state.likes2}</h3>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table >
            </motion.div>
        </div >
    )
}

export default Gallery;
